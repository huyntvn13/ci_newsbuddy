

<?php
require 'Slim/Slim.php';
require 'Slim/Middleware.php';
require 'Slim/Middleware/SessionCookie.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim(array(
    'cookies.lifetime' => '1 days', //parsed with `strtotime` internally
    'cookies.secret_key' => '!@#$NEWSBUDDY_HUYNT$#@!'
));

$app->get('/test-rest', function () use ($app) {
  echo "{sectionData:'aaaaa'}";
});

//$app->get('/employees', 'getEmployees');
//$app->get('/employees/:id',	'getEmployee');
//$app->get('/employees/:id/reports',	'getReports');
//$app->get('/employees/search/:query', 'getEmployeesByName');
//$app->get('/employees/modifiedsince/:timestamp', 'findByModifiedDate');
$app->post('/login', 'login');
$app->post('/register', 'register');
$app->get('/retrieve_status', 'retrieveStatus');
$app->get('/username/:id', authorize('user'), 'getUsername');
$app->get('/section/:section', 'getSectionData');
$app->run();

function getSectionData($section) {
  $data = (object) null;
  
  /* Articles */
  $sql = "SELECT  n.title, n.description, n.link, 
                  n.image_fullsize image, c.name_abbr cat_abbr, 
                  c.name_short cat_name, s.`name` source 
          FROM news_links n 
          LEFT JOIN news_categories c ON n.cat_id = c.id 
          LEFT JOIN news_sources s ON n.source_id = s.id 
          ORDER BY n.pubDate DESC
          LIMIT 18";
  $news = null;
  try {
    $db = getConnection();
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $news = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
  } catch(PDOException $e) {}
  $data->news = $news;
  
  /* catParent */
  $sql = "SELECT c.name_abbr, c.name, c.name_short, c.name_abbr parent_abbr 
          FROM news_categories c 
          WHERE c.parent_id = 0 
          UNION DISTINCT 
          SELECT c.name_abbr, c.name, c.name_short, d.name_abbr parent_abbr 
          FROM news_categories c LEFT JOIN news_categories d ON c.parent_id = d.id 
          WHERE c.parent_id <> 0";
  $catParentRaw = null;
  try {
    $db = getConnection();
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $catParentRaw = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
  } catch(PDOException $e) {}
  $catParent = array();
  foreach($catParentRaw as $object){
    $content = (object) null;
    $content->name = $object->name;
    $content->name_short = $object->name_short;
    $content->parent_abbr = $object->parent_abbr;
    $catParent[$object->name_abbr] = $content;
  }
  $data->catParent = $catParent;
  
  echo json_encode($data);
}

function retrieveStatus() {
  $app = \Slim\Slim::getInstance();
  
  $udt_e = $app->getEncryptedCookie('udt_e');
  $udt_r = $app->getEncryptedCookie('udt_r');
  
  // retrieve this user's info from db
  if(!empty($udt_e) && !empty($udt_r)) {
    $udt_e = trim(mysql_real_escape_string($udt_e));
  
    /* Query */
    $sql = "SELECT u.username, u.email, u.role FROM users u WHERE u.email='".$udt_e."' LIMIT 1";
    $user = null;
    try {
      $db = getConnection();
      $stmt = $db->prepare($sql);
      $stmt->execute();
      $user = $stmt->fetchObject();
      $db = null;
    } catch(PDOException $e) {}
    if($user){
      $returnedUser = trim($user->username);
      $returnedUser = ($returnedUser !== "") ? $returnedUser : $user->email;
      echo '{"loggedin":{"displayName":"'.$returnedUser.'"}}';
      //$app->setEncryptedCookie('udt_e', $user->email);
      //$app->setEncryptedCookie('udt_r', $user->role);
    }else {
      echo '{"notloggedin":{}}';
    }
  }else {
    echo '{"notloggedin":{}}';
  }
}

function login() {
  $app = \Slim\Slim::getInstance();
  if(!empty($_POST['email']) && !empty($_POST['password'])) {
    // normally you would load credentials from a database. 
    // This is just an example and is certainly not secure
    $email = mysql_real_escape_string($_POST['email']);
    $pass = mysql_real_escape_string($_POST['password']);
    $pass_md5 = md5($pass);
    
    /* Query */
    $sql = "SELECT u.username, u.email, u.role FROM users u WHERE (u.username='".$email."' OR u.email='".$email."') AND LOWER(u.password_md5)='".$pass_md5."' LIMIT 1";
    $user = null;
    try {
      $db = getConnection();
      $stmt = $db->prepare($sql);
      $stmt->execute();
      $user = $stmt->fetchObject();
      $db = null;
    } catch(PDOException $e) {
      echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
    if($user){
      $returnedUser = trim($user->username);
      $returnedUser = ($returnedUser !== "") ? $returnedUser : $user->email;
      $app->setEncryptedCookie('udt_e', $user->email);
      $app->setEncryptedCookie('udt_r', $user->role);
      
      // update login time
      $sql = "UPDATE users SET last_login_time=:time WHERE email=:email";
      try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $nowFormat = date('Y-m-d H:i:s');
        $stmt->bindParam("time", $nowFormat);
        $stmt->bindParam("email", $user->email);
        $stmt->execute();
        $db = null;
      } catch(PDOException $e) {
        //echo '{"error":{"text":'. $e->getMessage() .'}}';
      }
      
      echo '{"success":{"username":"'.$returnedUser.'"}}';
    }else {
      echo '{"error":{"text":"You shall not pass..."}}';
    }
  }
  else {
    echo '{"error":{"text":"Username and Password are required."}}';
  }
}

function register() {
  $app = \Slim\Slim::getInstance();
  if(!empty($_POST['email']) && !empty($_POST['username']) && !empty($_POST['password'])) {
    $email = mysql_real_escape_string($_POST['email']);
    $username = mysql_real_escape_string($_POST['username']);
    $pass = mysql_real_escape_string($_POST['password']);
    $pass_md5 = md5($pass);
    
    /* Query */
    $sql = "INSERT INTO users(email, username, password_md5, register_since) VALUES(:email, :username, :md5, :time)";
    try {
      $db = getConnection();
      $stmt = $db->prepare($sql);
      $nowFormat = date('Y-m-d H:i:s');
      $stmt->bindParam("email", $email);
      $stmt->bindParam("username", $username);
      $stmt->bindParam("md5", $pass_md5);
      $stmt->bindParam("time", $nowFormat);
      $stmt->execute();
      $db = null;
    } catch(PDOException $e) {
      $message = $e->getMessage();
      $duplicateType = 0;
      if(strpos($message, "Duplicate") && strpos($message, "@")){
        // duplicate email
        $duplicateType = 1;
      }else if(stripos($message, "Duplicate") && stripos($message, "unique_username")){
        $duplicateType = 2;
      }else{
      }
      echo '{"error":{"duplicateType":'.$duplicateType.'}}';
      return;
    }
    echo '{"success":{"message":"please check your email for validation email"}}';
  } else {
    echo '{"error":{"text":"Email, Username and Password are required."}}';
  }
}

function getUsername($id) {
  $sql = "select u.username from users u where u.id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$user = $stmt->fetchObject();
		$db = null;
        // Include support for JSONP requests
        if (!isset($_GET['callback'])) {
            echo json_encode($user);
        } else {
            echo $_GET['callback'] . '(' . json_encode($user) . ');';
        }

	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

/**
 * Authorise function, used as Slim Route Middlewear
 */
function authorize($role = "user") {
  return function () use ( $role ) {
    $allowAll = false;
    if($allowAll || $role == 'no-need') return true;
    
    // Get the Slim framework object
    $app = \Slim\Slim::getInstance();
    $udt_e = $app->getEncryptedCookie('udt_e');
    $udt_r = $app->getEncryptedCookie('udt_r');
    // First, check to see if the user is logged in at all
    if(!empty($udt_e) && !empty($udt_r)) {
      // extend cookie lifetime
      $app->setEncryptedCookie('udt_e', $udt_e);
      $app->setEncryptedCookie('udt_r', $udt_r);
    
      // Next, validate the role to make sure they can access the route
      // We will assume admin role can access everything
      if($udt_r == $role || 
        $udt_r == 'admin') {
        //User is logged in and has the correct permissions... Nice!
        return true;
      }
      else {
        // If a user is logged in, but doesn't have permissions, return 403
        $app->halt(403, 'You shall not pass! Not enough privilege!');
      }
    }
    else {
      // If a user is not logged in at all, return a 401
      $app->halt(401, 'You shall not pass! Please login.');
    }
  };
}

/*
function getEmployees() {

    if (isset($_GET['name'])) {
        return getEmployeesByName($_GET['name']);
    } else if (isset($_GET['modifiedSince'])) {
        return getModifiedEmployees($_GET['modifiedSince']);
    }

    $sql = "select e.id, e.firstName, e.lastName, e.title, count(r.id) reportCount " .
    		"from employee e left join employee r on r.managerId = e.id " .
    		"group by e.id order by e.lastName, e.firstName";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$employees = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

        // Include support for JSONP requests
        if (!isset($_GET['callback'])) {
            echo json_encode($employees);
        } else {
            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
        }

	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function getEmployee($id) {
    $sql = "select e.id, e.firstName, e.lastName, e.title, e.officePhone, e.cellPhone, e.email, e.managerId, e.twitterId, m.firstName managerFirstName, m.lastName managerLastName, count(r.id) reportCount " .
			"from employee e " .
			"left join employee r on r.managerId = e.id " .
    		"left join employee m on e.managerId = m.id " .
    		"where e.id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$employee = $stmt->fetchObject();
		$db = null;

        // Include support for JSONP requests
        if (!isset($_GET['callback'])) {
            echo json_encode($employee);
        } else {
            echo $_GET['callback'] . '(' . json_encode($employee) . ');';
        }

	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function getReports($id) {

    $sql = "select e.id, e.firstName, e.lastName, e.title, count(r.id) reportCount " .
    		"from employee e left join employee r on r.managerId = e.id " .
			"where e.managerId=:id " .
    		"group by e.id order by e.lastName, e.firstName";

    try {
        $db = getConnection();
    	$stmt = $db->prepare($sql);
    	$stmt->bindParam("id", $id);
    	$stmt->execute();
    	$employees = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

        // Include support for JSONP requests
        if (!isset($_GET['callback'])) {
            echo json_encode($employees);
        } else {
            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
        }

	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function getEmployeesByName($name) {
    $sql = "select e.id, e.firstName, e.lastName, e.title, count(r.id) reportCount " .
    		"from employee e left join employee r on r.managerId = e.id " .
            "WHERE UPPER(CONCAT(e.firstName, ' ', e.lastName)) LIKE :name " .
    		"group by e.id order by e.lastName, e.firstName";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$name = "%".$name."%";
		$stmt->bindParam("name", $name);
		$stmt->execute();
		$employees = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

        // Include support for JSONP requests
        if (!isset($_GET['callback'])) {
            echo json_encode($employees);
        } else {
            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
        }

	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getModifiedEmployees($modifiedSince) {
    if ($modifiedSince == 'null') {
        $modifiedSince = "1000-01-01";
    }
    $sql = "select * from employee WHERE lastModified > :modifiedSince";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("modifiedSince", $modifiedSince);
		$stmt->execute();
		$employees = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

        // Include support for JSONP requests
        if (!isset($_GET['callback'])) {
            echo json_encode($employees);
        } else {
            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
        }

	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}*/

function getConnection() {
	$dbhost="127.0.0.1";
	$dbuser="root";
	$dbpass="";
	$dbname="newsbuddy";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=utf8", $dbuser, $dbpass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}

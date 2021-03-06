<?php

require 'Slim/Slim.php';
require 'Slim/Middleware.php';
require 'Slim/Middleware/SessionCookie.php';
\Slim\Slim::registerAutoloader();
include "NotORM.php";
$pdo = new PDO("mysql:host=localhost;dbname=newsbuddy;charset=utf8", "root", "", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
$db = new NotORM($pdo);

$app = new \Slim\Slim(array(
    'cookies.lifetime' => '1 days', //parsed with `strtotime` internally
    'cookies.secret_key' => '!@#$NEWSBUDDY_HUYNT$#@!'
));


$app->post('/login', 'login');
$app->post('/register', 'register');
$app->get('/retrieve_status', 'retrieveStatus');
$app->get('/username/:id', authorize('user'), 'getUsername');
$app->get('/section/:viewAll/:section(/:start(/:limit))', 'getSectionData');
$app->get('/newsDetails/:newsID', 'getNewsDetails');
$app->post('/search', 'getSearchResult');
$app->post('/hidenews/:newsID', authorize('user'), 'hideNews');
$app->post('/addtoqueue/:newsID', authorize('user'), 'addToQueue');
$app->post('/restorenews/:newsID', authorize('user'), 'restoreNews');
$app->post('/undoreadlater/:newsID', authorize('user'), 'undoReadLater');
$app->post('/removefromqueue/:newsID', authorize('user'), 'removeFromQueue');
$app->post('/marknewsasread/:newsID', authorize('user'), 'markNewsAsRead');
$app->run();

function markNewsAsRead($newsID) {
  $app = \Slim\Slim::getInstance();
  global $db;
  try {
    $email = $app->getEncryptedCookie('udt_e');
    $user = $db->users()->select('id')->where('email = ?', $email)->fetch();
    $news = $db->news_links()->select('id, link_md5, title, cat_id')->where('id = ?', $newsID)->fetch();
    $result = new stdClass();
    
    if ($user && $news) {
      $result->responseTo = "markNewsAsRead";
      
      $array = array(
        "user_id" => $user['id'],
        "news_id" => $news['id'],
        "news_md5" => $news['link_md5'],
        "cat_id" => $news['cat_id'],
        "interact" => 1,
        "time" => date('Y-m-d H:i:s'),
      );
      
      $newsInfo = array(
        "id" => $news['id'],
        "title" => $news['title'],
      );
      $result->newsInfo = $newsInfo;
      
      /*
      $result->data = $array;
      $insertResult = $db->news_userinteract()->insert($array);
      */
      $insertResult = $db->news_userinteract()->insert_update(
        array("user_id" => $user['id'],
              "news_id" => $news['id']),
        $array,
        array("interact" => 1)
      );
      
      $insertResult = ($insertResult) ? true : false;
      
      $result->result = $insertResult;
      if (!isset($_GET['callback'])) {
        echo json_encode($result);
      } else {
        echo $_GET['callback'] . '(' . json_encode($result) . ');';
      }
    } else {
      
    }
  } catch (Exception $e) {
    $result = new stdClass();
    $error = new stdClass();
    $error->text = $e->getMessage();
    $result->error = $error;
    echo json_encode($result);
    //echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function removeFromQueue($newsID) {
  $app = \Slim\Slim::getInstance();
  global $db;
  try {
    $email = $app->getEncryptedCookie('udt_e');
    $user = $db->users()->select('id')->where('email = ?', $email)->fetch();
    $news = $db->news_links()->select('id, link_md5')->where('id = ?', $newsID)->fetch();
    $result = new stdClass();
    
    if ($user && $news) {
      $result->responseTo = "removeFromQueue";
      $result->newsID = $news['id'];
      
      $row = $db->news_userinteract()
                ->select('*')
                ->where('user_id = ? AND news_id = ? AND interact = 2', $user['id'], $news['id'])
                ->fetch();
      $updateResult = true;
      if($row){
        try {        
          $db->news_userinteract()->where('user_id = ? AND news_md5 = ?', $user['id'], $news['link_md5'])->update(array('interact' => 1));
        } catch(PDOException $e) {
          //echo '{"error":{"text":'. $e->getMessage() .'}}';
          $updateResult = false;
        }
      }
      $updateResult = ($updateResult) ? true : false;
      $result->result = $updateResult;
      if (!isset($_GET['callback'])) {
        echo json_encode($result);
      } else {
        echo $_GET['callback'] . '(' . json_encode($result) . ');';
      }
    } else {
      
    }
  } catch (Exception $e) {
    $result = new stdClass();
    $error = new stdClass();
    $error->text = $e->getMessage();
    $result->error = $error;
    echo json_encode($result);
    //echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function undoReadLater($newsID){
  $app = \Slim\Slim::getInstance();
  global $db;
  try {
    $email = $app->getEncryptedCookie('udt_e');
    $user = $db->users()->select('id')->where('email = ?', $email)->fetch();
    $news = $db->news_links()->select('id, link_md5')->where('id = ?', $newsID)->fetch();
    $result = new stdClass();
    
    if ($user && $news) {
      $result->responseTo = "undoReadLater";
      $result->newsID = $news['id'];
      
      $row = $db->news_userinteract()
                ->select('*')
                ->where('user_id = ? AND news_id = ? AND interact = 2', $user['id'], $news['id'])
                ->fetch();
      $deleteResult = false;
      if($row){
        $deleteResult = $row->delete();
      }
      $deleteResult = ($deleteResult) ? true : false;
      $result->result = $deleteResult;
      if (!isset($_GET['callback'])) {
        echo json_encode($result);
      } else {
        echo $_GET['callback'] . '(' . json_encode($result) . ');';
      }
    } else {
      
    }
  } catch (Exception $e) {
    $result = new stdClass();
    $error = new stdClass();
    $error->text = $e->getMessage();
    $result->error = $error;
    echo json_encode($result);
    //echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function restoreNews($newsID) {
  $app = \Slim\Slim::getInstance();
  global $db;
  try {
    $email = $app->getEncryptedCookie('udt_e');
    $user = $db->users()->select('id')->where('email = ?', $email)->fetch();
    $news = $db->news_links()->select('id, link_md5')->where('id = ?', $newsID)->fetch();
    $result = new stdClass();
    
    if ($user && $news) {
      $result->responseTo = "restoreNews";
      $result->newsID = $news['id'];
      
      $row = $db->news_userinteract()
                ->select('*')
                ->where('user_id = ? AND news_id = ? AND interact = -1', $user['id'], $news['id'])
                ->fetch();
      $deleteResult = false;
      if($row){
        $deleteResult = $row->delete();
      }
      $deleteResult = ($deleteResult) ? true : false;
      $result->result = $deleteResult;
      if (!isset($_GET['callback'])) {
        echo json_encode($result);
      } else {
        echo $_GET['callback'] . '(' . json_encode($result) . ');';
      }
    } else {
      
    }
  } catch (Exception $e) {
    $result = new stdClass();
    $error = new stdClass();
    $error->text = $e->getMessage();
    $result->error = $error;
    echo json_encode($result);
    //echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function addToQueue($newsID){
  $app = \Slim\Slim::getInstance();
  global $db;
  try {
    $email = $app->getEncryptedCookie('udt_e');
    $user = $db->users()->select('id, username')->where('email = ?', $email)->fetch();
    $news = $db->news_links()->select('id, link_md5, title')->where('id = ?', $newsID)->fetch();
    $result = new stdClass();
    if ($user && $news) {
      $array = array(
        "user_id" => $user['id'],
        "news_id" => $news['id'],
        "news_md5" => $news['link_md5'],
        "interact" => 2,
        "time" => date('Y-m-d H:i:s'),
      );
      
      $newsInfo = array(
        "id" => $news['id'],
        "title" => $news['title'],
      );
      $result->newsInfo = $newsInfo;
      
      /*
      $result->data = $array;
      $insertResult = $db->news_userinteract()->insert($array);
      */
      $insertResult = $db->news_userinteract()->insert_update(
        array("user_id" => $user['id'],
              "news_id" => $news['id']),
        $array,
        array("interact" => 2)
      );
      
      $insertResult = ($insertResult) ? true : false;
      $result->result = $insertResult;
      if (!isset($_GET['callback'])) {
        echo json_encode($result);
      } else {
        echo $_GET['callback'] . '(' . json_encode($result) . ');';
      }
    } else {
      
    }
  } catch (Exception $e) {
    $result = new stdClass();
    $error = new stdClass();
    $error->text = $e->getMessage();
    $result->error = $error;
    echo json_encode($result);
    //echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function hideNews($newsID) {
  $app = \Slim\Slim::getInstance();
  global $db;
  try {
    $email = $app->getEncryptedCookie('udt_e');
    $user = $db->users()->select('id, username')->where('email = ?', $email)->fetch();
    $news = $db->news_links()->select('id, link_md5, title')->where('id = ?', $newsID)->fetch();
    $result = new stdClass();
    if ($user && $news) {
      $array = array(
        "user_id" => $user['id'],
        "news_id" => $news['id'],
        "news_md5" => $news['link_md5'],
        "interact" => -1,
        "time" => date('Y-m-d H:i:s'),
      );
      
      $newsInfo = array(
        "id" => $news['id'],
        "title" => $news['title'],
      );
      $result->newsInfo = $newsInfo;
      
      /*
      $result->data = $array;
      $insertResult = $db->news_userinteract()->insert($array);
      */
      $insertResult = $db->news_userinteract()->insert_update(
        array("user_id" => $user['id'],
              "news_id" => $news['id']),
        $array,
        array("interact" => -1)
      );
      
      $insertResult = ($insertResult) ? true : false;
      $result->result = $insertResult;
      if (!isset($_GET['callback'])) {
        echo json_encode($result);
      } else {
        echo $_GET['callback'] . '(' . json_encode($result) . ');';
      }
    } else {
      
    }
  } catch (Exception $e) {
    $result = new stdClass();
    $error = new stdClass();
    $error->text = $e->getMessage();
    $result->error = $error;
    echo json_encode($result);
    //echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function getNewsDetails($newsID) {
  $app = \Slim\Slim::getInstance();
  global $db;

  $email = $app->getEncryptedCookie('udt_e');
  $user = $db->users()->select('id, username')->where('email = ?', $email)->fetch();

  $data = (object) null;
  //$sql = "SELECT n.link FROM news_links n WHERE n.id = ".$newsID;
  
  $news = null;
  if($user){
    $news = $db->news_links()
              ->join('news_userinteract', 'left join news_userinteract on news_links.link_md5 = news_userinteract.news_md5')
              ->join('users', 'left join users on news_userinteract.user_id = users.id')
              ->select('news_links.link, news_links.title, news_links.link_md5, news_links.viewCount count, news_userinteract.interact user_interact')
              ->where('news_links.id = ?', $newsID)->fetch();
  }else {
    $news = $db->news_links()
              ->select('news_links.link, news_links.title, news_links.link_md5, news_links.viewCount count')
              ->where('news_links.id = ?', $newsID)->fetch();
  }
  
  if($news){
    // update viewCount
    try {        
      $db->news_links()->where('link_md5 = ?', $news['link_md5'])->update(array('viewCount' => $news['count']+1));
    } catch(PDOException $e) {
      //echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
  
    $newsLink = trim($news['link']);
    $newsTitle = trim($news['title']);
    $data->link = $newsLink;
    $data->title = $newsTitle;
    
    if($user){
      $data->user_interact = $news['user_interact'];
    }
  }
  echo json_encode($data);
}

function getSectionData($viewAll, $section, $start = 0, $limit = 90) {
  $data = (object) null;
  global $db;
  
  $app = \Slim\Slim::getInstance();
  $email = $app->getEncryptedCookie('udt_e'); // $udt_e
  $udt_r = $app->getEncryptedCookie('udt_r');
  
  $user = $db->users()->select('id')->where('email = ?', $email)->fetch();
  
  /* Articles */
  $news_links = array();
  if(!empty($email) && !empty($udt_r)) { // logged in user
    if ($section == 'home' && $viewAll == "false") {
      $news_links = $db->news_links()
                  ->join('recommended_news', 'join recommended_news on news_links.link_md5 = recommended_news.news_md5')
                  ->join('news_categories', 'left join news_categories on news_links.cat_id = news_categories.id')
                  ->join('news_sources', 'left join news_sources on news_links.source_id = news_sources.id')    
                  ->join('news_userinteract', 'left join news_userinteract on news_links.link_md5 = news_userinteract.news_md5')    
                  ->join('users', 'left join users on news_userinteract.user_id = users.id')    
                  ->select('news_links.id, news_links.pubDate, news_links.title, news_links.description, news_links.link, 
                    news_links.image_fullsize image, news_categories.section section, news_categories.name_abbr cat_abbr, 
                    news_categories.name_short cat_name, news_sources.`name` source, news_sources.alias source_alias, news_userinteract.interact user_interact')
                  ->where('(news_userinteract.interact is NULL
                      OR (news_userinteract.interact is NOT NULL AND news_userinteract.interact != -1)
                      OR (news_userinteract.interact = -1 AND news_userinteract.user_id != ?)) 
                    AND (recommended_news.user_id = ?)
                    AND (news_links.pubDate BETWEEN date_sub(now(),interval 30 day) and now())',
                    $user['id'], $user['id'])
                  ->order('news_links.pubDate desc')
                  ->limit($limit, $start);
    }else if($section != 'home' && $viewAll == "false"){
      $news_links = $db->news_links()
                  ->join('recommended_news', 'join recommended_news on news_links.link_md5 = recommended_news.news_md5')
                  ->join('news_categories', 'left join news_categories on news_links.cat_id = news_categories.id')
                  ->join('news_sources', 'left join news_sources on news_links.source_id = news_sources.id')    
                  ->join('news_userinteract', 'left join news_userinteract on news_links.link_md5 = news_userinteract.news_md5')    
                  ->join('users', 'left join users on news_userinteract.user_id = users.id')    
                  ->select('news_links.id, news_links.pubDate, news_links.title, news_links.description, news_links.link, 
                    news_links.image_fullsize image, news_categories.section section, news_categories.name_abbr cat_abbr, 
                    news_categories.name_short cat_name, news_sources.`name` source, news_sources.alias source_alias, news_userinteract.interact user_interact')
                  ->where('(news_categories.parent_abbr = ? OR news_categories.name_abbr = ?) 
                      AND (news_userinteract.interact is NULL
                        OR (news_userinteract.interact is NOT NULL AND news_userinteract.interact != -1)
                        OR (news_userinteract.interact = -1 AND news_userinteract.user_id != ?)
                      )
                      AND (recommended_news.user_id = ?) 
                      AND (news_links.pubDate BETWEEN date_sub(now(),interval 30 day) and now())', 
                    $section, $section, $user['id'], $user['id'])
                  ->order('news_links.pubDate desc')->limit($limit, $start);
    }else if($section == 'home' && $viewAll == "true") {
      $news_links = $db->news_links()
                  ->join('recommended_news', 'join recommended_news on news_links.link_md5 = recommended_news.news_md5')
                  ->join('news_categories', 'left join news_categories on news_links.cat_id = news_categories.id')
                  ->join('news_sources', 'left join news_sources on news_links.source_id = news_sources.id')    
                  ->join('news_userinteract', 'left join news_userinteract on news_links.link_md5 = news_userinteract.news_md5')    
                  ->join('users', 'left join users on news_userinteract.user_id = users.id')    
                  ->select('news_links.id, news_links.pubDate, news_links.title, news_links.description, news_links.link, 
                    news_links.image_fullsize image, news_categories.section section, news_categories.name_abbr cat_abbr, 
                    news_categories.name_short cat_name, news_sources.`name` source, news_sources.alias source_alias, news_userinteract.interact user_interact')
                  ->where('(news_userinteract.interact is NULL
                      OR (news_userinteract.interact is NOT NULL AND news_userinteract.interact != -1)
                      OR (news_userinteract.interact = -1 AND news_userinteract.user_id != ?)) 
                    AND (news_links.pubDate BETWEEN date_sub(now(),interval 30 day) and now())',
                    $user['id'])
                  ->order('news_links.pubDate desc')
                  ->limit($limit, $start);
    }else if($section != 'home' && $viewAll == "true"){
      $news_links = $db->news_links()
                  ->join('recommended_news', 'join recommended_news on news_links.link_md5 = recommended_news.news_md5')
                  ->join('news_categories', 'left join news_categories on news_links.cat_id = news_categories.id')
                  ->join('news_sources', 'left join news_sources on news_links.source_id = news_sources.id')    
                  ->join('news_userinteract', 'left join news_userinteract on news_links.link_md5 = news_userinteract.news_md5')    
                  ->join('users', 'left join users on news_userinteract.user_id = users.id')    
                  ->select('news_links.id, news_links.pubDate, news_links.title, news_links.description, news_links.link, 
                    news_links.image_fullsize image, news_categories.section section, news_categories.name_abbr cat_abbr, 
                    news_categories.name_short cat_name, news_sources.`name` source, news_sources.alias source_alias, news_userinteract.interact user_interact')
                  ->where('(news_categories.parent_abbr = ? OR news_categories.name_abbr = ?) 
                      AND (news_userinteract.interact is NULL
                        OR (news_userinteract.interact is NOT NULL AND news_userinteract.interact != -1)
                        OR (news_userinteract.interact = -1 AND news_userinteract.user_id != ?)
                      ) 
                      AND (news_links.pubDate BETWEEN date_sub(now(),interval 30 day) and now())', 
                    $section, $section, $user['id'])
                  ->order('news_links.pubDate desc')->limit($limit, $start);
    }else{
    
    }
  }else { // not logged in
    if ($section == 'home') {
      $news_links = $db->news_links()
                  ->join('news_categories', 'left join news_categories on news_links.cat_id = news_categories.id')
                  ->join('news_sources', 'left join news_sources on news_links.source_id = news_sources.id')    
                  ->select('news_links.id, news_links.pubDate, news_links.title, news_links.description, news_links.link, 
                    news_links.image_fullsize image, news_categories.section section, news_categories.name_abbr cat_abbr, 
                    news_categories.name_short cat_name, news_sources.`name` source, news_sources.alias source_alias')
                  ->order('news_links.pubDate desc')->limit($limit, $start);
    }else{
      $news_links = $db->news_links()
                  ->join('news_categories', 'left join news_categories on news_links.cat_id = news_categories.id')
                  ->join('news_sources', 'left join news_sources on news_links.source_id = news_sources.id')    
                  ->select('news_links.id, news_links.pubDate, news_links.title, news_links.description, news_links.link, 
                    news_links.image_fullsize image, news_categories.section section, news_categories.name_abbr cat_abbr, 
                    news_categories.name_short cat_name, news_sources.`name` source, news_sources.alias source_alias')
                  ->where('news_categories.parent_abbr = ? OR news_categories.name_abbr = ?', $section, $section)
                  ->order('news_links.pubDate desc')->limit($limit, $start);
    }
  }
  $news = array();
  foreach ($news_links as $news_link) {
      $row = array();        
      $row = iterator_to_array($news_link, true);
      $news[] = $row;
  }  
  $data->news = $news;
  
  // eg: section == 'lifestyle' => bigSection = 'lifestyle'
  // eg: section == 'culture' => bigSection = 'lifestyle'
  $parent_abbr_of_section = $db->news_categories()->select('parent_abbr')->where('name_abbr = ?', $section)->fetch();
  $parent_abbr_of_section = $parent_abbr_of_section['parent_abbr'];
  $bigSection = ($parent_abbr_of_section == '') ? $section : $parent_abbr_of_section;
  
  $category_row = $db->news_categories()->select('id, name_short name')->where('name_abbr = ?', $bigSection)->fetch();
  $requestedSectionName = $db->news_categories()->select('name')->where('name_abbr = ?', $section)->fetch();
  $category = array(
    // id and name of big Section. e.g: lifestyle, sports
    'id' => $category_row['id'],
    'name' => $category_row['name'],
    
    // name of requested section. e.g: lifestyle, and its subSection: culture, entertainment
    'name_requestedSection' => $requestedSectionName['name'],
  );
  if($section == 'home'){
    $homepageName = 'Trang chủ';
    $category = array(
      'id' => $category_row['id'],
      'name' => $homepageName,
      'name_requestedSection' => $homepageName,
    );
  }
  $data->category = $category;
  
  /* catParent */
  $catParentRaw = $db->news_categories()->select("id, name_abbr, name, name_short, parent_abbr")->where('active_in_category = 1');
  $catParent = array();
  $subCats = array();
  foreach ($catParentRaw as $cat){
    $content = (object) null;
    $content->id = $cat['id'];
    $content->name_abbr = $cat['name_abbr'];
    $content->name = $cat['name'];
    $content->name_short = $cat['name_short'];
    $content->parent_abbr = $cat['parent_abbr'];
    $catParent[$cat['name_abbr']] = $content;
    if ($content->parent_abbr == $bigSection) {
      $subCats[] = $content;
    }
  }
  $data->catParent = $catParent;
  $data->subCats = $subCats;
  echo json_encode($data);
}

function retrieveStatus() {
  $app = \Slim\Slim::getInstance();
  global $db;
  $db_connect = dbConnect();
  $udt_e = $app->getEncryptedCookie('udt_e');
  $udt_r = $app->getEncryptedCookie('udt_r');
  
  // retrieve this user's info from db
  $result = array('notloggedin' => new stdClass());
  if (!empty($udt_e) && !empty($udt_r)) {
    $udt_e = trim(mysql_real_escape_string($udt_e, $db_connect));
    
    /* Query */
    $user = $db->users()->select('username, email, role')->where("email = ?", $udt_e)->fetch();
    if ($user){
      $returnedUser = trim($user['username']);
      $returnedUser = ($returnedUser !== "") ? $returnedUser : $user['email'];
      $loggedin = new stdClass();
      $loggedin->displayName = $returnedUser;
      $result = array('loggedin' => $loggedin);
      //echo json_encode($result);
    } 
  } 
  echo json_encode($result);
}

function login() {
  $app = \Slim\Slim::getInstance();
  global $db;
  $email = $app->request()->params('email');
  $password = $app->request()->params('password');
  $result = array();
  if (!empty($email) && !empty($password)) {
    // normally you would load credentials from a database. 
    // This is just an example and is certainly not secure
    $db_connect = dbConnect();
    $email = mysql_real_escape_string($email, $db_connect);
    $password = mysql_real_escape_string($password, $db_connect);
    $pass_md5 = md5($password);
    
    /* Query */
    try {
      $user = $db->users()->select('username, email, role')->where('(username = ? or email = ?) and lower(password_md5) = ?', $email, $email, $pass_md5)->fetch();
    } catch(Exception $e) {
      $error = new stdClass();
      $error->text = $e.getMessage();
      $result['error'] = $error;
      echo json_encode($result);
      //echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
    
    if ($user){
      $returnedUser = trim($user['username']);
      $returnedUser = ($returnedUser !== "") ? $returnedUser : $user['email'];
      $app->setEncryptedCookie('udt_e', $user['email']);
      $app->setEncryptedCookie('udt_r', $user['role']);
      
      try {        
        $nowFormat = date('Y-m-d H:i:s');
        $db->users()->where('email = ?', $user['email'])->update(array('last_login_time' => $nowFormat));
      } catch(PDOException $e) {
        //echo '{"error":{"text":'. $e->getMessage() .'}}';
      }
      
      // update login time     
      $success = new stdClass();
      $success->username = $returnedUser;
      $result['success'] = $success;
      //echo '{"success":{"username":"'.$returnedUser.'"}}';
    } else {
      $error = new stdClass();
      $error->text = 'You shall not pass...';
      $result['error'] = $error;
      //echo '{"error":{"text":"You shall not pass..."}}';
    }
  } else {
    $error = new stdClass();
    $error->text = 'Username and Password are required.';
    $result['error'] = $error;
    //echo '{"error":{"text":"Username and Password are required."}}';
  }
  echo json_encode($result);
}

function register() {
  $app = \Slim\Slim::getInstance();
  $db_connect = dbConnect();
  if(!empty($_POST['email']) && !empty($_POST['username']) && !empty($_POST['password'])) {
    $email = mysql_real_escape_string($_POST['email'], $db_connect);
    $username = mysql_real_escape_string($_POST['username'], $db_connect);
    $pass = mysql_real_escape_string($_POST['password'], $db_connect);
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
  global $db;
  try {
    $user = $db->users()->select('username')->where('id = ?', $id)->fetch();
    $result = new stdClass();
    if ($user) {
      $result->username = $user['username'];
      if (!isset($_GET['callback'])) {
        echo json_encode($result);
      } else {
        echo $_GET['callback'] . '(' . json_encode($result) . ');';
      }
    } else {
      
    }
  } catch (Exception $e) {
    $result = new stdClass();
    $error = new stdClass();
    $error->text = $e->getMessage();
    $result->error = $error;
    echo json_encode($result);
    //echo '{"error":{"text":'. $e->getMessage() .'}}';
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

function getSearchResult() {
  $app = \Slim\Slim::getInstance();
  global $db;
  $data = (object) null;
  $keyword = trim($app->request()->params('keyword'));  
  $latest_news_id = $app->request()->params('latest_news_id');
  $current_search_page = $app->request()->params('current_search_page');
  $start = $app->request()->params('start');
  $limit = $app->request()->params('limit');
  preg_replace('/\s+/', ' ', $keyword);
  $db_connect = getConnection();
//  //$keyword = mysql_real_escape_string($keyword, $db_connect);

  $sub_keywords = explode(" ", $keyword);
  $like_clause = "";
  $notlike_clause = "";
  foreach ($sub_keywords as $sub_keyword) {
    if (strlen($sub_keyword) < 4) {
      $like_clause .= "(title LIKE '%$sub_keyword%' OR description LIKE '%$sub_keyword%') OR ";
      $notlike_clause .= "(title NOT LIKE '%$sub_keyword%' AND description NOT LIKE '%$sub_keyword%') AND ";
    }
  }
  $news_id_clause = "";
  if ($latest_news_id > 0) {
    $news_id_clause = " WHERE id < $latest_news_id ";
  } else {
    $latest_sql = "SELECT MAX(id) AS latest_id FROM news_links";
    try {
      $stmt = $db_connect->prepare($latest_sql);
      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_OBJ);
    } catch(PDOException $e) {} 
    $lastest_news_id = $row->latest_id;
  }
  $data->latest_news_id = $lastest_news_id;
  if ($like_clause != "") {
    $like_clause = substr($like_clause, 0, strlen($like_clause) - 4);
    $notlike_clause = substr($notlike_clause, 0, strlen($notlike_clause) - 5);
    $sql = "SELECT n.id, n.title, n.description, n.link, 
                n.image, n.pubDate, news_categories.section section, news_categories.name_abbr cat_abbr, 
                news_categories.name_short cat_name, news_sources.`name` source, news_sources.alias source_alias 
          FROM (
            SELECT * 
            FROM (
              (SELECT *
              FROM (SELECT * FROM news_links ORDER BY pubDate desc) n1 
              WHERE title LIKE '%$keyword%')
              UNION
              (SELECT *
              FROM (SELECT * FROM news_links ORDER BY pubDate desc) n2 
              WHERE description LIKE '%$keyword%' AND title NOT LIKE '%$keyword%')
              UNION
              (SELECT *
              FROM (SELECT * FROM news_links ORDER BY pubDate desc) n4
              WHERE title NOT LIKE '%$keyword%' AND description NOT LIKE '%$keyword%' AND ($like_clause))
              UNION
              (SELECT *
              FROM news_links n3 
              WHERE MATCH(title, description) AGAINST('$keyword') AND title NOT LIKE '%$keyword%' AND description NOT LIKE '%$keyword%' AND $notlike_clause 
              ORDER BY n3.pubDate desc)
            ) tmp $news_id_clause
            LIMIT $start, $limit) n left join news_categories on n.cat_id = news_categories.id
                            left join news_sources on n.source_id = news_sources.id"; 
    $total_sql = "SELECT COUNT(*) as total 
            FROM (
              (SELECT *
              FROM (SELECT * FROM news_links ORDER BY pubDate desc) n1 
              WHERE title LIKE '%$keyword%')
              UNION
              (SELECT *
              FROM (SELECT * FROM news_links ORDER BY pubDate desc) n2 
              WHERE description LIKE '%$keyword%' AND title NOT LIKE '%$keyword%')
              UNION
              (SELECT *
              FROM (SELECT * FROM news_links ORDER BY pubDate desc) n4
              WHERE title NOT LIKE '%$keyword%' AND description NOT LIKE '%$keyword%' AND ($like_clause))
              UNION
              (SELECT *
              FROM news_links n3 
              WHERE MATCH(title, description) AGAINST('$keyword') AND title NOT LIKE '%$keyword%' AND description NOT LIKE '%$keyword%' AND $notlike_clause 
              ORDER BY n3.pubDate desc)
            ) tmp";
  } else {
    $sql = "SELECT n.id, n.title, n.description, n.link, 
                n.image, n.pubDate, news_categories.section section, news_categories.name_abbr cat_abbr, 
                news_categories.name_short cat_name, news_sources.`name` source, news_sources.alias source_alias 
          FROM (
            SELECT * 
            FROM (
              (SELECT *
              FROM (SELECT * FROM news_links ORDER BY pubDate desc) n1 
              WHERE title LIKE '%$keyword%')
              UNION
              (SELECT *
              FROM (SELECT * FROM news_links ORDER BY pubDate desc) n2 
              WHERE description LIKE '%$keyword%' AND title NOT LIKE '%$keyword%')
              UNION
              (SELECT *
              FROM news_links n3 
              WHERE MATCH(title, description) AGAINST('$keyword') AND title NOT LIKE '%$keyword%' AND description NOT LIKE '%$keyword%' 
              ORDER BY n3.pubDate desc)
            ) tmp $news_id_clause
            LIMIT $start, $limit) n left join news_categories on n.cat_id = news_categories.id
                            left join news_sources on n.source_id = news_sources.id"; 
    $total_sql = "SELECT COUNT(*) AS total 
            FROM (
              (SELECT *
              FROM (SELECT * FROM news_links ORDER BY pubDate desc) n1 
              WHERE title LIKE '%$keyword%')
              UNION
              (SELECT *
              FROM (SELECT * FROM news_links ORDER BY pubDate desc) n2 
              WHERE description LIKE '%$keyword%' AND title NOT LIKE '%$keyword%')
              UNION
              (SELECT *
              FROM news_links n3 
              WHERE MATCH(title, description) AGAINST('$keyword') AND title NOT LIKE '%$keyword%' AND description NOT LIKE '%$keyword%' 
              ORDER BY n3.pubDate desc)
            ) tmp";
  }
   
  try {
    $stmt = $db_connect->prepare($sql);
    $stmt->execute();
    $news = $stmt->fetchAll(PDO::FETCH_OBJ);
    $stmt = $db_connect->prepare($total_sql);
    $stmt->execute();
    $total_row = $stmt->fetch(PDO::FETCH_OBJ);
    $db_connect = null;
  } catch(PDOException $e) {} 
  foreach ($news as $n) {
    $n->pubDate = date('d/m/Y', strtotime($n->pubDate));
  }
  $data->news = $news;
  $data->total = $total_row->total;  
  if ($news) {
    $current_search_page++;
  }
  $data->current_search_page = $current_search_page;
  $catParentRaw = $db->news_categories()->select("id, name_abbr, name, name_short, parent_abbr");
  $catParent = array();
  foreach ($catParentRaw as $cat){
    $content = (object) null;
    $content->id = $cat['id'];
    $content->name_abbr = $cat['name_abbr'];
    $content->name = $cat['name'];
    $content->name_short = $cat['name_short'];
    $content->parent_abbr = $cat['parent_abbr'];
    $catParent[$cat['name_abbr']] = $content;
  }
  $data->catParent = $catParent;
  echo json_encode($data);
}

function getConnection() {
	$dbhost="127.0.0.1";
	$dbuser="root";
	$dbpass="";
	$dbname="newsbuddy";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=utf8", $dbuser, $dbpass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}

function dbConnect() {
  $db_connect = mysql_connect('localhost', 'root', '');
  return $db_connect;
}



// <!-- old code --> 
//require 'Slim/Slim.php';
//require 'Slim/Middleware.php';
//require 'Slim/Middleware/SessionCookie.php';
//\Slim\Slim::registerAutoloader();
//
//$app = new \Slim\Slim(array(
//    'cookies.lifetime' => '1 days', //parsed with `strtotime` internally
//    'cookies.secret_key' => '!@#$NEWSBUDDY_HUYNT$#@!'
//));
//
//$app->get('/test-rest', function () use ($app) {
//  echo "{sectionData:'aaaaa'}";
//});
//
////$app->get('/employees', 'getEmployees');
////$app->get('/employees/:id',	'getEmployee');
////$app->get('/employees/:id/reports',	'getReports');
////$app->get('/employees/search/:query', 'getEmployeesByName');
////$app->get('/employees/modifiedsince/:timestamp', 'findByModifiedDate');
//$app->post('/login', 'login');
//$app->post('/register', 'register');
//$app->get('/retrieve_status', 'retrieveStatus');
//$app->get('/username/:id', authorize('user'), 'getUsername');
//$app->get('/section/:section', 'getSectionData');
//$app->run();
//
//function getSectionData($section) {
//  $data = (object) null;
//  
//  /* Articles */
//  $sql = "SELECT  n.title, n.description, n.link, 
//                  n.image_fullsize image, c.name_abbr cat_abbr, 
//                  c.name_short cat_name, s.`name` source, s.alias source_alias
//          FROM news_links n 
//          LEFT JOIN news_categories c ON n.cat_id = c.id 
//          LEFT JOIN news_sources s ON n.source_id = s.id 
//          ORDER BY n.pubDate DESC
//          LIMIT 18";
//  $news = null;
//  try {
//    $db = getConnection();
//    $stmt = $db->prepare($sql);
//    $stmt->execute();
//    $news = $stmt->fetchAll(PDO::FETCH_OBJ);
//    $db = null;
//  } catch(PDOException $e) {}
//  $data->news = $news;
//  
//  /* catParent */
//  $sql = "SELECT c.name_abbr, c.name, c.name_short, c.name_abbr parent_abbr 
//          FROM news_categories c 
//          WHERE c.parent_id = 0 
//          UNION DISTINCT 
//          SELECT c.name_abbr, c.name, c.name_short, d.name_abbr parent_abbr 
//          FROM news_categories c LEFT JOIN news_categories d ON c.parent_id = d.id 
//          WHERE c.parent_id <> 0";
//  $catParentRaw = null;
//  try {
//    $db = getConnection();
//    $stmt = $db->prepare($sql);
//    $stmt->execute();
//    $catParentRaw = $stmt->fetchAll(PDO::FETCH_OBJ);
//    $db = null;
//  } catch(PDOException $e) {}
//  $catParent = array();
//  foreach($catParentRaw as $object){
//    $content = (object) null;
//    $content->name = $object->name;
//    $content->name_short = $object->name_short;
//    $content->parent_abbr = $object->parent_abbr;
//    $catParent[$object->name_abbr] = $content;
//  }
//  $data->catParent = $catParent;
//  
//  echo json_encode($data);
//}
//
//function retrieveStatus() {
//  $app = \Slim\Slim::getInstance();
//  
//  $udt_e = $app->getEncryptedCookie('udt_e');
//  $udt_r = $app->getEncryptedCookie('udt_r');
//  
//  // retrieve this user's info from db
//  if(!empty($udt_e) && !empty($udt_r)) {
//    $udt_e = trim(mysql_real_escape_string($udt_e));
//  
//    /* Query */
//    $sql = "SELECT u.username, u.email, u.role FROM users u WHERE u.email='".$udt_e."' LIMIT 1";
//    $user = null;
//    try {
//      $db = getConnection();
//      $stmt = $db->prepare($sql);
//      $stmt->execute();
//      $user = $stmt->fetchObject();
//      $db = null;
//    } catch(PDOException $e) {}
//    if($user){
//      $returnedUser = trim($user->username);
//      $returnedUser = ($returnedUser !== "") ? $returnedUser : $user->email;
//      echo '{"loggedin":{"displayName":"'.$returnedUser.'"}}';
//      //$app->setEncryptedCookie('udt_e', $user->email);
//      //$app->setEncryptedCookie('udt_r', $user->role);
//    }else {
//      echo '{"notloggedin":{}}';
//    }
//  }else {
//    echo '{"notloggedin":{}}';
//  }
//}
//
//function login() {
//  $app = \Slim\Slim::getInstance();
//  if(!empty($_POST['email']) && !empty($_POST['password'])) {
//    // normally you would load credentials from a database. 
//    // This is just an example and is certainly not secure
//    $email = mysql_real_escape_string($_POST['email']);
//    $pass = mysql_real_escape_string($_POST['password']);
//    $pass_md5 = md5($pass);
//    
//    /* Query */
//    $sql = "SELECT u.username, u.email, u.role FROM users u WHERE (u.username='".$email."' OR u.email='".$email."') AND LOWER(u.password_md5)='".$pass_md5."' LIMIT 1";
//    $user = null;
//    try {
//      $db = getConnection();
//      $stmt = $db->prepare($sql);
//      $stmt->execute();
//      $user = $stmt->fetchObject();
//      $db = null;
//    } catch(PDOException $e) {
//      echo '{"error":{"text":'. $e->getMessage() .'}}';
//    }
//    if($user){
//      $returnedUser = trim($user->username);
//      $returnedUser = ($returnedUser !== "") ? $returnedUser : $user->email;
//      $app->setEncryptedCookie('udt_e', $user->email);
//      $app->setEncryptedCookie('udt_r', $user->role);
//      
//      // update login time
//      $sql = "UPDATE users SET last_login_time=:time WHERE email=:email";
//      try {
//        $db = getConnection();
//        $stmt = $db->prepare($sql);
//        $nowFormat = date('Y-m-d H:i:s');
//        $stmt->bindParam("time", $nowFormat);
//        $stmt->bindParam("email", $user->email);
//        $stmt->execute();
//        $db = null;
//      } catch(PDOException $e) {
//        //echo '{"error":{"text":'. $e->getMessage() .'}}';
//      }
//      
//      echo '{"success":{"username":"'.$returnedUser.'"}}';
//    }else {
//      echo '{"error":{"text":"You shall not pass..."}}';
//    }
//  }
//  else {
//    echo '{"error":{"text":"Username and Password are required."}}';
//  }
//}
//
//function register() {
//  $app = \Slim\Slim::getInstance();
//  if(!empty($_POST['email']) && !empty($_POST['username']) && !empty($_POST['password'])) {
//    $email = mysql_real_escape_string($_POST['email']);
//    $username = mysql_real_escape_string($_POST['username']);
//    $pass = mysql_real_escape_string($_POST['password']);
//    $pass_md5 = md5($pass);
//    
//    /* Query */
//    $sql = "INSERT INTO users(email, username, password_md5, register_since) VALUES(:email, :username, :md5, :time)";
//    try {
//      $db = getConnection();
//      $stmt = $db->prepare($sql);
//      $nowFormat = date('Y-m-d H:i:s');
//      $stmt->bindParam("email", $email);
//      $stmt->bindParam("username", $username);
//      $stmt->bindParam("md5", $pass_md5);
//      $stmt->bindParam("time", $nowFormat);
//      $stmt->execute();
//      $db = null;
//    } catch(PDOException $e) {
//      $message = $e->getMessage();
//      $duplicateType = 0;
//      if(strpos($message, "Duplicate") && strpos($message, "@")){
//        // duplicate email
//        $duplicateType = 1;
//      }else if(stripos($message, "Duplicate") && stripos($message, "unique_username")){
//        $duplicateType = 2;
//      }else{
//      }
//      echo '{"error":{"duplicateType":'.$duplicateType.'}}';
//      return;
//    }
//    echo '{"success":{"message":"please check your email for validation email"}}';
//  } else {
//    echo '{"error":{"text":"Email, Username and Password are required."}}';
//  }
//}
//
//function getUsername($id) {
//  $sql = "select u.username from users u where u.id=:id";
//	try {
//		$db = getConnection();
//		$stmt = $db->prepare($sql);
//		$stmt->bindParam("id", $id);
//		$stmt->execute();
//		$user = $stmt->fetchObject();
//		$db = null;
//        // Include support for JSONP requests
//        if (!isset($_GET['callback'])) {
//            echo json_encode($user);
//        } else {
//            echo $_GET['callback'] . '(' . json_encode($user) . ');';
//        }
//
//	} catch(PDOException $e) {
//		echo '{"error":{"text":'. $e->getMessage() .'}}';
//	}
//}
//
///**
// * Authorise function, used as Slim Route Middlewear
// */
//function authorize($role = "user") {
//  return function () use ( $role ) {
//    $allowAll = false;
//    if($allowAll || $role == 'no-need') return true;
//    
//    // Get the Slim framework object
//    $app = \Slim\Slim::getInstance();
//    $udt_e = $app->getEncryptedCookie('udt_e');
//    $udt_r = $app->getEncryptedCookie('udt_r');
//    // First, check to see if the user is logged in at all
//    if(!empty($udt_e) && !empty($udt_r)) {
//      // extend cookie lifetime
//      $app->setEncryptedCookie('udt_e', $udt_e);
//      $app->setEncryptedCookie('udt_r', $udt_r);
//    
//      // Next, validate the role to make sure they can access the route
//      // We will assume admin role can access everything
//      if($udt_r == $role || 
//        $udt_r == 'admin') {
//        //User is logged in and has the correct permissions... Nice!
//        return true;
//      }
//      else {
//        // If a user is logged in, but doesn't have permissions, return 403
//        $app->halt(403, 'You shall not pass! Not enough privilege!');
//      }
//    }
//    else {
//      // If a user is not logged in at all, return a 401
//      $app->halt(401, 'You shall not pass! Please login.');
//    }
//  };
//}
//
///*
//function getEmployees() {
//
//    if (isset($_GET['name'])) {
//        return getEmployeesByName($_GET['name']);
//    } else if (isset($_GET['modifiedSince'])) {
//        return getModifiedEmployees($_GET['modifiedSince']);
//    }
//
//    $sql = "select e.id, e.firstName, e.lastName, e.title, count(r.id) reportCount " .
//    		"from employee e left join employee r on r.managerId = e.id " .
//    		"group by e.id order by e.lastName, e.firstName";
//	try {
//		$db = getConnection();
//		$stmt = $db->query($sql);
//		$employees = $stmt->fetchAll(PDO::FETCH_OBJ);
//		$db = null;
//
//        // Include support for JSONP requests
//        if (!isset($_GET['callback'])) {
//            echo json_encode($employees);
//        } else {
//            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
//        }
//
//	} catch(PDOException $e) {
//		echo '{"error":{"text":'. $e->getMessage() .'}}';
//	}
//}
//
//function getEmployee($id) {
//    $sql = "select e.id, e.firstName, e.lastName, e.title, e.officePhone, e.cellPhone, e.email, e.managerId, e.twitterId, m.firstName managerFirstName, m.lastName managerLastName, count(r.id) reportCount " .
//			"from employee e " .
//			"left join employee r on r.managerId = e.id " .
//    		"left join employee m on e.managerId = m.id " .
//    		"where e.id=:id";
//	try {
//		$db = getConnection();
//		$stmt = $db->prepare($sql);
//		$stmt->bindParam("id", $id);
//		$stmt->execute();
//		$employee = $stmt->fetchObject();
//		$db = null;
//
//        // Include support for JSONP requests
//        if (!isset($_GET['callback'])) {
//            echo json_encode($employee);
//        } else {
//            echo $_GET['callback'] . '(' . json_encode($employee) . ');';
//        }
//
//	} catch(PDOException $e) {
//		echo '{"error":{"text":'. $e->getMessage() .'}}';
//	}
//}
//
//function getReports($id) {
//
//    $sql = "select e.id, e.firstName, e.lastName, e.title, count(r.id) reportCount " .
//    		"from employee e left join employee r on r.managerId = e.id " .
//			"where e.managerId=:id " .
//    		"group by e.id order by e.lastName, e.firstName";
//
//    try {
//        $db = getConnection();
//    	$stmt = $db->prepare($sql);
//    	$stmt->bindParam("id", $id);
//    	$stmt->execute();
//    	$employees = $stmt->fetchAll(PDO::FETCH_OBJ);
//		$db = null;
//
//        // Include support for JSONP requests
//        if (!isset($_GET['callback'])) {
//            echo json_encode($employees);
//        } else {
//            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
//        }
//
//	} catch(PDOException $e) {
//		echo '{"error":{"text":'. $e->getMessage() .'}}';
//	}
//}
//
//function getEmployeesByName($name) {
//    $sql = "select e.id, e.firstName, e.lastName, e.title, count(r.id) reportCount " .
//    		"from employee e left join employee r on r.managerId = e.id " .
//            "WHERE UPPER(CONCAT(e.firstName, ' ', e.lastName)) LIKE :name " .
//    		"group by e.id order by e.lastName, e.firstName";
//	try {
//		$db = getConnection();
//		$stmt = $db->prepare($sql);
//		$name = "%".$name."%";
//		$stmt->bindParam("name", $name);
//		$stmt->execute();
//		$employees = $stmt->fetchAll(PDO::FETCH_OBJ);
//		$db = null;
//
//        // Include support for JSONP requests
//        if (!isset($_GET['callback'])) {
//            echo json_encode($employees);
//        } else {
//            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
//        }
//
//	} catch(PDOException $e) {
//		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
//	}
//}
//
//function getModifiedEmployees($modifiedSince) {
//    if ($modifiedSince == 'null') {
//        $modifiedSince = "1000-01-01";
//    }
//    $sql = "select * from employee WHERE lastModified > :modifiedSince";
//	try {
//		$db = getConnection();
//		$stmt = $db->prepare($sql);
//		$stmt->bindParam("modifiedSince", $modifiedSince);
//		$stmt->execute();
//		$employees = $stmt->fetchAll(PDO::FETCH_OBJ);
//		$db = null;
//
//        // Include support for JSONP requests
//        if (!isset($_GET['callback'])) {
//            echo json_encode($employees);
//        } else {
//            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
//        }
//
//	} catch(PDOException $e) {
//		echo '{"error":{"text":'. $e->getMessage() .'}}';
//	}
//}*/
//
//function getConnection() {
//	$dbhost="127.0.0.1";
//	$dbuser="root";
//	$dbpass="";
//	$dbname="newsbuddy";
//	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=utf8", $dbuser, $dbpass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));	
//	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//	return $dbh;
//}
// <-- end old code -->

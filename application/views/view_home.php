<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<title>NewsBuddy</title>
	<meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<meta name="description" content="Get the latest news, all types of news"/>
	<meta name="keywords" content="news, the news, in the news, in news, news paper, breaking news" />
	<meta name="viewport" content="width=1024" />
	<!-- <meta name="viewport" content="width=device-width"/> -->
	<link rel="shortcut icon" href="<?php echo site_url(); ?>images/favicon.ico" />
	<link rel="stylesheet" href="<?php echo site_url(); ?>css/bootstrap.min.css" />
	<link rel="stylesheet" href="<?php echo site_url(); ?>css/bootstrap-responsive.min.css" />
	<link rel="stylesheet" href="<?php echo site_url(); ?>css/bootstrap-notify.css" />
	<link rel="stylesheet" href="<?php echo site_url(); ?>css/bootstrap-notify-styles/alert-bangtidy.css" />
	<link rel="stylesheet" href="<?php echo site_url(); ?>css/bootstrap-notify-styles/alert-blackgloss.css" />
	<link rel="stylesheet" href="<?php echo site_url(); ?>css/font-awesome.min.css" />
	<link rel="stylesheet" href="<?php echo site_url(); ?>css/main.css" />
	<script src="<?php echo site_url(); ?>js/libs/modernizr.js"></script>
</head>

<body>

	<!--[if lt IE 7]>
		<p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
	<![endif]-->
	<header id="header"></header>
  <div id="overlay-container"></div>
  <div id="search-result-container"></div>
	<article id="cards" class="cards">
		<!--<div class="card-container"></div>-->
		
		<footer></footer>
    
    <div id="cards-nav"></div>
	</article>
  
  <div class="notifications bottom-right" id="default-notify"></div>
	
	<!-- build:js scripts/amd-app.js -->
	<script data-main="<?php echo site_url(); ?>js/config" src="<?php echo site_url(); ?>js/libs/require_2.1.4-jquery_1.9.0.js"></script>
	<!-- endbuild -->
	
</body>
	
</html>

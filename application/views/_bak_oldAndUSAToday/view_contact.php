
<!doctype html>
<html>
<!-- Design by IndiaPart (http://themedale.net/) -->
<head>
    <meta charset="utf-8" />

    <!-- title -->
    <title>Elixir Theme</title>

    <!-- stylesheets -->
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.8.23/themes/base/jquery-ui.css" type="text/css" media="all" />

    <!-- scripts -->
    <script src="js/modernizr.js" type="text/javascript"></script><!-- checks if css 3 animations are available -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js" type="text/javascript"></script>
    <script src="js/jquery/jquery.superfish.js" type="text/javascript"></script><!-- menu -->
    <script src="js/jquery/jquery.flexslider.js" type="text/javascript"></script><!-- slider -->
    <script src="js/jquery/jquery.easing.js" type="text/javascript"></script><!-- easing effects -->
    <script src="js/jquery/jquery.cookie.js" type="text/javascript"></script><!-- cookie -->
    <script src="js/jquery/jquery.quicksand.js" type="text/javascript"></script><!-- portfolio sorting animation -->
    <script src="js/jquery/jquery.animate.scale.js" type="text/javascript"></script><!-- portfolio sorting animation -->
    <script src="js/jquery/jquery.css.transform.js" type="text/javascript"></script><!-- portfolio sorting animation -->
    <script src="js/jquery/jquery.tweet.js" type="text/javascript"></script><!-- tweet in the sub content -->
    <script src="js/jquery/jquery.placeholder.js" type="text/javascript"></script><!-- placeholder plugin for older browsers -->

    <!-- some jquery ui enhancements -->
    <script src="js/jquery/ui/jquery.ui.effects.core.js" type="text/javascript"></script>
    <script src="js/jquery/ui/jquery.ui.widget.js" type="text/javascript"></script>
	<script src="http://code.jquery.com/ui/1.8.23/jquery-ui.min.js" type="text/javascript"></script>
    <script src="js/jquery/ui/jquery.ui.accordion.js" type="text/javascript"></script><!-- for the content accordion widget -->

    <script src="js/elixir.js" type="text/javascript"></script><!-- init all the scripts -->
    <script src="js/slider.js" type="text/javascript"></script><!-- init all the sliders -->

    <!-- google maps api -->
    <script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false"></script><!-- for contact page and gmaps v3 embed -->

    <!-- fonts -->
    <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,400italic|Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>

    <!-- some IE fixing -->
    <!--[if lt IE 9]>
    <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js">IE7_PNG_SUFFIX=".png";</script>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js" type="text/javascript"></script>
    <![endif]-->
</head>

<!-- BEGIN body -->
<body>


<!-- BEGIN #wrap -->
<div id="wrap">

<!-- BEGIN #header -->
<header id="header">

    <!-- BEGIN #navigation-bg -->
    <div id="navigation-bg">

        <!-- BEGIN nav -->
        <nav id="navigation">

            <!-- BEGIN #logo -->
            <div id="logo">
                <a href="http://demo.dotwired.de/elixir_html">
                    <img src="images/elixir.png" alt="Elixir theme" />
                </a>
                <!-- END #logo -->
            </div>

            <!-- BEGIN #menu -->
            <ul id="menu">
                <li><a href="<?php echo site_url(); ?>">Home</a>
                </li>
                <li><a href="<?php echo site_url(); ?>/site/about">About us</a>
                    <!--<ul class="sub-menu">
                        <li><a href="#">Very</a></li>
                        <li><a href="#">Clean</a></li>
                        <li><a href="#">Submenu</a>
                            <ul class="sub-menu">
                                <li><a href="#">Another</a></li>
                                <li><a href="#">Submenu</a></li>
                            </ul>
                        </li>
                    </ul> -->
                </li>
                <li><a href="<?php echo site_url(); ?>/site/support">Support</a>
                </li>
                <li><a href="<?php echo site_url(); ?>/site/contact">Contact</a></li>
            </ul>
            <!-- END #menu -->

            <!-- END #responsive-menu-wrap -->
            <div id="responsive-menu-wrap">
                <select id="responsive-menu">
                    <option value="http://demo.dotwired.de/elixir_html">Home</option>
                    <option value="http://demo.dotwired.de/elixir_html/home1">- Home Page 2 Example</option>
                    <option value="#">Features</option>
                    <option value="#">- Very</option>
                    <option value="#">- Clean</option>
                    <option value="#">- Submenu</option>
                    <option value="#">- - Another</option>
                    <option value="#">- - Submenu</option>
                    <option value="#">Pages</option>
                    <option value="http://demo.dotwired.de/elixir_html/columning">- Very</option>
                    <option value="http://demo.dotwired.de/elixir_html/portfolio">Portfolio</option>
                    <option value="http://demo.dotwired.de/elixir_html/blog">Blog</option>
                    <option value="http://demo.dotwired.de/elixir_html/about">About</option>
                </select>
            </div>
            <!-- END #responsive-menu-wrap -->

            <!-- END nav -->
        </nav>

        <div class="clear"></div>

    </div>

    <!-- END header -->
</header>

<div id="gmaps-wrap"></div>
	
<section id="content">
	
	<div id="heading">
		<h1>Hello, see our location in the wide world!</h1>
	</div>
	
	
	<div class="one-fourth">
		<h3>Contact info</h3>
		<p>
			30 South Park Avenue<br />
			San Francisco, CA 94108<br />
			USA<br /><br />

			Phone: (123) 456-7890<br />
			Fax: +08 (123) 456-7890<br />
			Email: contact@companyname.com<br />
			Web: companyname.com<br />
		</p>
	</div>
	
	<div class="three-fourths last">
		<h3>Let's keep in touch. :)</h3>
		<form id="contact-form" action="contact" method="post">
			<div class="input-box">
				<strong>Name</strong> <span>(required)</span>
				<input type="text" name="name" />
			</div>
			<div class="input-box">
				<strong>E-Mail</strong> <span>(required)</span>
				<input type="text" name="name" />
			</div>
			<div class="input-box last">
				<strong>Subject</strong>
				<input type="text" name="name" />
			</div>
			<div class="textarea-box">
				<strong>Message</strong> <span>(required)</span>
				<textarea></textarea>
			</div>
			<button>Send Message NOW!</button>
		</form>
	</div>
	
	<div class="clear"></div>
	
</section>

<!-- BEGIN #sub-content-->
<!--
<div id="sub-content">
    <div id="footer-tweet"></div>
</div>
-->
<!-- END #sub-content-->

<!-- BEGIN #footer-->
<footer id="footer">
    <div id="footer-inner">

        <div class="footer-one-third">
            <div class="block">
                <h3>Stay connected</h3>
                <p>Hotline: (+84) 0904 357 112<br />
                   Fax: (+84)(04) 3755 7066<br />
                   E-Mail: <a href="mailto:<?php echo $this->config->item('supportEmail'); ?>"><?php echo $this->config->item('supportEmail'); ?></a><br />
				</p>
            </div>
        </div>

        <div class="footer-one-third">
            <div class="block">
                <h3>Site navigation</h3>
				<!--
                <ul class="footermenu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
				-->
				<a href="#">Home</a>&nbsp;|&nbsp;<a href="#">About us</a>&nbsp;|&nbsp;<a href="#">Support</a>&nbsp;|&nbsp;<a href="#">Contact</a>
            </div>
        </div>

        <div class="footer-one-third last">
            <div class="block">
                <div class="contact">
                    <h3>Contact us</h3>
                    <form action="index" method="post">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="E-Mail" />
                        <textarea placeholder="Your Messsage"></textarea>
                        <button class="submit">Send message</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="clear"></div>
    </div>
</footer>

<!-- BEGIN #copyright-->
<div id="copyright">
    Copyright &copy; 2012 by MedicalInsurance. All rights reserved.
    <!-- END #copyright-->
</div>

<!-- END #wrap -->
</div>

</body>
</html>
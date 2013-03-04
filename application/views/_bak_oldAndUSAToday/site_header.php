<!-- BEGIN #header -->
<header id="header">

    <!-- BEGIN #navigation-bg -->
    <div id="navigation-bg">

        <!-- BEGIN nav -->
        <nav id="navigation">

            <!-- BEGIN #logo -->
            <div id="logo">
                <a href="<?php echo site_url(); ?>">
                    <img src="<?php echo site_url(); ?>/images/logo_medicalinsurance.png" alt="Elixir theme" />
                </a>
                <!-- END #logo -->
            </div>

            <!-- BEGIN #menu -->
            <ul id="menu">
				<?php
				$currentPage_home = $currPage == "home" ? "class='currPage'" : "";
				$currentPage_about = $currPage == "about" ? "class='currPage'" : "";
				$currentPage_support = $currPage == "support" ? "class='currPage'" : "";
				$currentPage_contact = $currPage == "contact" ? "class='currPage'" : "";
				?>
				
                <li><a <?php echo $currentPage_home; ?> href="<?php echo $currPage == "home" ? "#" : site_url(); ?>">Home</a>
                </li>
                <li><a <?php echo $currentPage_about; ?> href="<?php echo $currPage == "about" ? "#" : site_url()."site/about"; ?>">About us</a>
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
                <li><a <?php echo $currentPage_support; ?> href="<?php echo $currPage == "support" ? "#" : site_url()."site/support"; ?>">Support</a>
                </li>
                <li><a <?php echo $currentPage_contact; ?> href="<?php echo $currPage == "contact" ? "#" : site_url()."site/contact"; ?>">Contact</a></li>
            </ul>
            <!-- END #menu -->

            <!-- END #responsive-menu-wrap -->
			<!--
			-->
            <div id="responsive-menu-wrap">
                <select id="responsive-menu">
                    <option value="<?php echo site_url(); ?>">Home</option>
                    <option value="<?php echo site_url(); ?>site/about">About us</option>
                    <option value="<?php echo site_url(); ?>site/support">Support</option>
                    <option value="<?php echo site_url(); ?>site/contact">Contact</option>
                </select>
            </div>
            <!-- END #responsive-menu-wrap -->

            <!-- END nav -->
        </nav>

        <div class="clear"></div>

    </div>

    <!-- END header -->
</header>
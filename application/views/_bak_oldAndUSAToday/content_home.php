<!-- BEGIN #slideshow -->
<div id="slideshow" class="extended"><!-- You can the class to "default" to fit the slider in the content width-->
    <div class="slider">
        <div id="use-arrows"></div>
        <ul class="slides">
			<li>
                <img src="<?php echo site_url(); ?>/images/dummy/slider_vietnamtraffic.jpg" alt="" />
                <!-- NOTE: slider images should have the side proportion 2:1 to look well. Otherwise you will see a black area under the image on some resolution or browser width. -->
                <div class="flex-caption">
                    <div class="caption-inner">
                        <h1>You're living in Vietnam?</h1>
                        <p>Then it's important to have an International Medical Insurance. Accidents and emergencies are always unforeseen, and hospital systems in Vietnam are not so good, thus having International Medical Insurance plan will give you peace of mind.</p>
                    </div>
                </div>
            </li>
            <li>
                <img src="<?php echo site_url(); ?>/images/dummy/slider_family.jpg" alt="" />
                <!-- NOTE: slider images should have the side proportion 2:1 to look well. Otherwise you will see a black area under the image on some resolution or browser width. -->
                <div class="flex-caption">
                    <div class="caption-inner">
                        <h1>Choose your personalized plan</h1>
                        <p>Medical Insurance will help you choose an Intertional Medical Insurance plan that is right for you, your family, and your employees. We work with a variety of insurers to provide insurance policies that fit customers' requirements.</p>
                    </div>
                </div>
            </li>
            <li>
                <img src="<?php echo site_url(); ?>/images/dummy/slider_happyoldpp.jpg" alt="" />
                <div class="flex-caption">
                    <div class="caption-inner">
                        <h1>Everywhere</h1>
                        <p>We will take care of your medical insurance needs, regardless of where in the world you choose to travel, live or work.</p>
                    </div>
                </div>
            </li>
            <li>
                <img src="<?php echo site_url(); ?>/images/dummy/slider_kidshavingfun.jpg" alt="" />
				<div class="flex-caption">
                    <div class="caption-inner">
                        <h1>Fast services</h1>
                        <p>Medical Insurance commits to bring you the Fast and Fair, Prompt and Professional and Polite Service. Once you access to our large direct billing network in the whole Vietnam and other countries in the world, you could feel comfortable with our service. Moreover, our partner International SOS will help to arrange the emergency evacuation wherever you are to ensure that you will get assistance in need.</p>
                    </div>
                </div>
            </li>
            <li>
				<img src="<?php echo site_url(); ?>/images/dummy/slider_newlife.jpg" alt="" />
				<div class="flex-caption">
                    <div class="caption-inner">
                        <h1>Best advices, always</h1>
                        <p>Medical Insurance acts on your behalf and for your benefit, not the insurance companies. So we can offer you objective advice on any international medical insurance plan.</p>
                    </div>
                </div>
			</li>
        </ul>
    </div>
</div>
<!-- END #slideshow -->

<!-- BEGIN #content -->
<section id="content">
	<?php
	if(isset($sendingOK) && $sendingOK) {
		$class = $sendingOK == "ok" ? "ok" : "failed";
		$sendingResultMsg = $sendingOK == "ok" ? "You will receive an email containing details about your quote in next few minutes (usually immediately). Please check your email inbox (and spam box)." : "Some problems occurred. Sending email failed, please try again later. Sorry for this inconvenience.";
	?>
	<div id="notice" class="<?php echo $class; ?>">
		<h3><?php echo $sendingResultMsg; ?></h1>
	</div>
	<?php
	}
	?>
	
    <div class="stacked">
        <div class="one-third">
            <h2><img src="<?php echo site_url(); ?>/images/dummy/icon1.png" alt="" width="34" style="margin: 0 10px -20px 0;" />How to get quotation ?</h2>
            <p style="margin-left: 44px;">Fill in and submit this form if you need more information or a personalized quote. We will contact with you via telephone or email within the next 24 hours.</p>
        </div>

        <div class="one-third">
            <h2><img src="<?php echo site_url(); ?>/images/dummy/icon2.png" alt="" width="34" style="margin: 0 10px -20px 0;" />Need more infomation ?</h2>
            <p style="margin-left: 44px;">We also offer many other supporting materials, helping you through every step of the assessment and claims process. For a full list of our support resources, go to <a href="<?php echo site_url()."site/support"; ?>">Support page</a>.</p>
        </div>

        <div class="one-third last">
            <h2><img src="<?php echo site_url(); ?>/images/dummy/icon3.png" alt="" width="34" style="margin: 0 10px -20px 0;" />Contact us directly ?</h2>
            <p style="margin-left: 44px;">Prefer to contact us directly ? Please go to <a href="<?php echo site_url()."site/contact"; ?>">Contact page</a> for our email and hotline and Skype.			
			<a href="skype:medicalinsurancevn?call"><img src="http://mystatus.skype.com/bigclassic/medicalinsurancevn" style="border: none;" width="182" height="44" alt="My status" /></a>
			</p>
        </div>

        <div class="clear"></div>
    </div>

	
	 <div class="stacked">
        <h2 style="color: green; font-weight: bold;">Get your <span style="color: red">FREE</span> quote</h2>
        <form id="quote-form" action="<?php echo site_url(); ?>" method="post">
			<div class="input-box">
				<strong>Name</strong> <span>(required)</span>
				<input type="text" name="name" id="qname" />
			</div>
			<div class="input-box">
				<strong>E-Mail</strong> <span>(required)</span>
				<input type="text" name="email" id="qemail" />
			</div>
			<div class="input-box last">
				<strong>Birthday</strong> <span>(required)</span>
				<input type="text" name="birthday" id="qbirthday" />
			</div>
			<div class="input-box">
				<strong>Company</strong>
				<input type="text" name="company" id="qcompany" />
			</div>
			<div class="input-box last">
				<strong>Country</strong>
				<?php echo $selectCountries; ?>
			</div>
			<div class="clear"></div>
			<div class="input-box">
				<strong>Mobile</strong>
				<input type="text" name="mobile" id="qmobile" />
			</div>
			<div class="input-box last">
				<strong>Phone</strong>
				<input type="text" name="phone" id="qphone" />
			</div>
			<div class="clear"></div>
			
			<div class="input-box">
				<strong>Plan</strong> <span>(required)</span>
				<select name="plan" id="qplan" class="hasTip" alt="Legend: Plan" 
						title="
							<strong>H1</strong> - Hospital Plan: Classic <br />
							<strong>H2</strong> - Hospital Plan: Executive <br />
							<strong>H3</strong> - Hospital Plan: Premier <br />
							<strong>H4</strong> - Hospital Plan: Premier + Maternity <br />
							<strong>NOTE:</strong> Plan H4 - Premier + Maternity is available only to people from 18 to 44 years old.
						"
				>
					<option value="NA">----- Select a Plan -----</option>
					<option value=0>H1</option>
					<option value=1>H2</option>
					<option value=2>H3</option>
					<option value=3>H4</option>
				</select>
			</div>
			<div class="input-box">
				<strong>Zone</strong> <span>(required)</span>
				<select name="zone" id="qzone" class="hasTip" alt="Legend: Zone" 
						title="
							<strong>Z1</strong> - Worldwide subject to VND 40,000,000 deductible, applied to any Disability in USA and Canana <br />
							<strong>Z2</strong> - Vietnam, China, Thailand, Singapore, Taiwan, South Korea, Japan, Malaysia, Indonesia and Philippines <br />
							<strong>Z3</strong> - Worldwide <br />
							<strong>Z4</strong> - Worldwide excluding USA and Canada
						"
				>
					<option value="NA">----- Select a Zone -----</option>
					<option value=0>Z1</option>
					<option value=1>Z2</option>
					<option value=2>Z3</option>
					<option value=3>Z4</option>
				</select>
			</div>
			<div class="input-box last">
				<strong>Option</strong>
				<select name="option" id="qoption" class="hasTip" alt="Legend: Option" 
						title="
							<strong>O1</strong> - Outpatient <br />
							<strong>O2</strong> - Outpatient + Dental Benefit <br />
							<strong>O3</strong> - Outpatient with Deductible (*) <br />
							<strong>O4</strong> - Outpatient with Deductible (*) + Dental Benefit <br />
							<strong>NOTE:</strong> (*) Deductible VND 500,000 per visit
						"
				>
					<option value="NA">----- Select an Option -----</option>
					<option value=0>O1</option>
					<option value=1>O2</option>
					<option value=2>O3</option>
					<option value=3>O4</option>
				</select>
			</div>
			<div class="clear"></div>
			
			<button onclick="quoteform_validate(); return false;">Get your FREE quote NOW!</button>
		</form>
		
        <div class="clear"></div>
    </div>
	
	<script type="text/javascript">
		function quoteform_validate() {
			//alert('Do ContactForm_Validation here!');
			var name = $("#qname").val().trim();
			var email = $("#qemail").val().trim();
			var birthday = $("#qbirthday").val().trim();
			var plan = $("#qplan").val().trim();
			var zone = $("#qzone").val().trim();
			
			var passed = true;
			if(name == "") {
				passed = false;
				$("#qname").addClass("invalidInput");
			}else {
				$("#qname").removeClass("invalidInput");
			}
			
			if(email == "" || !IsEmail(email)) {
				passed = false;
				$("#qemail").addClass("invalidInput");
			}else {
				$("#qemail").removeClass("invalidInput");
			}
			
			if(birthday == "") {
				passed = false;
				$("#qbirthday").addClass("invalidInput");
			}else {
				$("#qbirthday").removeClass("invalidInput");
			}
			
			if(plan == "NA") {
				passed = false;
				$("#qplan").addClass("invalidInput");
			}else {
				$("#qplan").removeClass("invalidInput");
			}
			
			if(zone == "NA") {
				passed = false;
				$("#qzone").addClass("invalidInput");
			}else {
				$("#qzone").removeClass("invalidInput");
			}
			
			if(!passed) { // not pass
				alert("Please check the form again!");
				return;
			}else { // pass => submit form
				$("#quote-form").submit();
			}
		}
		
		function IsEmail(email) {
			var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email);
		}
	</script>
	
	<!--
    <div class="stacked portfolio-items">
        <h2>These are my Projects</h2>

        <div class="one-third">
            <a href="#" class="work-img-container">
                <div class="work-img fold-wrap">
                    <ol>
                        <li class="details"></li>
                        <li class="text">View Project</li>
                        <li class="arrow"></li>
                    </ol>
                    <div class="panel panel1" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio1.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                    <div class="panel panel2" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio1.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                    <div class="panel panel3" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio1.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                    <div class="panel panel4shadow"></div>
                    <div class="panel panel4" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio1.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                </div>
                <img src="php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio1.jpg&amp;w=420&amp;h=236" alt="" class="responsive-fallback-img" />
            </a>

            <div class="portfolio-item-sub">
                <h3><a class="ajax" href="http://demo.dotwired.de/elixir_html/single-portfolio">Audi R8</a></h3>
                <span>Some short description goes here</span>
            </div>
        </div>

        <div class="one-third">
            <a href="#" class="work-img-container">
                <div class="work-img fold-wrap">
                    <ol>
                        <li class="details"></li>
                        <li class="text">View Project</li>
                        <li class="arrow"></li>
                    </ol>
                    <div class="panel panel1" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio2.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                    <div class="panel panel2" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio2.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                    <div class="panel panel3" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio2.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                    <div class="panel panel4shadow"></div>
                    <div class="panel panel4" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio2.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                </div>
                <img src="php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio2.jpg&amp;w=420&amp;h=236" alt="" class="responsive-fallback-img" />
            </a>
            <div class="portfolio-item-sub">
                <h3><a class="ajax" href="http://demo.dotwired.de/elixir_html/single-portfolio">Aventador</a></h3>
                <span>Some short description goes here</span>
            </div>
        </div>

        <div class="one-third last">
            <a href="#" class="work-img-container">
                <div class="work-img fold-wrap">
                    <ol>
                        <li class="details"></li>
                        <li class="text">View Project</li>
                        <li class="arrow"></li>
                    </ol>
                    <div class="panel panel1" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio3.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                    <div class="panel panel2" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio3.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                    <div class="panel panel3" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio3.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                    <div class="panel panel4shadow"></div>
                    <div class="panel panel4" style="background-image: url('php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio3.jpg&amp;w=260&amp;h=146');"><div class="overlay"></div></div>
                </div>
                <img src="php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/portfolio3.jpg&amp;w=420&amp;h=236" alt="" class="responsive-fallback-img" />
            </a>
            <div class="portfolio-item-sub">
                <h3><a class="ajax" href="http://demo.dotwired.de/elixir_html/single-portfolio">Beloved design</a></h3>
                <span>Some short description goes here</span>
            </div>
        </div>

        <div class="clear"></div>
    </div>
	

    <div class="stacked portfolio-items">
        <h2>Labore et dolore magna aliquyam erat, sed diam voluptua</h2>
        <p>
            <img src="images/dummy/james.png" alt="" style="float: left; margin: 0 20px 10px 0;" />
        </p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>


        <div class="clear"></div>
    </div>


    <div class="stacked">

        <h2>My wonderful journal.</h2>

        <div class="one-third">
            <div class="post-preview-container">
                <a href="http://demo.dotwired.de/elixir_html/single-post" class="post-preview-img">
                    <img src="php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/post1.jpg&amp;w=420&amp;h=161" alt="" />
                    <span class="hover"></span>
                    <span class="details"></span>
                </a>
                <h3><a href="http://demo.dotwired.de/elixir_html/single-post">Layer Cake. Yep.</a></h3>
                <p class="date">Thursday Nov 24th</p>
                <p>This is some super awesome blog post excerpt from a nicely written blog post. Redefining webdesign.</p>
            </div>
        </div>

        <div class="one-third">
            <div class="post-preview-container">
                <a href="http://demo.dotwired.de/elixir_html/single-post" class="post-preview-img">
                    <img src="php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/post2.jpg&amp;w=420&amp;h=161" alt="" />
                    <span class="hover"></span>
                    <span class="details"></span>
                </a>
                <h3><a href="http://demo.dotwired.de/elixir_html/single-post">Beloved Mother.</a></h3>
                <p class="date">Thursday Nov 24th</p>
                <p>This is some super awesome blog post excerpt from a nicely written blog post. Redefining webdesign.</p>
            </div>
        </div>

        <div class="one-third last">
            <div class="post-preview-container">
                <a href="http://demo.dotwired.de/elixir_html/single-post" class="post-preview-img">
                    <img src="php/timthumb.php?src=<?php echo site_url(); ?>/images/dummy/post3.jpg&amp;w=420&amp;h=161" alt="" />
                    <span class="hover"></span>
                    <span class="details"></span>
                </a>
                <h3><a href="http://demo.dotwired.de/elixir_html/single-post">Grotrian Music.</a></h3>
                <p class="date">Thursday Nov 24th</p>
                <p>This is some super awesome blog post excerpt from a nicely written blog post. Redefining webdesign.</p>
            </div>
        </div>

        <div class="clear"></div>
    </div>
	-->
    <!-- END #content -->
</section>
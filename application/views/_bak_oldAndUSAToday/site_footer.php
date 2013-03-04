
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
                <p>Hotline: (+84) 0936 086 999 <br />
                   Fax: (+84) (04) 3755 7066<br />
                   E-Mail: <a href="mailto:<?php echo $this->config->item('supportEmail'); ?>"><?php echo $this->config->item('supportEmail'); ?></a><br />
                   Skype: <a href="skype:medicalinsurancevn?chat">medicalinsurancevn</a><br />
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
				<?php
				$currentPage_home = $currPage == "home" ? "class='currPage'" : "";
				$currentPage_about = $currPage == "about" ? "class='currPage'" : "";
				$currentPage_support = $currPage == "support" ? "class='currPage'" : "";
				$currentPage_contact = $currPage == "contact" ? "class='currPage'" : "";
				?>
				<a <?php echo $currentPage_home; ?> href="<?php echo $currPage == "home" ? "#" : site_url(); ?>">Home</a>&nbsp;|&nbsp;
				<a <?php echo $currentPage_about; ?> href="<?php echo $currPage == "about" ? "#" : site_url()."site/about"; ?>">About us</a>&nbsp;|&nbsp;
				<a <?php echo $currentPage_support; ?> href="<?php echo $currPage == "support" ? "#" : site_url()."site/support"; ?>">Support</a>&nbsp;|&nbsp;
				<a <?php echo $currentPage_contact; ?> href="<?php echo $currPage == "contact" ? "#" : site_url()."site/contact"; ?>">Contact</a>
            </div>
        </div>
		
		<!--
        <div class="footer-one-third last">
            <div class="block">
                <div class="contact">
                    <h3>Contact us</h3>
                    <form id="footer-contact-form" action="<?php echo site_url(); ?>site/contact" method="post">
                        <input type="text" placeholder="Name" name="name" id="fcname" />
                        <input type="text" placeholder="E-Mail" name="email" id="fcemail" />
                        <textarea placeholder="Your Messsage" name="message" id="fcmessage"></textarea>
                        <button onclick="footercontactform_validate(); return false;">Send message</button>
                    </form>
                </div>
            </div>
        </div>
		-->
		
		<div class="footer-one-third last">
            <div class="block">
                <div class="contact">
                    <h3>Useful resources</h3>
					<a href="<?php echo site_url()."downloads/libertyhealthcare_brochures.pdf"; ?>">
					<p><img style="width: 16px;" src="<?php echo site_url()."images/filetype_pdf.png"; ?>" />&nbsp;&nbsp;Liberty HealthCare Brochures</p>
					</a>
                    <a href="<?php echo site_url()."downloads/claim_instructions.pdf"; ?>">
					<p><img style="width: 16px;" src="<?php echo site_url()."images/filetype_pdf.png"; ?>" />&nbsp;&nbsp;Claim instructions</p>
					</a>
					<a href="<?php echo site_url()."downloads/claim_medical.claim.form.doc"; ?>">
					<p><img style="width: 16px;" src="<?php echo site_url()."images/filetype_doc.png"; ?>" />&nbsp;&nbsp;Medical Claim form</p>
					</a>
					<a href="<?php echo $currPage == "support" ? "#" : site_url()."site/support"; ?>">More resources...</a>
                </div>
            </div>
        </div>

        <div class="clear"></div>
    </div>
</footer>

<script type="text/javascript">
	function footercontactform_validate() {
		//alert('Do ContactForm_Validation here!');
		var name = $("#fcname").val().trim();
		var email = $("#fcemail").val().trim();
		var message = $("#fcmessage").val().trim();
		
		var passed = true;
		if(name == "") {
			passed = false;
			$("#fcname").addClass("invalidInput");
		}else {
			$("#fcname").removeClass("invalidInput");
		}
		
		if(email == "" || !IsEmail(email)) {
			passed = false;
			$("#fcemail").addClass("invalidInput");
		}else {
			$("#fcemail").removeClass("invalidInput");
		}
		
		if(message == "") {
			passed = false;
			$("#fcmessage").addClass("invalidInput");
		}else {
			$("#fcmessage").removeClass("invalidInput");
		}
		
		if(!passed) { // not pass
			alert("Please check the form again!");
			return;
		}else { // pass => submit form
			$("#footer-contact-form").submit();
		}
	}
	
	function IsEmail(email) {
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
</script>

<!-- BEGIN #copyright-->
<div id="copyright">
    Copyright &copy; 2012 by MedicalInsurance.vn. All rights reserved.
    <!-- END #copyright-->
</div>

<!-- END #wrap -->
</div>

</body>
</html>
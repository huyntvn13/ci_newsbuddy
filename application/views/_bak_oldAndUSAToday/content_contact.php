
<div id="gmaps-wrap"></div>
	
<section id="content">
	
	<div id="heading">
		<h1>Feel free to contact us!</h1>
	</div>
	<?php
	if(isset($sendingOK) && $sendingOK) {
		$class = $sendingOK == "ok" ? "ok" : "failed";
		$sendingResultMsg = $sendingOK == "ok" ? "Your message has been sent. Please wait, we will reply you soon. Thanks." : "Some problems occurred. Sending message failed, please try again later. Sorry sorry!";
	?>
	<div id="notice" class="<?php echo $class; ?>">
		<h3><?php echo $sendingResultMsg; ?></h1>
	</div>
	<?php
	}
	?>
	
	
	<div class="one-fourth">
		<h3>Contact info</h3>
		<p>
			16th Floor,<br />
			Hoa Binh International Tower, <br />
			106 Hoang Quoc Viet Str, <br />
			Cau Giay District, <br />
			Hanoi, VIetnam<br /><br />
			
			<!--
			Skype 'My status' button
			http://www.skype.com/go/skypebuttons
			-->
			<a href="skype:medicalinsurancevn?call"><img src="http://mystatus.skype.com/balloon/medicalinsurancevn" style="border: none;" width="150" height="60" alt="My status" /></a>
			
			Mobile: (+84) 0936 086 999 <br />
			Fax: (+84) (04) 3755 7066<br />
			Email: <?php echo $this->config->item('supportEmail'); ?><br />
			Web: medicalinsurance.vn<br />
		</p>

	</div>
	
	<div class="three-fourths last">
		<h3>To contact us, fill in this form.</h3>
		<form id="contact-form" action="<?php echo site_url(); ?>site/contact" method="post">
			<div class="input-box">
				<strong>Name</strong> <span>(required)</span>
				<input type="text" name="name" id="name" />
			</div>
			<div class="input-box">
				<strong>E-Mail</strong> <span>(required)</span>
				<input type="text" name="email" id="email" />
			</div>
			<div class="input-box last">
				<strong>Subject</strong>
				<input type="text" name="subject" id="subject" />
			</div>
			<div class="input-box">
				<strong>Company</strong>
				<input type="text" name="company" id="company" />
			</div>
			<div class="input-box">
				<strong>Mobile</strong>
				<input type="text" name="mobile" id="mobile" />
			</div>
			<div class="input-box last">
				<strong>Phone</strong>
				<input type="text" name="phone" id="phone" />
			</div>
			<div class="textarea-box">
				<strong>Message</strong> <span>(required)</span>
				<textarea name="message" id="message"></textarea>
			</div>
			<button onclick="contactform_validate(); return false;">Send Message NOW!</button>
		</form>
	</div>
	
	<script type="text/javascript">
		function contactform_validate() {
			//alert('Do ContactForm_Validation here!');
			var name = $("#name").val().trim();
			var email = $("#email").val().trim();
			var mobile = $("#mobile").val().trim();
			var phone = $("#phone").val().trim();
			var message = $("#message").val().trim();
			
			var passed = true;
			if(name == "") {
				passed = false;
				$("#name").addClass("invalidInput");
			}else {
				$("#name").removeClass("invalidInput");
			}
			
			if(email == "" || !IsEmail(email)) {
				passed = false;
				$("#email").addClass("invalidInput");
			}else {
				$("#email").removeClass("invalidInput");
			}
			
			if(message == "") {
				passed = false;
				$("#message").addClass("invalidInput");
			}else {
				$("#message").removeClass("invalidInput");
			}
			
			if(!passed) { // not pass
				alert("Please check the form again!");
				return;
			}else { // pass => submit form
				$("#contact-form").submit();
			}
		}
		
		function IsEmail(email) {
			var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email);
		}
	</script>
	
	<div class="clear"></div>
	
</section>

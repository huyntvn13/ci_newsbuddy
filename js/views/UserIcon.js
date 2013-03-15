/*global define*/

define(['jquery', 'marionette','templates', 'app', 'bootbox', 'helper', 'bootstrap'], function ($, Marionette, templates, App, bootbox, Helper) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.userIcon,
    
    ui : {
      loginWrap: '#user-login-wrap',
      registerWrap: '#user-register-wrap',
      logoutWrap: '#user-logout-wrap',
    },
    
    modelEvents: {
      'change:authenticated': 'authStatusChanged',
    },
    
    authStatusChanged: function() {
      var authenticated = this.model.get('authenticated');
      var displayName = this.model.get('displayName');
      if(authenticated){
        $('.user-display-name').html(displayName);
        this.activateLogoutWrap();
      }else {
        $('.user-display-name').html("");
        this.hideLogoutWrap();
      }
    },
    
    events: {
      // hover to show
			//'mouseover span.userbtn-wrap': 'showLoginPanel',
			//'mouseout span.userbtn-wrap': 'hideLoginPanel',
			//'mouseover div.dropdown': 'showLoginPanel',
			//'mouseout div.dropdown': 'hideLoginPanel',
      
      // click to show
			'click span.userbtn-wrap': 'toggleLoginPanel',
      
      'click #switch2Register-btn': 'toggleLoginRegisterWrap',
      'click #switch2Login-btn': 'toggleLoginRegisterWrap',
      'click #login-btn': 'login',
      'click #register-btn': 'register',
      'keypress #loginFormPassword': 'enterToLogin',
      'keypress #registerFormPasswordRetyped': 'enterToRegister',
      'click #logout-btn': 'logout',
      
      //'focusin #registerFormPassword': 'showPopover',
      //'focus #registerFormPassword': 'showPopover',
      //'focusout #registerFormPassword': 'hidePopover',
		},
    
    showPopover: function(event){
      $(".registerForm.passwordInput").popover('show');
    },
    
    hidePopover: function(event){
      $(".registerForm.passwordInput").popover('hide');
    },
    
    onRender: function() {
      var authenticated = this.model.get('authenticated');
      if(authenticated){ // user has logged in before this session
        this.activateLogoutWrap();
      }
    },
    
    enterToLogin: function(event) {
      if(event.which == 13 || event.keyCode == 13){
        this.login();
      }
    },
    
    enterToRegister: function(event) {
      if(event.which == 13 || event.keyCode == 13){
        this.register();
      }
    },
    
    validateLoginData: function() {
      var email = $.trim($('#loginFormUser').val());
      var password = $.trim($('#loginFormPassword').val());
      
      if(email == "" || password == "") return false;
      
      var usernameFailed = (email.search(/^[a-z0-9_-]{3,16}$/) == -1) ? true : false;
      var emailFailed = (email.search(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/) == -1) ? true : false;
      //var passwordFailed = (password.search(/^[a-z0-9_-]{8,}$/) == -1) ? true : false;
      
      if(usernameFailed && emailFailed){
        Helper.showNotification("Tên đăng nhập hoặc email không hợp lệ!");
        return false;
      }
      if(password.length < 8){
        Helper.showNotification("Mật khẩu cần tối thiểu 8 ký tự!");
        return false;
      }
      return true;
    },
    
    validateRegisterData: function() {
      var email = $.trim($('#registerFormEmail').val());
      var username = $.trim($('#registerFormUsername').val());
      var password = $.trim($('#registerFormPassword').val());
      var retyped = $.trim($('#registerFormPasswordRetyped').val());
      
      if(email == "" || username == "" || password == "" || retyped == "") {
        Helper.showNotification("Vui lòng điền đầy đủ thông tin.", "warning");
        return false;
      }
      
      var emailFailed = (email.search(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/) == -1) ? true : false;
      var usernameFailed = (username.search(/^[a-z0-9_-]{3,16}$/) == -1) ? true : false;
      //var passwordFailed = (password.search(/^[a-z0-9_-]{8,}$/) == -1) ? true : false;
      
      if(emailFailed){
        Helper.showNotification("Email không hợp lệ!");
        return false;
      }
      if(usernameFailed){
        Helper.showNotification("Tên đăng nhập không hợp lệ!");
        return false;
      }
      if(password != retyped){
        Helper.showNotification("Mật khẩu không khớp. Hãy kiểm tra lại!");
        return false;
      }
      if(password.length < 8){
        Helper.showNotification("Mật khẩu cần tối thiểu 8 ký tự!");
        return false;
      }
      return true;
    },
    
    /*
    login_alert: function(message){
      $('.login-form-alert').html(message);
    },
    */
    /* Example of dynamic bootstrap alert
    login_alert: function(message) {
      this.user_alert('.login-alert-placeholder', message);
    },
    user_alert: function(alertSelector, message) {
      $(alertSelector).html('<div class="alert alert-error"><button type="button" class="close" data-dismiss="alert">&times;</button><span>' + message + '</span></div>');
    },*/
    
    login:function () {      
      var self = this;
      
      if(!this.validateLoginData()){
        return false;
      }
      
      //$('.alert-error').hide(); // Hide any errors on a new submit
      var loginURL = '/api/login';
      console.log('Logging in...');
      var formValues = {
        email: $.trim($('#loginFormUser').val()),
        password: $.trim($('#loginFormPassword').val()),
      };
      //alert(formValues.email + "-" + formValues.password);

      $.ajax({
        url: loginURL,
        type: 'POST',
        dataType: "json",
        data: formValues,
        success: function(res) {         
          if(res.error) {  // If there is an error, show the error messages
            console.log('Logging in failed! ' + res.error.text);
            Helper.showNotification("Không thể đăng nhập! Hãy kiểm tra lại tên đăng nhập và mật khẩu.");
            self.model.set('authenticated', false);
            //$('.alert-error').text(res.error.text).show();
          }
          else { // Logged in successfully
            console.log('Logged in successfully.');
            self.model.set('authenticated', true);
            self.model.set('displayName', res.success.username);
            $('.user-display-name').html(res.success.username);
            self.activateLogoutWrap();
            //window.location.replace('/'); // back to homepage
          }
        }
      });
    },
    
    register:function () {
      var self = this;
      
      if(!this.validateRegisterData()){
        return false;
      }
      
      //$('.alert-error').hide(); // Hide any errors on a new submit
      var registerURL = '/api/register';
      console.log('Registering...');
      var formValues = {
        email: $.trim($('#registerFormEmail').val()),
        username: $.trim($('#registerFormUsername').val()),
        password: $.trim($('#registerFormPassword').val()),
      };

      $.ajax({
        url: registerURL,
        type: 'POST',
        dataType: "json",
        data: formValues,
        success: function(res) {     
          if(res.error) { // If there is an error, show the error messages
            if(res.error.duplicateType) {
              var type = parseInt(res.error.duplicateType);
              if(type == 1) { // duplicate email 
                console.log("Cannot register: duplicate email");
                Helper.showNotification("Email này đã được sử dụng!");
              }else if(type == 2) { // duplicate username
                console.log("Cannot register: duplicate username");
                Helper.showNotification("Tên đăng nhập này đã được sử dụng. Bạn vui lòng chọn tên khác.");
              }else { // unknown, maybe not because of duplicate, but another query error
                Helper.showNotification("Có lỗi xảy ra trong quá trình đăng ký.");
              }
            }else{
              console.log(res.error.text);
            }
          } else { // Registered successfully
            console.log('Registered successfully.');
            Helper.showNotification("Đăng ký thành công. Vui lòng kiểm tra email kích hoạt trong email của bạn.", "success");
          }
        }
      });
    },
    
    logout: function () {
      /* destroy session */
      $.cookie('udt_e', null);
      $.cookie('udt_r', null);
      app.userModel.set('authenticated', false);
      this.hideLogoutWrap();
      console.log('Done logging out.');
    },
    
    hideLogoutWrap: function() {
      this.ui.loginWrap.slideDown();
      this.ui.logoutWrap.slideUp();
    },
    
    activateLogoutWrap: function() {
      this.ui.registerWrap.slideUp();
      this.ui.loginWrap.slideUp();
      this.ui.logoutWrap.slideDown();
    },
    
    toggleLoginRegisterWrap: function() {
      this.ui.registerWrap.slideToggle();
      this.ui.loginWrap.slideToggle();
    },
    
    toggleLoginPanel: function() {
      if(this.model.get('displayingUserPanel'))
        this.hideLoginPanel();
      else
        this.showLoginPanel();
    },
		
		showLoginPanel: function() {
			$('#navbar li.user.icon').addClass("active");
			$('#navbar li.user.icon .dropdown').css("display", "block");
      this.model.set('displayingUserPanel', true);
		},
		
		hideLoginPanel: function() {
			$('#navbar li.user.icon').removeClass("active");
			$('#navbar li.user.icon .dropdown').css("display", "none");
      this.model.set('displayingUserPanel', false);
		},
    
  });

});
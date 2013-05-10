/*global define*/

define([
  'jquery',
  'marionette',
  'templates',
  'helper',
  'newsContentHelper',
  ], function ($, Marionette, templates, Helper) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.overlayContent,
    templateHelpers : newsContentHelper,
    tagName: 'div',
    id: 'overlay',
    //className: 'fixed-wrap',
    
    initialize : function(options) {
      var self = this;
      this.appData = options.appData;
      
      this.considerReadTimeout = app.appDataModel.get('considerReadThreshold') || 50000;
      this.considerReadTimerRemaining = this.considerReadTimeout;
      this.considerReadTimerStarted = false;
      this.considerReadTimer = false;
      this.considerReadTimerStartTime = 0;
      this.checkFocusInterval = false;
      this.considerReadTimerPaused = false;
      
      // if authenticated, setInterval to check focus, and pause considerReadTimer if needed
      var checkAuthenticated = app.userModel.get('authenticated');
      var checkHasFocus = document.hasFocus;
      if(checkAuthenticated && checkHasFocus){
        console.log("checkFocusInterval: authenticated & support 'hasFocus'");
        this.checkFocusInterval = setInterval(function(){
          self.checkFocus();
        }, 200);
      }
    },

    ui : {
      //searchIcon: 'li.search.icon',
    },

    modelEvents: {
      'change:data': 'dataChanged',
    },
    
    checkFocus: function(){
      var self = this;
      if (document.hasFocus()) {
        if(this.considerReadTimerPaused && this.considerReadTimerStarted && this.considerReadTimerPaused && this.considerReadTimerRemaining > 0){
          // reset timer
          this.considerReadTimer = setTimeout(function(){
            self.requestMarkingReadNews();
          }, self.considerReadTimerRemaining);
          this.considerReadTimerPaused = false;
          console.log('considerReadTimer resumed. Remaining time: ' + this.considerReadTimerRemaining);
        }
      }else { // no focus
        if(!this.considerReadTimerPaused && this.considerReadTimerStarted && this.considerReadTimer && this.considerReadTimerRemaining > 0){
          // pause timer
          this.considerReadTimerRemaining = this.considerReadTimeout - (new Date() - this.considerReadTimerStartTime);
          // only pause if timeRemaining >= 3000 (3s)
          if(this.considerReadTimerRemaining >= 3000) {
            this.considerReadTimerPaused = true;
            clearTimeout(this.considerReadTimer);
            console.log('considerReadTimer paused. Remaining time: ' + this.considerReadTimerRemaining);
          }else {
            console.log('too litte time left, dont pause: ' + this.considerReadTimerRemaining);
          }
        }
      }
    },
    
    // function: mark news as read
    requestMarkingReadNews: function(){
      var self = this;
      self.clearTimer();
      
      var nID = self.model.get('newsID');
      if(nID != 0){ // nID == 0 => don't send request (because maybe this overlay is showing something else, like error, not news)
        var apiURL = '/api/marknewsasread/' + nID;
        $.ajax({
          url: apiURL,
          type: 'POST',
          dataType: "json",
          success: function(res) { 
            if(res.error) {
              console.log("FAILED: while trying to mark this news as read!!!");
            }
            else {
              console.log("Marked this news as read.");
              
              $('.util-bar-interestedin-label').addClass('markedasread');
              $('.util-bar-addtoqueue-btn').removeClass('addedtoqueue');
              $('.util-bar-hidenews-btn').removeClass('hiddennews');
              
              self.model.set('newsInteract', 1);
              self.updateUserInteractInCurrentSectionNewsList();
            }
          },
        });
      }
    },
    
    dataChanged: function() {
      var self = this;
      var data = this.model.get('data');
      var newsOriginURL = data.link;
      if(newsOriginURL === undefined){
        app.router.navigate('errors/404', {trigger: true});
        return false;
      }
      
      // update title
      $('head title').html(data.title + ' - ' + app.appDataModel.get('siteNameFull'));
      // update utility-wrap
      if(app.userModel.get('authenticated')){
        $('.util-bar-hidenews-module').removeClass('hidden');
        //if(data.user_interact == 1) {
          $('.util-bar-markinterestedin-module').removeClass('hidden');
        //}
        $('.util-bar-addtoqueue-module').removeClass('hidden');
      }
      
      // store user_interact
      var userInteract = data.user_interact;
      userInteract = (userInteract == null) ? 0 : userInteract;
      self.model.set('newsInteract', parseInt(userInteract));
      
      if(data.user_interact == -1) {
        $('.util-bar-hidenews-btn').addClass('hiddennews');
      }else if(data.user_interact == 1){
        $('.util-bar-interestedin-label').addClass('markedasread');
      }else if(data.user_interact == 2){
        $('.util-bar-addtoqueue-btn').addClass('addedtoqueue');
      }else{
      
      }
      
      $('#content-loading-overlay .transition-wrap').animate({
          opacity: 0,
        }, {
          duration: 1500, 
          easing: "linear",
          queue: false,
          complete: function(){
            $('iframe#news-origin').attr('src', newsOriginURL);
            $('.content#content-loading-overlay').css('display', 'none');
            $('.content#content-loading-overlay').remove();
            
            // if authenticated, then start timer
            if(app.userModel.get('authenticated')){
              if(data.user_interact == 1){
                console.log('this news has been marked as read before, aborting considerReadTimer and clearInterval.');
                clearInterval(self.checkFocusInterval);
              }else if(data.user_interact == -1){
                console.log('this news has been marked as not interesting before, aborting considerReadTimer and clearInterval.');
                clearInterval(self.checkFocusInterval);
              }else{
                self.considerReadTimerStartTime = new Date();
                self.considerReadTimer = setTimeout(function(){
                  self.requestMarkingReadNews();
                }, self.considerReadTimeout);
                self.considerReadTimerStarted = true;
              }
            }
          },
        }
      );
    },

    events: {
			'click div.transition-wrap.zoomed-in': 'closeOverlayBox',
      'click div.utility-wrap': 'dontCloseOverlayBox',
			'click div.error': 'dontCloseOverlayBox',
      'click .next': 'setAnimationType',
      'click .previous': 'setAnimationType',
      'click .util-bar-hidenews-btn': 'hideNewsOrRestoreNews',
      'click .util-bar-interestedin-label': 'checkToRequestMarkingAsRead',
      'click .util-bar-addtoqueue-btn': 'checkToAddOrRemoveFromQueue',
		},
    
    checkToAddOrRemoveFromQueue: function(e) {
      var self = this;
      var elem = $(e.target).parent();
      if(elem.hasClass('disabledModule')){
        // do nothing
      }else{
        self.addToOrRemoveFromQueue(elem);
      }
    },
    
    addToOrRemoveFromQueue: function(elem) {
      var self = this;
      var newsID = this.model.get('newsID');
      
      if(elem.hasClass('addedtoqueue')) {
        // now remove it from queue
        
        // send request to server
        var apiURL = '/api/removefromqueue/' + newsID;
        $.ajax({
          url: apiURL,
          type: 'POST',
          dataType: "json",
          success: function(res) { 
            if(res.result) {
              Helper.showNotification("Tin đã được xoá khỏi danh sách 'Đọc sau'.", "success");
              
              // update DOM
              $('.util-bar-addtoqueue-btn').removeClass('addedtoqueue');
              $('.util-bar-interestedin-label').addClass('markedasread');
              $('.util-bar-hidenews-btn').removeClass('hiddennews');
              
              self.model.set('newsInteract', 1);
              self.updateUserInteractInCurrentSectionNewsList();
            }
            else {
              Helper.showNotification("Có lỗi xảy ra!");
            }
          }
        });
      }else { 
        // now add it to queue
      
        // kill considerReadTimer and checkFocusInterval
        self.clearTimer();
        console.log('considerReadTimer and checkFocusInterval have been killed.');
      
        // send request to server
        var apiURL = '/api/addtoqueue/' + newsID;
        $.ajax({
          url: apiURL,
          type: 'POST',
          dataType: "json",
          success: function(res) { 
            if(res.result) { // true: succeed
              var notificationContent = "Đã thêm vào danh sách 'Đọc sau'.";
              Helper.showNotification(notificationContent, "success");
              
              // update DOM
              $('.util-bar-addtoqueue-btn').addClass('addedtoqueue');
              $('.util-bar-interestedin-label').removeClass('markedasread');
              $('.util-bar-hidenews-btn').removeClass('hiddennews');
              //$('.util-bar-markinterestedin-module').addClass('hidden');
              
              self.model.set('newsInteract', 2);
              self.updateUserInteractInCurrentSectionNewsList();
            }
            else { // failed
              Helper.showNotification("Có lỗi xảy ra! <addToQueue>");
            }
          }
        });
      }
    },
    
    checkToRequestMarkingAsRead: function(e) {
      var self = this;
      var elem = $(e.target).parent();
      if(elem.hasClass('disabledModule') || elem.hasClass('markedasread')){
        // do nothing
      }else{
        self.requestMarkingReadNews();
      }
    },
    
    hideNewsOrRestoreNews: function() {
      var self = this;
      var newsID = this.model.get('newsID');
      
      if($('.util-bar-hidenews-btn').hasClass('hiddennews')) { // currently hidden => let's restore it     
        
        // send request to server
        var apiURL = '/api/restorenews/' + newsID;
        $.ajax({
          url: apiURL,
          type: 'POST',
          dataType: "json",
          success: function(res) { 
            if(res.result) {
              Helper.showNotification("Khôi phục tin thành công!", "success");
              
              // update DOM
              $('.util-bar-hidenews-btn').removeClass('hiddennews');
              $('.util-bar-addtoqueue-btn').removeClass('addedtoqueue');
              $('.util-bar-interestedin-label').removeClass('markedasread');
              
              self.model.set('newsInteract', 0);
              self.updateUserInteractInCurrentSectionNewsList();
            }
            else {
              Helper.showNotification("Đã xảy ra lỗi trong quá trình khôi phục tin!");
            }
          }
        });
      }else { // currently not hidden, let's hide it
        // kill considerReadTimer and checkFocusInterval
        clearInterval(this.checkFocusInterval);
        if(this.considerReadTimer) {
          clearTimeout(this.considerReadTimer);
        }
        console.log('considerReadTimer and checkFocusInterval have been killed.');
      
        // send request to server
        var apiURL = '/api/hidenews/' + newsID;
        $.ajax({
          url: apiURL,
          type: 'POST',
          dataType: "json",
          success: function(res) { 
            if(res.result) { // true: succeed
              var notificationContent = "Ẩn tin thành công.";
              Helper.showNotification(notificationContent, "success");
              
              // update DOM
              $('.util-bar-hidenews-btn').addClass('hiddennews');
              $('.util-bar-addtoqueue-btn').removeClass('addedtoqueue');
              $('.util-bar-interestedin-label').removeClass('markedasread');
              
              self.model.set('newsInteract', -1);
              self.updateUserInteractInCurrentSectionNewsList();
            }
            else { // failed
              Helper.showNotification("Đã xảy ra lỗi trong quá trình ẩn tin!");
            }
          }
        });
      }
    },
    
    updateUserInteractInCurrentSectionNewsList: function() {
      var self = this;
      var currentSection = app.appDataModel.get('currentSection');
      var newsID = self.model.get("newsID")
      if(currentSection !== null){
        var currentSectionWrapModel = app.wraps.getWrap(currentSection);
        var visibleNewsArr = currentSectionWrapModel.get('visibleNewsArr');
        var data = currentSectionWrapModel.get('data');
        var foundIdx = -1;
        for(var i=0, len=data.news.length; i<len; i++){
          if(newsID == data.news[i].id){
            foundIdx = i;
            break;
          }
        }
        if(foundIdx != -1){ // found
          var currNewsInteract = self.model.get('newsInteract');
          visibleNewsArr[foundIdx] = currNewsInteract;
          currentSectionWrapModel.set('visibleNewsArr', visibleNewsArr);
        }
      }
    },
    
    setAnimationType: function(e) {
      /* current not being used, using only default scale-up animation
      if($(e.target).hasClass('next')){
        app.appDataModel.set('newsAnimationType', 'next');
      }else { // previous
        app.appDataModel.set('newsAnimationType', 'prev');
      }
      */
      
      var href = $(e.target).attr('href');
      app.router.navigate(href, {trigger: true});
    
      return false;
    },
    
    dontCloseOverlayBox: function() {
      return false;
    },
    
    closeOverlayBox: function() {
      //window.history.back();
      var self = this;
      var backToPath = '';
      if (this.appData.get('showingView') == 'news') {
        var currentSection = this.appData.get('currentSection');
        var wrap = app.wraps.getWrap(currentSection);
        var currentSubSection = wrap.get('subSection');      
        if(currentSection == 'home' || currentSection == 'null'){
          backToPath = '';
        }else {
          backToPath = '/' + currentSection;
          if(currentSubSection != ''){
            backToPath += '/' + currentSubSection;
          }
        }
      } else if (this.appData.get('showingView') == 'search_news') {
        backToPath = '/search/' + encodeURIComponent(this.appData.get('currentSearchKeyword'));
      }
      
      
      $('#overlay-container #overlay').animate({
          opacity: 0,
        }, {
          duration: 250, 
          easing: "jswing",
          queue: false,
          complete: function(){
            app.router.navigate(backToPath, {trigger: true});
            
            // restore scroll position
            var scrollValue = self.appData.get('currentScrollTopValue');
            $('html, body').animate({
               scrollTop: scrollValue
            }, 0);
          },
        }
      );
    },
    
    onRender: function() {
      // update title
      var overlayType = this.model.get('overlayType');
      if(overlayType == "news"){
        $('head title').html('Loading - ' + app.appDataModel.get('siteNameFull'));
      }else if(overlayType == "error"){
        $('head title').html('Error - ' + app.appDataModel.get('siteNameFull'));
      }else{}
    
      $('#overlay-container').addClass('show');
      $('article#cards').css('display', 'none');
      
      // set iframe height
      var iframeHeight = $(window).height() - 40; // 40 is header's height
      $('#overlay-container').css('height', iframeHeight + 'px');
      
      // disable page scroll
      $('body').addClass('noscroll');
      
      // get data, only if overlay type is 'news'
      if(overlayType == 'news'){
        this.model.requestNewsData();
      }
    },
    
    clearTimer: function(){
      if(this.considerReadTimer) {
        clearTimeout(this.considerReadTimer);
      }
      clearInterval(this.checkFocusInterval);
    },
    
    onClose: function() {
      this.clearTimer();
    },
  });

});
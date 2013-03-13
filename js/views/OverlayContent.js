/*global define*/

define([
  'jquery',
  'marionette',
  'templates',
  'newsContentHelper',
  ], function ($, Marionette, templates) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.overlayContent,
    templateHelpers : newsContentHelper,
    tagName: 'div',
    id: 'overlay',
    //className: 'fixed-wrap',
    
    initialize : function(options) {
      this.appData = options.appData;
    },

    ui : {
      //searchIcon: 'li.search.icon',
    },

    modelEvents: {
      'change:data': 'dataChanged',
    },
    
    dataChanged: function() {
      var self = this;
      var newsOriginURL = this.model.get('data').link;
      if(newsOriginURL === undefined){
        app.router.navigate('errors/404', {trigger: true});
        return false;
      }
      
      // update title
      $('head title').html(this.model.get('data').title + ' - ' + app.appDataModel.get('siteNameFull'));
      
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
          },
        }
      );
    },

    events: {
			'click div.transition-wrap.zoomed-in': 'closeOverlayBox',
			'click div.error': 'dontCloseOverlayBox',
      'click .next': 'setAnimationType',
      'click .previous': 'setAnimationType',
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
      var currentSection = this.appData.get('currentSection');
      var wrap = app.wraps.getWrap(currentSection);
      var currentSubSection = wrap.get('subSection');
      var backToPath = '';
      if(currentSection == 'home' || currentSection == 'null'){
        backToPath = '';
      }else {
        backToPath = '/' + currentSection;
        if(currentSubSection != ''){
          backToPath += '/' + currentSubSection;
        }
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
  });

});
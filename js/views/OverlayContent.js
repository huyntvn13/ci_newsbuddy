/*global define*/

define([
  'jquery',
  'marionette',
  'templates',
  ], function ($, Marionette, templates) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.overlayContent,
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
      
      $('#content-loading-overlay .transition-wrap').animate({
          opacity: 0,
        }, {
          duration: 1500, 
          easing: "linear",
          queue: false,
          complete: function(){
            $('iframe#news-origin').attr('src', newsOriginURL);
            $('.content#content-loading-overlay').css('display', 'none');
          },
        }
      );
    },

    events: {
			'click div.transition-wrap.zoomed-in': 'closeOverlayBox',
			'click div.error': 'dontCloseOverlayBox',
		},
    
    dontCloseOverlayBox: function() {
      return false;
    },
    
    closeOverlayBox: function() {
      //window.history.back();
      var self = this;
      var currentSection = this.appData.get('currentSection');
      if(currentSection == 'home' || currentSection == 'null')
        currentSection = '';
      app.router.navigate(currentSection, {trigger: true});
      $('html, body').animate({
         scrollTop: self.appData.get('currentScrollTopValue')
      }, 0);
    },
    
    onRender: function() {
      $('#overlay-container').addClass('show');
      $('article#cards').css('display', 'none');
      
      // set iframe height
      var iframeHeight = $(window).height() - 40; // 40 is header's height
      $('#overlay-container').css('height', iframeHeight + 'px');
      
      // disable page scroll
      $('body').addClass('noscroll');
      
      // get data, only if overlay type is 'news'
      if(this.model.get('overlayType') == 'news'){
        this.model.requestNewsData();
      }
    },
  });

});
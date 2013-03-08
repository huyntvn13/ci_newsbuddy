/*global define*/

define([
  'jquery',
  'marionette',
  'app',
  'templates',
  ], function ($, Marionette, App, templates) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.newsContent,
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
			'click .transition-wrap.zoomed-in': 'closeNewsBox',
		},
    
    closeNewsBox: function() {
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
      
      // get data
      this.model.requestNewsData();
    },
  });

});
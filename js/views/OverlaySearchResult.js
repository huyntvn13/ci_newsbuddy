/*global define*/

define([
  'jquery',
  'marionette',
  'templates',
  ], function ($, Marionette, templates) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.overlaySearchResult,
    tagName: 'div',
    //id: 'search-result',
    className: 'search-results ui-dark',
    templateHelpers : newsContentHelper,
    
    initialize : function(options) {
      //this.appData = options.appData;
    },

    ui : {
      
    },

    modelEvents: {
      'change:data': 'dataChanged',
    },
    
    dataChanged: function() {
      console.log("on datachange");
      this.model.set('isLoading', false);
      this.render();
      
    },

    events: {
			
		},
    
    onRender: function() {
//      if (this.model.get('isLoading')) {
//        this.model.requestSearchData();
//      }
      $('.search-result-image').each(function(){
        var thisImgTag = $(this);
        var img = new Image();
        img.src = thisImgTag.data("src");
        //console.log("--image: " + img.src);
        img.onload=function(){
          console.log("++image: " + img.src);
          thisImgTag.attr('src', img.src);
          thisImgTag.centerImage();
          thisImgTag.css('display', 'none');
          thisImgTag.css('display', '');
        }
        img.onerror=function(){
          console.log("--image: " + img.src);
        }
      });
    },
  });

});
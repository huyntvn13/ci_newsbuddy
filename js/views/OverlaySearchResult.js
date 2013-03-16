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
      $('.search-result-image').each(function(){
        var thisImgTag = $(this);
        var img = new Image();
        img.src = thisImgTag.data("src");
        img.onload=function(){          
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
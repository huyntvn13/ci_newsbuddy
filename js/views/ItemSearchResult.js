/*global define*/

define([
  'jquery',
  'marionette',
  'templates',
  ], function ($, Marionette, templates) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.itemSearchResult,
    tagName: 'li',
    className: function() {
      var news = this.model.get("news");
      if (news["image"] != "") {
        return 'text search-result-item';
      } else {
        return 'message search-result-item';
      }
       
    },
    templateHelpers : newsContentHelper,
    
    initialize : function(options) {
      
    },

    ui : {
      
    },

    modelEvents: {
      
    },

    events: {
			
		},    
    
    onRender: function() {
      $('.search-result-image').each(function(){
        var thisImgTag = $(this);
        thisImgTag.centerImage();
      });
      
    },
  });

});
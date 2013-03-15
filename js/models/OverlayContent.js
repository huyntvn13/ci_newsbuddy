
define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      overlayType: 'news', // posible types: news, error
      newsID: 0,
    },

    initialize : function() {

    },
    
    url: function() {
      return '/api/newsDetails/' + this.get("newsID");
    },
    
    requestNewsData: function() {
      var self = this;
      var apiURL = '/api/newsDetails/' + this.get('newsID');
      $.ajax({
        url: apiURL,
        type: 'GET',
        dataType: "json",
        success: function(res) { 
          if(res.error) {
            
          }
          else {
            self.set('data', res);
            //console.log("newsContent data:");
            //console.log(res);
          }
        },
      });
    },
  });

});

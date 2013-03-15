
define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      viewType: "grid",
      keyword: "",
      isLoading: true,
    },

    initialize : function() {

    },
    
    url: function() {
      return '../api/search/' + this.get("keyword");
    },
    
    requestSearchData: function() {
      var self = this;
      var requestValues = {
        keyword: self.get('keyword'),
      };
      var apiURL = '/api/search';
      $.ajax({
        url: apiURL,
        type: 'POST',
        dataType: "json",
        data: requestValues,
        success: function(res) { 
          if(res.error) {
            
          }
          else {
            self.set('data', res);
            console.log(res);
          }
        },
      });
    },
  });

});

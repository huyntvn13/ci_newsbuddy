 
define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){
  'use strict';

  return Backbone.Model.extend({
    defaults : {
  		dataOrder: "0",
      sectionName: "home",
      subSection: "None",
      inlineStyle: "",
      loading: true,
      // "margin: 0px; left: 85px; position: relative; bottom: 0px;"
  	},
    
    url: function() {
      return '../api/section/' + this.get("subSection");
    },
    
    requestSectionData: function() {
      var self = this;
      var apiURL = '../api/section/' + this.get('subSection');
      $.ajax({
        url: apiURL,
        type: 'GET',
        dataType: "json",
        success: function(res) { 
          if(res.error) {
            
          }
          else {
            self.set('data', res);
            self.set('loading', false); // loading status changed => render
            console.log(self.get('data'));
          }
        }
      });
    },
    
    initialize : function() {
      
    },
  });

});

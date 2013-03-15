 
define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){
  'use strict';

  return Backbone.Model.extend({
    defaults : {
  		dataOrder: "0",
      sectionName: "home",
      subSection: "",
      viewType: "grid",
      inlineStyle: "",
      loading: true,
      // "margin: 0px; left: 85px; position: relative; bottom: 0px;"
  	},
    
    url: function() {
      //return '/api/section/' + this.get("subSection");
      return '/api/section/' + this.get("sectionName");
    },
    
    restoreNews: function(newsID){
      var visibleNewsArr = this.get('visibleNewsArr');
      var data = this.get('data');
      var foundIdx = -1;
      for(var i=0, len=data.news.length; i<len; i++){
        if(newsID == data.news[i].id){
          foundIdx = i;
          break;
        }
      }
      if(foundIdx != -1){ // found
        visibleNewsArr[foundIdx] = true;
        this.set('restoringNews', newsID);
      }
    },
    
    refreshSection: function() {
      // reload data then scroll to top
      this.set('loading', true);
      this.requestSectionData();
      $('html, body').animate({
         scrollTop: 0
      }, 0);
    },
    
    requestSectionData: function() {
      var self = this;
      var apiURL = '';
      if(this.get('subSection') == ''){
        apiURL = '/api/section/' + this.get('sectionName');
      }else {
        apiURL = '/api/section/' + this.get('subSection');
      }
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

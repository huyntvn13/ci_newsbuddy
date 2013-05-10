  
define(['jquery', 'underscore', 'backbone', 'vent'],function($, _, Backbone, vent){
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      authenticated: false,
      displayName: "",
      displayingUserPanel: false,
    },
    
    url: function() {
      //return '/api/username/1';
    },
    
    retrieveStatus: function() {
      var self = this;
      $.ajax({
        url: '/api/retrieve_status',
        type: 'GET',
        dataType: "json",
        success: function(res) {
          if(res.loggedin) { // Logged in
            console.log("Your loggedIn data has been retrieved successfully."+res.loggedin.displayName);
            self.set('displayName', res.loggedin.displayName);
            self.set('authenticated', true);
          }else {  // not logged in yet
            console.log('No valid logged in data about you!');
            self.set('authenticated', false);
          }
          self.updateAllViewAllValues();
        }
      });
    },
    
    updateAllViewAllValues: function() {
      var self = this;
      if(self.get('authenticated')){
        $.each(App.appDataModel.get('sections'), function(index, sName){
          var wrap = App.wraps.getWrap(sName);
          wrap.set("viewAll", false);
        });
      }else{
        $.each(App.appDataModel.get('sections'), function(index, sName){
          var wrap = App.wraps.getWrap(sName);
          wrap.set("viewAll", true);
        });
      }
    },
    
    initialize : function() {
      var self = this;
      this.retrieveStatus();
      this.listenTo(this, 'change:authenticated', function(){
        self.updateAllViewAllValues();
        vent.trigger('newsBuddy:refreshCurrentSection');
      });
    },
  });

});

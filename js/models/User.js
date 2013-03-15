  
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
        }
      });
    },
    
    initialize : function() {
      this.retrieveStatus();
      this.listenTo(this, 'change:authenticated', function(){
        vent.trigger('newsBuddy:refreshCurrentSection');
      });
    },
  });

});

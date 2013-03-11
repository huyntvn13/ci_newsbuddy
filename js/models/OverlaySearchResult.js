
define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      viewType: "grid",
      keyword: "",
    },

    initialize : function() {

    },
    
    url: function() {
      return '../api/search/' + this.get("keyword");
    },
  });

});

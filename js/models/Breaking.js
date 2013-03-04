 
define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){
  'use strict';

  return Backbone.Model.extend({
    defaults : {
      type: 0,  // 0: Warning
                // 1: Breaking News
      headline: "This is just sample text.",
      readMoreText: "Read Story",
  	},
    
    initialize : function() {
      
    },
  });

});

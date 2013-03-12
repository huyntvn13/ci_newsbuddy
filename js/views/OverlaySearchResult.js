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
      
    },
  });

});
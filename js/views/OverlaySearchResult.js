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
    id: 'search-result',
    //className: 'fixed-wrap',
    
    initialize : function(options) {
      //this.appData = options.appData;
    },

    ui : {
      //searchIcon: 'li.search.icon',
    },

    modelEvents: {
      'change:data': 'dataChanged',
    },
    
    dataChanged: function() {
      
    },

    events: {
			
		},
    
    onRender: function() {
      
    },
  });

});
/*global define*/

define([
  'marionette',
  'templates',
  ], function (Marionette, templates) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.newsContent,
    tagName: 'div',
    //className: 'fixed-wrap',

    ui : {
      //searchIcon: 'li.search.icon',
    },

    modelEvents: {
      //'change:currentSection': 'modelChanged',
    },

    events: {
			//'click li.search.icon': 'toggleSearchForm',
		},
  });

});
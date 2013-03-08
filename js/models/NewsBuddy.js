 
define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      canAnimateFromNowOn: false,
      visualGap: 0,
      currentCardWidth: 0,
      animatingSectionSwitching: false,
      currentScrollTopValue: 0,
      showingSection: false,
      showintNews: false,
      
      currentSection: 'null',
      sections: ['home', 'news', 'money', 'sports', 'technology', 'lifestyle', 'education', 'health', 'realestate'],
      sectionsDataOrder: [],
    },
    
    initialize : function() {
      
    },
  });

});

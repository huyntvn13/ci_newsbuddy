 
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
      sections_vi: {
        'home': 'trang chủ',
        'news': 'thời sự',
        'money': 'thị trường',
        'sports': 'thể thao',
        'technology': 'công nghệ',
        'lifestyle': 'phong cách',
        'education': 'giáo dục',
        'health': 'sức khoẻ',
        'realestate': 'nhà đất',
      },
      sectionsDataOrder: [],
    },
    
    initialize : function() {
      
    },
  });

});

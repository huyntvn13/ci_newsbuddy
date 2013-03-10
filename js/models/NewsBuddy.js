 
define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      lang: 'vi',
      
      canAnimateFromNowOn: false,
      visualGap: 0,
      currentCardWidth: 0,
      animatingSectionSwitching: false,
      currentScrollTopValue: 0,
      
      showingSection: false,
      showingNews: false,
      showingError: false,
      errorType: "404", // page not found
      
      
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

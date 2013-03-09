 
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
      sections_subSections: {
        'news':       ['politics_social', 'legal', 'world'],
        'money':      ['business_market', 'stock_market', 'labour_market'],
        'sports':     [],
        'technology': ['ict', 'science'],
        'lifestyle':  ['culture', 'entertainment'],
        'education':  ['studying_abroad', 'enrollment'],
        'health':     ['be_healthy', 'gender_health'],
        'realestate': ['realestate_news', 'living_space'],
      },
      sectionsDataOrder: [],
    },
    
    initialize : function() {
      
    },
  });

});

 
define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      lang: 'vi',
      siteName: 'xenoNEWS',
      siteNameFull: 'xenoNEWS.vn',
      
      considerReadThreshold: 35000,
      
      canAnimateFromNowOn: false,
      visualGap: 0,
      currentCardWidth: 0,
      animatingSectionSwitching: false,
      currentScrollTopValue: 0,
      
      showingView: false, // maybe: 'news', 'section', 'error', 'search', 'search_news'
      currentSearchKeyword: "",
      currentLatestNewsId: 0,
      currentSearchPage: 0,
      errorType: "404", // page not found
      
      /* for using with OverlayContent: animation type of overlay content: scale-up(default), or next, prev animation (next news, previous news) */
      /* current not being used, using only default scale-up animation
      // click next, previous => slide, enter news directly => scale up
      newsAnimationType: false, // 'next', 'prev', false = 'scaleup'
      */
      
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
        'health':     ['be_healthy', 'love_marriage'],
        'realestate': ['realestate_news', 'living_space'],
      },
      sectionsDataOrder: [],
    },
    
    initialize : function() {
      
    },
  });

});

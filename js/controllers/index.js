/*global define*/

define(['vent'], function (vent) {
  "use strict";

  return {
    index : function(section) {
      section = (typeof(section) == 'undefined') ? 'home' : section.trim().replace('/', '');
      console.log("requested section: " + section);
      vent.trigger('newsBuddy:checkToChangeSection', section);
    }, 
    
    searchNews : function(keyword) {
      console.log("keyword: " + keyword);
      //vent.trigger('newsBuddy:showSearchResult', keyword);
    },
    
    handleSubsection : function(section, subSection) {
      console.log("requested section: " + section + ", subSection: " + subSection)
      vent.trigger('newsBuddy:checkToChangeSection', section, subSection);
    },
    
    viewNews_Section : function(section, source, title, id) {
      var subSection = '';
      vent.trigger('newsBuddy:showNewsOverlay', section, subSection, source, title, id);
    },
    
    viewNews_SubSection : function(section, subSection, source, title, id) {
      vent.trigger('newsBuddy:showNewsOverlay', section, subSection, source, title, id);
    },
    
    error404: function() {
      vent.trigger('newsBuddy:show404Error');
    },
  };
});
/*global define*/

define(['vent'], function (vent) {
  "use strict";

  return {
    index : function(section) {
      section = (typeof(section) == 'undefined') ? 'home' : section.trim().replace('/', '');
      console.log("requested section: " + section);
      vent.trigger('newsBuddy:checkToChangeSection', section);
    }, 
    
    viewNews : function(section, source, title, id) {
      vent.trigger('newsBuddy:showNews', section, source, title, id);
    },
  };
});
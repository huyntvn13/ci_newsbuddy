 /*global define*/

define(['marionette','templates'], function (Marionette, templates) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.cardsNav,
    
    ui : {
      prev: '#cards-prev-link',
      next: '#cards-next-link',
    },
    
    events: {
      'click #cards-next-link': 'canAnimateNowOrNot',
      'click #cards-prev-link': 'canAnimateNowOrNot',
    },
    
    canAnimateNowOrNot: function() {
      if(this.model.get('animatingSectionSwitching'))
        return false; // cannot animate now, wait for previous animation to complete
      return true; // can animate now
    },
    
    modelEvents: {
      'change:currentSection': 'modelChanged',
    },
    
    modelChanged: function() {
      var sections = this.model.get('sections');
      var currentSection = this.model.get('currentSection');
      var length = sections.length;
      var currIdx = sections.indexOf(currentSection);
      currIdx = (currIdx == -1) ? 0 : currIdx;
      
      var next = (currIdx+1 == length) ? 0 : currIdx + 1;
      var prev = (currIdx-1 == -1) ? length - 1 : currIdx - 1;
      
      next = (next == 0) ? "" : sections[next];
      prev = (prev == 0) ? "" : sections[prev];
    
      this.ui.prev.attr('href', '/' + prev);
      this.ui.next.attr('href', '/' + next);
    },
  });

});
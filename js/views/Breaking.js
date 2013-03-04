 /*global define*/

define(['marionette','templates'], function (Marionette, templates) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.breaking,
    tagName: 'div',
    id: 'breaking-wrap', 
    
    ui : {
      'closeButton': '#breaking .close-btn',
    },
    
    events: {
      'click .close-btn': 'hideBreakingWrap'
    },
    
    modelEvents: {
      'change': 'modelChanged',
    },
    
    modelChanged: function() {
      var self = this;
      this.render();
    },
    
    onRender: function() {
      this.$el.css('position', 'static');
      /* Uncomment these lines to Show on startup
      $('#breaking').css('opacity', '0');
      $('#breaking').css('display', 'block');
      $('#breaking').animate({'opacity': 1}, {duration: 400});
      /**/
    },
    
    hideBreakingWrap: function() {
      /*
      $('#breaking').animate({'opacity': 0}, {duration: 400, complete: function(){
        $('#breaking').css('display', 'none');
      }});*/
      $('#breaking').css('display', 'none');
      $('#breaking').css('opacity', '0');
    },
  });

});
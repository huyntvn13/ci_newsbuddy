/*global define*/

define([
'jquery',
'marionette',
'templates',
'views/CardWrapSection',
], function ($, Marionette, templates, CardWrapSectionView) {
  "use strict";

  return Marionette.CollectionView.extend({
    itemView: CardWrapSectionView,
    className: 'card-container',
    
    cardSizes: [{
        name: "large",
        sidebarAds: !0,
        cardWidth: 1180,
        windowWidth: 1250
    }, {
        name: "medium",
        sidebarAds: !1,
        cardWidth: 1080,
        windowWidth: 1150
    }, {
        name: "small",
        sidebarAds: !1,
        cardWidth: 840,
        windowWidth: 980
    }],
    
    initialize : function(options) {
      this.initSection = options.initSection;  
      this.scrollbarWidth = options.scrollbarWidth;
      
      this.itemViewOptions = { 
        cardSizes: this.cardSizes,
        minWindowWidth: this.cardSizes[2].windowWidth,
        initSection: this.initSection,
        scrollbarWidth: this.scrollbarWidth,
        appData: this.model,
      }; 
    },
    
    onBeforeRender: function(){

    },
    
    onRender : function() {
      //this.$el.attr("style", "left: -333px;");
    },
  });

});
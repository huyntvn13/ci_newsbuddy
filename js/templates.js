define(function(require){
  "use strict";
  return {
    blank               : require('tpl!templates/blank.html'),
    header              : require('tpl!templates/header.html'),
    userIcon            : require('tpl!templates/userIcon.html'),
    breaking            : require('tpl!templates/breaking.html'),
    
    footer              : require('tpl!templates/footer.html'),
    cardsNav            : require('tpl!templates/cards-nav.html'),
    cardWrapSection     : require('tpl!templates/card-wrap-section.html'),
    cardWrapSectionData : require('tpl!templates/card-wrap-section-data.html'),
    overlayContent      : require('tpl!templates/overlay-content.html'),
    overlaySearchResult : require('tpl!templates/overlay-search-result.html'),
  };
});
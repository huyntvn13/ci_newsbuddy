define(function(require){
  "use strict";
  return {
    header              : require('tpl!templates/header.html'),
    userIcon            : require('tpl!templates/userIcon.html'),
    breaking            : require('tpl!templates/breaking.html'),
    
    footer              : require('tpl!templates/footer.html'),
    cardsNav            : require('tpl!templates/cards-nav.html'),
    cardWrapSection     : require('tpl!templates/card-wrap-section.html'),
    cardWrapSectionData : require('tpl!templates/card-wrap-section-data.html'),
  };
});
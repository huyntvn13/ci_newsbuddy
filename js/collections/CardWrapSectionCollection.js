
define(['jquery', 'backbone','models/CardWrapSection'],function($, Backbone, CardWrapSection) {
  'use strict';

  return Backbone.Collection.extend({
    model: CardWrapSection,
    
    getWrap: function(sectionName) {
      var homeWrap = null;
      var toReturnWrap = null;
      $.each(this.models, function(idx, currModel){
        var name = currModel.get("sectionName");
        if(name == "home"){
          homeWrap = currModel;
        }
        if(name == sectionName){
          toReturnWrap = currModel;
          return false;
        }
      });
      if(toReturnWrap)
        return toReturnWrap;
      else
        return homeWrap;
    },
  });

});
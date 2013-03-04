 define([
  'underscore',
  'backbone',
  'models/cardContainer/cardWrapLoading/cardWrapLoadingModel',
], function(_, Backbone, CardWrapLoadingModel) {

  var CardWrapLoadingCollection = Backbone.Collection.extend({

  	model: CardWrapLoadingModel,
	
	initialize: function( models, options ) {
		
	},
	
	/*
	url : function() {
		return 'https://api.github.com/repos/thomasdavis/backbonetutorials/contributors';
	},

	parse : function(data) {
		var uniqueArray = this.removeDuplicates(data.data);
		return uniqueArray;
	},
	*/

  });

  return CardWrapLoadingCollection;

});

 define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var CardWrapLoadingModel = Backbone.Model.extend({

  	defaults : {
  		dataOrder: "0",
		sectionName: "home",
		inlineStyle: "margin: 0px; left: 85px;",
		// "margin: 0px; left: 85px; position: relative; bottom: 0px;"
  	},
	
	initialize: function( options ) {
		this.dataOrder = options.dataOrder; 
		this.sectionName = options.sectionName;
		this.inlineStyle = options.inlineStyle;
	},
	
	/*
	url : function() {
		return 'https://api.github.com/users/' + this.query;
	},
	
	parse : function(res) { 
		// because of jsonp 
		return res.data;
	}
	*/

  });

  return CardWrapLoadingModel;

});

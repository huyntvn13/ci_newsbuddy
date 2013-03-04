 define([
  'jquery',
  'underscore',
  'backbone',
  'models/cardContainer/cardWrapLoading/cardWrapLoadingModel',
  'collections/cardContainer/cardWrapsLoading/cardWrapsLoadingCollection',
  'text!templates/cardContainer/cardWrapsLoading.html'
], function($, _, Backbone, CardWrapLoadingModel, CardWrapsLoadingCollection, cardWrapsLoadingTemplate){

	var CardWrapsLoadingView = Backbone.View.extend({
		el: $(".card-container"),
		
		initialize: function() {
			var that = this;
			var options = {dataOrder: "1", sectionName: "news"};

			var onDataHandler = function(collection) {
				that.render();
			}
			
			var makeInlineCSS = function(dtOrder) {
				var style = "";
				var initLeft = 85;
				if(dtOrder == 0){
					style = "margin: 0px; left: 85px;";
				}else{
					var left = 85 + dtOrder * 1365;
					style = "margin: 0px; position: absolute; bottom: 0px; left: " + left + "px; display: block;";
				}
				return style;
			};
			
			var wrap1 = new CardWrapLoadingModel({ dataOrder: "-1", sectionName: "weather", inlineStyle: makeInlineCSS(-1) });
			var wrap2 = new CardWrapLoadingModel({ dataOrder: "0", sectionName: "home", inlineStyle: makeInlineCSS(0) });
			var wrap3 = new CardWrapLoadingModel({ dataOrder: "1", sectionName: "news", inlineStyle: makeInlineCSS(1) });
			var wraps = [wrap1, wrap2, wrap3];
			
			this.collection = new CardWrapsLoadingCollection(wraps);
			//this.collection.fetch({ success : onDataHandler, dataType: "jsonp"}); // nothing to fetch yet
		},

		render: function(){
			//console.log("rendering cardWrapsLoadingView...");
			var data = {
				cardWraps: this.collection.models,
				_: _ 
			};
			//////////////////////////////////
			//////////////////////////////////
			// can pass: this.model, or data, or custom {} to template function
			//////////////////////////////////
			//////////////////////////////////
			var compiledTemplate = _.template( cardWrapsLoadingTemplate, data);
			//////////////////////////////////
			//////////////////////////////////
			
			this.$el.html(compiledTemplate);
		},
		
	});

	return CardWrapsLoadingView;
  
});

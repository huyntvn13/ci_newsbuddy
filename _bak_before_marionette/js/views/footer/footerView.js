define([
  'jquery',
  'underscore',
  'backbone',
  //'models/owner/OwnerModel',
  'text!templates/footer/footerTemplate.html'
], function($, _, Backbone, footerTemplate){

	var FooterView = Backbone.View.extend({
		el: $("footer"),
		events: {
			'click .site-index':  'toggleSiteIndex'
		},
		
		/*
		initialize: function() {
			var that = this;
			var options = {query: 'thomasdavis'}

			var onDataHandler = function(collection) {
				that.render();
			}

			this.model = new OwnerModel(options);
			this.model.fetch({ success : onDataHandler, dataType: "jsonp"});
		},
		*/

		render: function(){
			var data = {
				//owner: this.model.toJSON(),
				//_: _ 
			};
			var compiledTemplate = _.template( footerTemplate, data );
			this.$el.html(compiledTemplate);
		},
		
		toggleSiteIndex: function(e){			
			var footer = $(".footer");
			var toggle = $("footer .footer p.site-index");
			var nav = $("footer .footer nav");
			var i = footer.offset().top - $("#nav").height() - $("#breaking").height();
			
			toggle.toggleClass("open"); 
			$("html,body").animate({
				scrollTop: i
			}, 500, "easeInOutCubic"); 
			nav.slideToggle(500, "easeInOutCubic");
		}
	});

	return FooterView;
  
});

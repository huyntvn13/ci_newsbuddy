define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/header/headerTemplate.html'
], function($, _, Backbone, headerTemplate){

	var HeaderView = Backbone.View.extend({
		el: $("header#header"),
		events: {
			'click li.search.icon': 'preventDefaultActionThenToggleSearchForm',
			'click li.user.icon': 'preventDefaultActionOfElement',
			'mouseover span.user-icon': 'showLoginPanel',
			'mouseout span.user-icon': 'hideLoginPanel',
			'click span.cancel': 'preventDefaultActionThenToggleSearchForm',
			'click #navbar': 'test',
		},
		/*
		initialize: function() {
			this.eventBinder = new Backbone.EventBinder();
			this.eventBinder.bindTo(null, 'click #navbar', this.test, this);
		},
		
		close: function() {
			this.eventBinder.unbindAll();
		},*/
		
		test: function() {
			alert("chuan bi nao");
			// manually set the location
			Backbone.history.saveLocation("/found");
			// and load the url
			Backbone.history.loadUrl();
		},

		render: function(){
			var data = {
				
			};
			var compiledTemplate = _.template( headerTemplate, data );
			this.$el.html(compiledTemplate);
			
			var self = this;
			$(window).scroll(function () {
				var val = $("#masthead").css("height");
				var isSearchFormExpanded = (val == "0px") ? false : true;
				if(isSearchFormExpanded)
					self.toggleSearchForm();
			});
		},
		
		preventDefaultActionOfElement: function(event) {
			event.preventDefault();
		},
		
		showLoginPanel: function() {
			$('#navbar li.user.icon').addClass("active");
			$('#navbar li.user.icon .dropdown').css("display", "block");
		},
		
		hideLoginPanel: function() {
			$('#navbar li.user.icon').removeClass("active");
			$('#navbar li.user.icon .dropdown').css("display", "none");
		},
		
		preventDefaultActionThenToggleSearchForm: function(event) {
			event.preventDefault();
			this.toggleSearchForm();
		},
		
		toggleSearchForm: function(){	
			var val = $("#masthead").css("height");
			var isSearchFormExpanded = (val == "0px") ? false : true;
			
			if(!isSearchFormExpanded){
				$(".logo").css("opacity", 0);
				$(".logo").addClass("large");
				$("#search-form").css("height", "auto");
			}else {
				$(".logo").css("opacity", 0);
				$(".logo").removeClass("large");
			}
			$("#masthead").animate(
			{
				height: isSearchFormExpanded ? "0px" : "80px"
			},
			{
				duration: 180,
				easing: 'easeOutQuad',
				queue: false,
				complete: function(){
					if(!isSearchFormExpanded){
						$('#search-form .search .text-input').focus();
						$(".logo").animate(
						{
							opacity: 1,
							bottom: 0
						},
						{
							duration: 100,
							easing: 'easeOutQuad', 
							queue: false,
							complete: function(){
								
							}
						});
					}else {
						$("#search-form").css("height", "");
						$(".logo").animate(
						{ 
							opacity: 1,
							bottom: -40
						},
						{
							duration: 10,
							easing: 'easeOutQuad',
							queue: false,
							complete: function(){
								
							}
						});
					}
				}
			});
		
			this.isSearchFormExpanded = !this.isSearchFormExpanded;
		}, 
	});

	return HeaderView;
  
});

/*global define*/

define([
  'marionette',
  'templates', 
  ], function (Marionette, templates) {
  "use strict";

  return Marionette.Layout.extend({
    template : templates.header,
    tagName: 'div',
    className: 'fixed-wrap',
    
    ui : {
      searchIcon: 'li.search.icon',
      cancelBtn: 'span.cancel',
    },
    
    modelEvents: {
      'change:currentSection': 'modelChanged',
    },
    
    modelChanged: function() {
      console.log("NewsBuddy model changed (Detected by View Header.js)");
      $('#navbar li.text').removeClass('active');
      $('#navbar li.text.' + this.model.get('currentSection')).addClass('active');
    },
    
    events: {
			'click li.search.icon': 'toggleSearchForm',
			'click span.cancel': 'toggleSearchForm',
      'click .submit': 'submitSearchForm',
      'keypress .text-input': 'enterToSubmitSearch',
		},
    
    onRender: function() {    
      var self = this;
      $(window).scroll(function () {
				var val = $("#masthead").css("height");
				var isSearchFormExpanded = (val == "0px") ? false : true;
				if(isSearchFormExpanded)
					self.toggleSearchForm();
			});
    },
		
    enterToSubmitSearch: function(event) {
      if(event.keyCode == 13){
        this.submitSearchForm();
      }
    },
    
    submitSearchForm: function(event) {
      var keyword = $.trim($('.text-input').val());
      if (keyword == "") {
        return;
      }
      keyword = encodeURIComponent(keyword);
      window.location.href="/search/" + keyword;
      //alert(keyword);
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

});
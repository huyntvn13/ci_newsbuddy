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
      'change:showingView': 'showingViewChanged',
    },
    
    modelChanged: function() {
      console.log("NewsBuddy model changed (Detected by View Header.js)");
      $('#navbar li.text').removeClass('active');
      $('#navbar li.text.' + this.model.get('currentSection')).addClass('active');
    },
    
    showingViewChanged: function() {
      console.log('change showing view' + this.model.get('showingView'));
      if (this.model.get('showingView') == "search") {
        //this.render();
        $(".logo").css("opacity", 1);
				$(".logo").addClass("large");
        $(".logo").css("bottom", 0);
				$("#search-form").css("height", "auto");
        $("#masthead").css("height", "80px");
      } else {
        var val = $("#masthead").css("height");
        var isSearchFormExpanded = (val == "0px") ? false : true;
        if (isSearchFormExpanded)
          this.toggleSearchForm();
      }  
    },
    
    events: {
			'click li.search.icon': 'toggleSearchForm',
			'click span.cancel': 'closeSearchForm',
      'click .submit': 'submitSearchForm',
      'keypress .text-input': 'enterToSubmitSearch',
		},
    
    onRender: function() {    
      var self = this;
      $(window).scroll(function () {
				var val = $("#masthead").css("height");
				var isSearchFormExpanded = (val == "0px") ? false : true;
				if(isSearchFormExpanded && self.model.get('showingView') != 'search')
					self.toggleSearchForm();
			});
      
//      if (self.model.get('showingView') == "search") {
//				$(".logo").css("opacity", 1);
//				$(".logo").addClass("large");
//        $(".logo").css("bottom", 0);
//				$("#search-form").css("height", "auto");
//        $("#masthead").css("height", "80px");
//			}
    },
		
    enterToSubmitSearch: function(event) {
      if(event.which == 13 || event.keyCode == 13){
        this.submitSearchForm();
        if(event.keyCode == 13) {
          event.preventDefault();
          return false;
        }
      }
    },
    
    submitSearchForm: function(event) {
      var keyword = $.trim($('.text-input').val());
      if (keyword == "") {
        return;
      }
      keyword = encodeURIComponent(keyword);
      app.router.navigate('/search/' + keyword, {trigger: true});
    },
    
		toggleSearchForm: function(){
      if (this.model.get('showingView') == "search") {
        return;
      }
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

    closeSearchForm: function() {
      if (this.model.get('showingView') != "search") {
        this.toggleSearchForm();
      } else {
        var self = this;
        var currentSection = self.model.get('currentSection');
        var wrap = app.wraps.getWrap(currentSection);
        var currentSubSection = wrap.get('subSection');
        var backToPath = '';
        if(currentSection == 'home' || currentSection == 'null'){
          backToPath = '';
        }else {
          backToPath = '/' + currentSection;
          if(currentSubSection != ''){
            backToPath += '/' + currentSubSection;
          }
        }
        app.router.navigate(backToPath, {trigger: true});
      }
    },
  });

});
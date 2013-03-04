/*global define*/

define(['marionette','templates'], function (Marionette, templates) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.footer,
    
    ui : {},
    
    modelEvents: {
      //'change': 'modelChanged',
    },
    
    events: {
			'click .site-index':  'toggleSiteIndex'
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

});
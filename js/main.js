
// Filename: main.js
// Author: huyntvn13 <huyntvn13.it@gmail.com>

require([
	"jquery",
  "underscore",

	"app",
	"backbone",
	"mainRouter",
  "mainController",
  "easing",
  "cookie",
  "imagecenter",
  "bootstrap",
  "notify",
  "timeago",
], function($, _, app, Backbone, MainRouter, MainController){
  this.app = app;
  
  app.addInitializer(function( options ){
		// Define your master router on the application namespace and trigger all
		// navigation from this instance.
		app.router = new MainRouter({
      controller: MainController,
    });

		// Trigger the initial route and enable HTML5 History API support, set the
		// root folder to '/' by default.  Change in app.js.
		Backbone.history.start({ pushState: true, root: options.root });

    // All navigation that is relative should be passed through the navigate
    // method, to be processed by the router. If the link has a `data-bypass`
    // attribute, bypass the delegation completely.
    $(document).on("click", "a[href]:not([data-bypass])", function(evt) {
      // Get the absolute anchor href.
      var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
      // Get the absolute root.
      var root = location.protocol + "//" + location.host + options.root;

      // Ensure the root is part of the anchor href, meaning it's relative.
      if (href.prop.slice(0, root.length) === root) {
        // Stop the default event to ensure the link will not cause a page
        // refresh.
        evt.preventDefault();

        // `Backbone.history.navigate` is sufficient for all Routers and will
        // trigger the correct events. The Router's internal `navigate` method
        // calls this anyways.  The fragment is sliced from the root.
        Backbone.history.navigate(href.attr, true);
      }
    });
    
    // Tell jQuery to watch for any 401 or 403 errors and handle them appropriately
    $.ajaxSetup({
      statusCode: {
        401: function(){
          // Redirect the to the login page.
          // not logged in
          window.location.replace('/login');
         
        },
        403: function() {
          // 403 -- Access denied 
          // logged in, but not enough privileges
          window.location.replace('/denied');
        }
      }
    });

	});

	$(document).ready(function(){
		app.start({
			root : window.location.pathname,
		})
	});
});

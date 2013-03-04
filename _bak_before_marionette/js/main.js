
// Filename: main.js
// Author: huyntvn13 <huyntvn13.it@gmail.com>

// Require.js allows us to configure shortcut alias
require.config({
	paths: {
		underscore: 'libs/underscore/underscore-min',
		backbone: 	'libs/backbone/backbone-min',
		templates: 	'../templates',
		router: 	'router',
		
		// requirejs plugins
		rqdomready: 'libs/require/plugins/domReady',
		
		// backbone plugins
		eventbinder: 'libs/backbone/backbone.eventbinder.min',
		
		// jquery plugins
		easing: 	'libs/jquery/jquery.easing',
		jhistory: 	'libs/jquery/jquery.history',
	}
});

require([
	// Load our app module and pass it to our definition function
	'app',

], function(App){
	// The "app" dependency is passed in as "App"
	// Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
	App.initialize();
});

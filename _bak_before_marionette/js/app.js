
// Filename: app.js
// Author: huyntvn13 <huyntvn13.it@gmail.com>

define([
	'jquery', 
	'underscore', 
	'backbone',
	'router', // Request router.js
	'rqdomready', 
	
	'eventbinder',
	'easing',
], function($, _, Backbone, Router, domReady){

	var initialize = function(){
		// Pass in our Router module and call it's initialize function
		Router.initialize();
	};

	return { 
		initialize: initialize
	};
});

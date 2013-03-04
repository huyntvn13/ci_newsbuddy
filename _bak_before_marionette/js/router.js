
// Filename: router.js
// Author: huyntvn13 <huyntvn13.it@gmail.com>

define([
	'jquery',
	'underscore',
	'backbone',
	'views/header/headerView',
	'views/footer/footerView',
	'views/cardContainer/cardWrapsLoadingView',
	//'jhistory',
], function($, _, Backbone, HeaderView, FooterView, CardWrapsLoadingView) {
  
	var AppRouter = Backbone.Router.extend({
	routes: {
		// Define some URL routes
		//"*actions": "defaultRoute", // matches http://example.com/#anything-here
		//"posts/:id": "getPost",
        //"download/*path": "downloadFile",
        //":route/:action": "loadView",
		
		'found': 'subscribe',
		'*actions': 'defaultAction',
	}
	});
	
	var initialize = function(){
		
		/* History.JS */
		/*
		// Check Location
		if ( document.location.protocol === 'file:' ) {
			alert('The HTML5 History API (and thus History.js) do not work on files, please upload it to a server.');
		}
		
		// Establish Variables
		var
			History = window.History, // Note: We are using a capital H instead of a lower h
			State = History.getState();
			
		// Log Initial State
		History.log('initial:', State.data, State.title, State.url);
		
		// Bind to State Change
		History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
			// Log the State
			var State = History.getState(); // Note: We are using History.getState() instead of event.state
			History.log('statechange:', State.data, State.title, State.url);
		});
		/*-----------*/

		var app_router = new AppRouter;

		app_router.on('route:defaultAction', function (actions) {			
			if(AppRouter.headerView){}
			else {AppRouter.headerView = new HeaderView();}
			AppRouter.headerView.render();
			
			if(AppRouter.footerView){}
			else {AppRouter.footerView = new FooterView();}
			AppRouter.footerView.render();
			
			if(AppRouter.cardWrapsLoadingView){}
			else {AppRouter.cardWrapsLoadingView = new CardWrapsLoadingView();}
			AppRouter.cardWrapsLoadingView.render();
		});
		
		app_router.on('route:subscribe', function (actions) {
			if(AppRouter.headerView){}
			else {AppRouter.headerView = new HeaderView();}
			AppRouter.headerView.render();
			console.log("rendering in subscribe");
		});
		
		// browser history with HTML5 support
		(function() {
		  var loc = window.location,
			  pushSupport = !!(window.history && window.history.pushState),
			  hashStrip = /^#*/;
		 
		  // add HTML5 support to Backbone.history, drop the old IE stuff
		   _.extend(Backbone.History.prototype, {
		 
			getFragment : function(l) {
			  l = l || window.location;
			  if (pushSupport){
				return l.pathname;
			  } else {
				return l.hash.replace(hashStrip, '');
			  }
			},
		 
			start : function() {
			  if (pushSupport) {
				// modern browsers
				$(window).bind('popstate', this.checkUrl);
			  } else if('onhashchange' in window) {
				// older browsers without pushState support
				if(loc.pathname === "/"){
				  $(window).bind('hashchange', this.checkUrl);
				}else{
				  // automatically redirect browsers to the BB-readable path
				  var hashPath = "/#" + loc.pathname;
				  loc.replace(hashPath);
				  return;
				}
			  }
			  return this.loadUrl();
			},
			saveLocation : function(fragment) {
			  fragment = (fragment || '').replace(hashStrip, '');
			  if (this.fragment == fragment) return;
			  if(pushSupport){
				this.fragment = fragment;
				history.pushState({ts: new Date()}, document.title, loc.protocol + "//" + loc.host + fragment);
			  }else{
				window.location.hash = this.fragment = fragment;
			  }
			}
		 
		  });
		})();
		
		Backbone.history.start();
		//Backbone.history.start({pushState: true});
		//History.pushState(null, null, "found");
	};
	return { 
		initialize: initialize
	};
});


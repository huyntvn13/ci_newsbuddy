// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // Libraries.
    backbone: "libs/backbone",
		underscore: "libs/underscore",
    marionette: "libs/backbone.marionette.min",
    //jquery: "libs/jquery_1.9.0.min.js",
    
    // wreqr, babysister
    wreqr: 'libs/backbone.wreqr',
    babysitter: 'libs/backbone.babysitter',
    
    vent: 'vent',
    app: 'app',
		
		// jquery plugins
		easing: 	"libs/jquery.easing",
    cookie:   "libs/jquery.cookie",
    imagecenter: "libs/jquery.blImageCenter",
    readmore: "libs/jquery.readmore.min",
    throttledebounce: "libs/jquery.ba-throttle-debounce.min",
    timeago: "libs/jquery.timeago",
    
    // bootstrap + plugins
    bootstrap: "libs/bootstrap",
    notify: "libs/bootstrap-notify",
    bootbox: "libs/bootbox.min",
    
    helper: "libs/helper",
    
    // tpl
    tpl:      "libs/tpl",
    
    // routers
    mainRouter: "routers/index",
    
    // controllers
    mainController: "controllers/index",

    // helpers
    newsContentHelper: "libs/newsContentHelper",
  },

  shim: {
    jquery: {
      exports: "jQuery"
    },
    easing: {
      deps: ['jquery'],
    },
    timeago: {
      deps: ['jquery'],
    },
    readmore: {
      deps: ['jquery'],
    },
    cookie: {
      deps: ['jquery'],
    },
    throttledebounce: {
      deps: ['jquery'],
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jQuery',
    },
    notify: {
      deps: ['jquery', 'bootstrap'],
    },
    helper: {
      deps: ['jquery', 'bootstrap', 'notify'],
    },
    bootbox: {
      deps: ['jquery', 'bootstrap'],
      exports: 'bootbox',
    },/*
    tooltip: {
      deps: ['bootstrap'],
    },
    popover: {
      deps: ['bootstrap', 'tooltip'],
    },*/
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    
    wreqr: {
      deps: ["backbone"],
      exports: "Backbone.Wreqr"
    },
    
    babysitter: {
      deps: ["backbone"],
      exports: "Backbone.Babysitter"
    },
  
    // Backbone.Marionette depends on Backbone.
    marionette : {
      deps: ["jquery", "backbone", "wreqr", "babysitter"],
      exports : "Backbone.Marionette"
    }, 
  }

});
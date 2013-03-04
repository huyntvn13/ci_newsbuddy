
// Filename: app.js
// Author: huyntvn13 <huyntvn13.it@gmail.com>

define([
	'jquery', 
	'underscore', 
  'marionette',
  'vent',
  'models/NewsBuddy',
  'models/User',
  'models/Breaking',
  'models/CardWrapSection',
  'collections/CardWrapSectionCollection',
  'views/Header',
  'views/UserIcon',
  'views/Breaking',
  'views/Footer',
  'views/CardsNav',
  'views/CardContainer'
  
], function($, _, Marionette, vent, NewsBuddyModel, UserModel, BreakingModel, CardWrapSectionModel, CardWrapSectionCollection, Header, UserIcon, Breaking, Footer, CardsNav, CardContainer){
  
  // override to set how view's el is attached (prepend, append)
  Marionette.Region.prototype.show = function(view, type){
    this.ensureEl();
    this.close();

    view.render();
    this.open(view, type);

    Marionette.triggerMethod.call(view, "show");
    Marionette.triggerMethod.call(this, "show", view);

    this.currentView = view;
  }
  Marionette.Region.prototype.open = function(view, type){
    if(type == 'prepend'){
      this.$el.prepend(view.el);
    }else if (type =='append'){
      this.$el.append(view.el);
    }else{
      this.$el.html(view.el);
    }
  }
  
  // jquery: get scroll width
  $.scrollbarWidth = function() {
    var parent, child, width;

    if(width===undefined) {
      parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
      child=parent.children();
      width=child.innerWidth()-child.height(99).innerWidth();
      parent.remove();
    }
   return width;
  };
  var scrollbarWidth = $.scrollbarWidth();
  
  // Basics
  Array.max = function( array ){
      return Math.max.apply( Math, array );
  };
  Array.min = function( array ){
     return Math.min.apply( Math, array );
  };
  
  /**********************************************************/
  /*************************** APP **************************/
  /**********************************************************/
	var App = new Marionette.Application();
  window.App = App;
  var animEngine = {};
  
  App.addRegions({
    header          : 'header#header',
    userIcon        : 'li.user.icon',
    breaking        : '#breaking',
    
    footer          : 'footer',
    cardsNav        : '#cards #cards-nav',
    cards           : '#cards',
  });
  
  // Models, Collections
  // app model
  App.appDataModel = new NewsBuddyModel();
  // user model
  App.userModel = new UserModel();
  // breaking model (for alerts, headlines)
  App.breakingModel = new BreakingModel();
  //App.userModel.fetch();
  
  // cardWraps
  App.wraps = new CardWrapSectionCollection();
  var sections = App.appDataModel.get('sections');
  for(i=0; i<sections.length; i++){
    var wrap = new CardWrapSectionModel({
      dataOrder: i,
      sectionName: sections[i],
      subSection: sections[i],
    });
    App.wraps.add(wrap);
  }
  
  App.addInitializer(function(){
    var viewOptions = {
      model : App.appDataModel
    };
    
    // header
    App.header.show(new Header(viewOptions));
    App.userIcon.show(new UserIcon({model: App.userModel}));
    App.breaking.show(new Breaking({model: App.breakingModel}));
    
    // footer
    App.footer.show(new Footer(viewOptions));
    
    // cardsNav
    App.cardsNav.show(new CardsNav(viewOptions));

    //App.appDataModel.fetch();
  });
  
  
  App.listenTo(App.appDataModel, 'change:currentSection', function() {
    // app starting up, dont animate
    if(!App.appDataModel.get('canAnimateFromNowOn')) return;
    
    // it's okie to animate now
    animEngine.animateSectionSwitching();
  });
  
  animEngine.animateSectionSwitching = function(){
    App.appDataModel.set('animatingSectionSwitching', true);
    var animateTo = App.appDataModel.get('currentSection');
    console.log('animating to ' + animateTo + '...');
    // "asdf..." is not a valid section
    if(sections.indexOf(animateTo) == -1){
      App.appDataModel.set('animatingSectionSwitching', false);
      return;
    }
    var animateToElem = $('.card-wrap.' + animateTo);
    
    var leftVal = parseInt(animateToElem.css('left'));
    var visualG = App.appDataModel.get('visualGap')
    var animateToVal = 0 - leftVal + visualG;
    
    var cardContainerElem = $('.card-container');
    cardContainerElem.animate({
				left: animateToVal, 
      }, {
        duration: 500, 
        easing: "easeInOutCubic",
        queue: false,
        complete: function(){
          // check to create loop
          var allLeftVals = [];
          var dataOrders = []; // to retrieve section name of max, min
          $('.card-wrap').each(function(){
              allLeftVals.push(parseInt($(this).css('left')));
              dataOrders.push($(this).attr('data-order'));
          });
          var maxVal = Array.max(allLeftVals);
          var minVal = Array.min(allLeftVals);
          var getNameOfSectionWithDataOrder = function(order){
            var appDataOrders = App.appDataModel.get('sectionsDataOrder');
            for(i=0; i<appDataOrders.length; i++){
              if(appDataOrders[i].order == order){
                console.log("need to move card-wrap: " + appDataOrders[i].name);
                return appDataOrders[i].name;
              }
            }
            console.log('This should not happen, getNameOfSectionWithDataOrder returned with default value');
            return "home"; // THIS SHOULD NOT HAPPEN, default
          }
          if(leftVal == minVal){
            var indexOfMaxVal = allLeftVals.indexOf(maxVal);
            var maxValDataOrder = dataOrders[indexOfMaxVal];
            var maxValSectionName = getNameOfSectionWithDataOrder(maxValDataOrder);
            
            var leftValForMovingCard = leftVal - (App.appDataModel.get('currentCardWidth') + visualG + 100);
            $('.card-wrap.' + maxValSectionName).css('left', leftValForMovingCard + 'px');
            
          }else if(leftVal == maxVal){
            var indexOfMinVal = allLeftVals.indexOf(minVal);
            var minValDataOrder = dataOrders[indexOfMinVal];
            var minValSectionName = getNameOfSectionWithDataOrder(minValDataOrder);
          
            var leftValForMovingCard = leftVal + (App.appDataModel.get('currentCardWidth') + visualG + 100);
            $('.card-wrap.' + minValSectionName).css('left', leftValForMovingCard + 'px');
            
          }else{
            
          }
          
          App.appDataModel.set('animatingSectionSwitching', false);
          
          $.each(App.appDataModel.get('sections'), function(index, sName){
            var wrap = App.wraps.getWrap(sName);
            if(animateTo == sName){ // request data
              wrap.requestSectionData();
            }else { // loading = true
              wrap.set('loading', true);
            }
          });
        }
      }
    ); 
  }
  
  /**********************************************************/
  /************************** VENT **************************/
  /**********************************************************/
  vent.on('newsBuddy:checkToChangeSection',function(section) {
    var currentSection = App.appDataModel.get('currentSection')
    
    if(currentSection == 'null'){ // first time, initializing app
      App.cards.show(new CardContainer({
        collection: App.wraps, 
        model: App.appDataModel,
        initSection: section,
        scrollbarWidth: scrollbarWidth,
      }), 'prepend');
      var wrap = App.wraps.getWrap(section);
      //var fetching = wrap.fetch();
      //fetching.done(function(){
       // alert('aaaaa');
      //});
      wrap.requestSectionData();
    }else {// from second time
      // allow animation while switching between sections
      App.appDataModel.set('canAnimateFromNowOn', true);
    }
    
    if(currentSection != section){ // change section highlight in header
      App.appDataModel.set('currentSection', section);
    }
  });
  
	return App;
  
});

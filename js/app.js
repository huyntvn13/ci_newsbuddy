
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
  'models/OverlayContent',
  'models/OverlaySearchResult',
  'collections/CardWrapSectionCollection',
  'views/NotificationsBottomRight',
  'views/Header',
  'views/UserIcon',
  'views/Breaking',
  'views/Footer',
  'views/CardsNav',
  'views/CardContainer',
  'views/OverlayContent',
  'views/OverlaySearchResult',
  
], function($, _, Marionette, vent, NewsBuddyModel, UserModel, BreakingModel, CardWrapSectionModel, OverlayContentModel, OverlaySearchResultModel, CardWrapSectionCollection, DefaultNotifications, Header, UserIcon, Breaking, Footer, CardsNav, CardContainer, OverlayContent, OverlaySearchResult){
  
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
    notifications   : '#default-notifications-wrapper',
    
    overlay         : '#overlay-container',
    
    searchResult    : '#search-result-container',
    
    cardsNav        : '#cards #cards-nav',
    cards           : '#cards',
    
    footer          : 'footer',
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
    
    // notifications
    App.notifications.show(new DefaultNotifications(viewOptions));

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
          $('.card-wrap.' + animateTo).css('position', '');
        
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
  
  /* Store window scroll position
  */
  var windowOnScroll = function(){
    var scrollValue = $(window).scrollTop();
    if(App.appDataModel.get('showingView') == 'section'){
      App.appDataModel.set('currentScrollTopValue', scrollValue);
      //console.log("updated scrolling value " + scrollValue);
    }
  }
  $(window).scroll( $.debounce( 250, windowOnScroll ) );
  
  /**********************************************************/
  /************************** VENT **************************/
  /**********************************************************/
  vent.on('newsBuddy:checkToChangeSection',function(section, subSection) {
    // check error
    var availableSections = App.appDataModel.get('sections');
    // jquery inArray: found->return index, notFound->return -1
    var checkSectionResult = $.inArray(section, availableSections);
    if(checkSectionResult == -1) {
      App.router.navigate('errors/404', {trigger: true});
      return false;
    }
    // subSection
    if(subSection !== undefined){
      var sections_subSections = App.appDataModel.get('sections_subSections');
      var isValidSubSection = $.inArray(subSection, sections_subSections[section]);
      if(section == 'home' || isValidSubSection == -1){
        App.router.navigate('errors/404', {trigger: true});
        return false;
      }
    }
    
    // update status showingSection, showingNews, showingError
    App.appDataModel.set('showingView', 'section');
  
    // remove Overlay, if being opened
    App.overlay.reset();
    $('#overlay-container').removeClass('show');
    App.searchResult.reset();
    $('#search-result-container').removeClass('show');
    // + display article.cards, again (cause maybe it was hide when we viewed news)
    // + re-enable scrolling
    $('article#cards').css('display', '');
    $('body').removeClass('noscroll');
    
    var currentSection = App.appDataModel.get('currentSection');
    var wrap = App.wraps.getWrap(section);
    // backup old subSection value of this wrap
    var subSectionOldValue = wrap.get('subSection');
    
    var subSectionValue = (subSection === undefined) ? '' : subSection;
    wrap.set('subSection', subSectionValue);
    if(currentSection == 'null'){ // first time, initializing app
      App.cards.show(new CardContainer({
        collection: App.wraps, 
        model: App.appDataModel,
        initSection: section,
        scrollbarWidth: scrollbarWidth,
      }), 'prepend');
      wrap.requestSectionData();
    }else {// from second time
      // allow animation while switching between sections
      App.appDataModel.set('canAnimateFromNowOn', true);
      
      if(subSection !== undefined){ // goto subSection => request subSection
        wrap.set('loading', true);
        wrap.requestSectionData();
      }else { // goto Section (bigSection) 
        // if(currentSection == section) => request Section data
        if(currentSection == section){
          wrap.set('loading', true);
          wrap.requestSectionData();
        }
      }
      
      // scroll to top or not
      if(currentSection != section || (currentSection == section && subSectionValue != subSectionOldValue)){
        $('html, body').animate({
           scrollTop: 0
        }, 0);
      }
    }
    
    if(currentSection != section){ // change section highlight in header
      App.appDataModel.set('currentSection', section);
    }
  });
  
  vent.on('newsBuddy:showNewsOverlay', function(section, subSection, source, title, id) {
    if (App.appDataModel.get('showingView') == 'search') {
      App.appDataModel.set('showingView', 'search_news');
      $('#search-result-container').css('position', 'absolute');
    } else {
      App.appDataModel.set('showingView', 'news');
    }
       
    var newsModel = new OverlayContentModel({
      overlayType: 'news',
      newsID: id,
    });
    var viewOptions = {
      model : newsModel,
      appData: App.appDataModel,
    };
    App.overlay.show(new OverlayContent(viewOptions));
  });
  
  vent.on('newsBuddy:showSearchResult', function(keyword) {
    
    App.appDataModel.set('showingView', 'search');
    $('#search-result-container').addClass('show');
      $('#search-result-container').css('height', '5px');
      $("#search-result-container").animate({
        height: "800px",
        opacity: 1,
      }, 1000 );
      $('article#cards').css('display', 'none');
    App.appDataModel.set('currentSearchKeyword', decodeURIComponent(keyword));
    //alert(decodeURIComponent(keyword));
    var searchModel = new OverlaySearchResultModel({
      keyword: decodeURIComponent(keyword),
    });
    var viewOptions = {
      model : searchModel,
      appData: App.appDataModel,
    };
    App.searchResult.show(new OverlaySearchResult(viewOptions));
    searchModel.requestSearchData();
  });
  
  vent.on('newsBuddy:show404Error', function() {
    App.appDataModel.set('showingView', 'error');
    App.appDataModel.set('errorType', '404');
    
    var errorModel = new OverlayContentModel({
      overlayType: 'error',
    });
    var viewOptions = {
      model : errorModel,
      appData: App.appDataModel,
    };
    App.overlay.show(new OverlayContent(viewOptions));
  });
  
  vent.on('newsBuddy:refreshCurrentSection', function() {
    var currentSection = App.appDataModel.get('currentSection');
    var wrap = App.wraps.getWrap(currentSection);
    wrap.refreshSection();
  });
  
  /*** vent: cardWrapSection ***/
  vent.on('cardWrapSection:restoreNews', function(newsID) {
    var currentSection = App.appDataModel.get('currentSection');
    var wrap = App.wraps.getWrap(currentSection);
    wrap.restoreNews(newsID);
  });
  
	return App;
  
});

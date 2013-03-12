/*global define*/

define(['jquery', 'underscore', 'marionette', 'app', 'templates', 'newsContentHelper', 'readmore', 'throttledebounce'], function ($, _, Marionette, App, templates) {
  "use strict";

  return Marionette.CompositeView.extend({
    tagName   :   'section',
    className :   'card-wrap',
    template  :   templates.cardWrapSection,
    templateHelpers : newsContentHelper,
    

    ui : {
      gridToggleBtn: '.ui-toggle-btn.grid-big',
      listToggleBtn: '.ui-toggle-btn.list-big',
    },
    
    modelEvents: {
      'change:loading': 'loadingStateChanged',
    },
    
    loadingStateChanged: function() {
      var loading = this.model.get("loading");
      if(loading){
        $('head title').html('Loading... - ' + app.appDataModel.get('siteNameFull'));
        this.template = templates.cardWrapSection;
      }else{
        var timeNowObj = new Date($.now()),
        h = timeNowObj.getHours(), // 0-24 format
        m = timeNowObj.getMinutes();
        var hStr = (h>12) ? (h-12): h,
        mStr = (m<10) ? ('0'+m) : m;
        var timeNowStr = hStr + ":" + mStr;
        timeNowStr += (h>=12) ? " pm" : " am";
        this.model.set('updatedTime', timeNowStr);
        
        $('head title').html(this.model.get('data').category.name_requestedSection + ' - ' + app.appDataModel.get('siteNameFull'));
        this.template = templates.cardWrapSectionData;
      }
      this.render();
    },

    initialize : function(options) {
      this.listenTo(this.model, 'change', this.render, this);
      this.cardSizes = options.cardSizes;
      this.minWindowWidth = options.minWindowWidth;
      this.initSection = options.initSection;
      this.scrollbarWidth = options.scrollbarWidth;
      this.appData = options.appData;
      this.sections = this.appData.get('sections');
    },
    
    onBeforeRender: function() {
      var self = this;
      var windowOnResize = function(){
        //var wwidth = parseInt($(document).width()) - parseInt(self.scrollbarWidth);
        var wwidth = parseInt($(document).width());
        if(wwidth >= self.minWindowWidth)
          // re-calculate css of wraps
          self.calculateCSS();
      }
      $(window).resize( $.debounce( 250, windowOnResize ) );
    },

    onRender : function() {
      var self = this;
      console.log("!Notice: after rendering cardWarpSection " + this.model.get('sectionName'));
      
      // switch viewType
      if(this.model.get('viewType') == "grid"){
        this.toGridView();
      }else{ // to list view
        this.toListView();
      }
      
      /*
      $('html, body').animate({
         scrollTop: 0
      }, 0);
      */
      
      var AppCurrentSection = this.appData.get('currentSection');
      if(AppCurrentSection == 'null'){
        this.calculateCSS();
      }
      this.reCalculateCssPositionValue();
      this.$el.addClass(this.model.get('sectionName'));
      
      /*
      this.model.fetch({
        success: function(data) {
          self.onSuccess(data);
        },
        error: function() {
          self.onError();
        }
      });*/
      
      /*
      var data = this.model.get('data');
      if(typeof data != 'undefined'){
        var newsData = data['news'];
        var images = [];
        $(newsData).each(function(idx, news){
          images.push(news['image']);
        });
        
        self.preloadimages(images);
      }*/
      
      //$('.front.tile .image-wrap > img').centerImage();
      $('.front.tile .image-wrap > img').each(function(){
        var thisImgTag = $(this);
        var img = new Image();
        img.src = thisImgTag.data("src");
        img.onload=function(){
          //console.log("++image: " + img.src);
          thisImgTag.attr('src', img.src);
          thisImgTag.centerImage();
          thisImgTag.css('display', 'none');
          thisImgTag.css('display', '');
        }
        img.onerror=function(){
          //console.log("--image: " + img.src);
        }
      });
      
      $('.back.tile p.text').readmore({
        substr_len: $('.back.tile p.text').text().substr(0, 200).lastIndexOf(" "),
        more_link: ""
      });
    },
    
    reCalculateCssPositionValue: function() {
      var canAnimateFromNowOn = this.appData.get('canAnimateFromNowOn');
      if(canAnimateFromNowOn){
        var AppCurrentSection = this.appData.get('currentSection');
        if(AppCurrentSection == this.model.get('sectionName')){
          this.$el.css("position", '');
        }else{
          this.$el.css("position", 'absolute');
        }
      }
    },

    events : {
      'click .ui-toggle-btn.grid-big': 'toggleGridList',
      'click .ui-toggle-btn.list-big': 'toggleGridList',
      'click button.hideBtn': 'hideANews',
    },
    
    hideANews: function(e) {
      var newsID = $(e.currentTarget).data("id");
      
      // remove that news from model.data.news array
      var data = this.model.get('data')
      var foundIdx = -1;
      for(var i=0, len=data.news.length; i<len; i++){
        if(newsID == data.news[i].id){
          foundIdx = i;
          break;
        }
      }
      if(foundIdx != -1){
        data.news.splice(i, 1);
      }
      
      // re-calculate first-column last-column
      for(var i=0, len=data.news.length; i<len; i++){
        var columnText = (i%2==0) ? 'first-column' : 'last-column';
        var columnTextToRemove = (columnText=='last-column') ? 'first-column' : 'last-column';
        var elemID = data.news[i].id;
        var headlineElem = $('.headlines .headline[data-id="'+elemID+'"]');
        if(!headlineElem.hasClass(columnText)){
          headlineElem.removeClass(columnTextToRemove);
          headlineElem.addClass(columnText);
        }
      }
      
      // the DOM elem displaying that news
      var headlineElemSelector = '.headlines .headline[data-id="'+newsID+'"]';
      var headlineElem = $(headlineElemSelector);
      
      if(this.model.get('viewType') == 'grid'){
        headlineElem.css('overflow', 'hidden');
        headlineElem.animate(
        {
          width: '0px',
          height: '0px',
        },
        {
          duration: 200,
          easing: 'linear',
          queue: false,
          complete: function(){
            headlineElem.css('display', 'none');
          }
        });
      }else {
        headlineElem.css({
          'min-height': '0px',
          'overflow': 'hidden',
        });
        headlineElem.animate(
        {
          height: '0',
          'padding-top': '0',
          'padding-bottom': '0',
        },
        {
          duration: 200,
          easing: 'linear',
          queue: false,
          complete: function(){
            headlineElem.css('display', 'none');
          }
        });
      }
    },
    
    toListView: function() {
      this.model.set('viewType', 'list');
      $('.ui-toggle-btn.grid-big').removeClass('active');
      $('.ui-toggle-btn.list-big').addClass('active');
      $('.headlines div.collection').addClass('listview');
      $('.front.tile .image-wrap > img').each(function(){
        var thisImgTag = $(this);
        thisImgTag.centerImage();
      });
    },
    toGridView: function() {
      this.model.set('viewType', 'grid');
      $('.ui-toggle-btn.list-big').removeClass('active');
      $('.ui-toggle-btn.grid-big').addClass('active');
      $('.headlines div.collection').removeClass('listview');
      $('.front.tile .image-wrap > img').each(function(){
        var thisImgTag = $(this);
        thisImgTag.centerImage();
      });
    },
    toggleGridList: function() {
      if($('.ui-toggle-btn.grid-big').hasClass('active')){ 
        // to listview
        this.toListView();
      }else{ 
        // to gridview
        this.toGridView();
      }
    },

    /*
    onSuccess: function(data) {
      console.log("onSuccess...")
    },
    
    onError: function() {
      
    },*/
    calculateCSS: function() {
      var containerCSSLeft =  $(".card-container").css('left');
      if(typeof(containerCSSLeft) == "undefined"){
        containerCSSLeft = 0;
      }else{
        containerCSSLeft = parseInt(containerCSSLeft);
      }
      
      this.$el.attr("style", this.model.get('inlineStyle'));
      //var windowWidth = $(document).width() - this.scrollbarWidth;
      var windowWidth = $(document).width();
      var cardWidth = 0;
      for(i=0; i<this.cardSizes.length; i++){
        var cardSizeObj = this.cardSizes[i];
        if(windowWidth >= cardSizeObj.windowWidth && cardWidth < cardSizeObj.cardWidth){
          cardWidth = cardSizeObj.cardWidth;
        }
      }
      // update cardwidth value (app scope)
      if(this.appData.get('currentCardWidth') != cardWidth)
        this.appData.set('currentCardWidth', cardWidth);
      
      var gap = (windowWidth - cardWidth - this.scrollbarWidth) / 2;
      this.appData.set('visualGap', gap);
      var initLeft = gap - containerCSSLeft;
      
      var self = this;
      var sectionIndex = function(name) {
        return self.sections.indexOf(name);
      }
      
      var distanceFromInitSection = function(){
        var sectionName = self.model.get('sectionName');
        var thisSectionIdx = sectionIndex(sectionName);
        
        var firstSection = self.initSection;
        var firstSectionIdx = sectionIndex(firstSection);
        // if initSection is invalid (doesnt exist in sections array), then make it "home", index = 0
        firstSectionIdx = (firstSectionIdx == -1) ? 0 : firstSectionIdx;
        
        var halfFloor = Math.floor(self.sections.length / 2);
        var halfCeil = Math.ceil(self.sections.length / 2);
        
        var minIdx, maxIdx;
        maxIdx = halfFloor;
        if(halfCeil != halfFloor){
          minIdx = 0 - halfFloor;
        }else{
          minIdx = 1 - halfFloor;
        }
        
        var d = thisSectionIdx - firstSectionIdx;
        if((d >=0 && d <= maxIdx) || (d < 0 && d >= minIdx)){
        
        }else if(d > maxIdx){
          var over = d - maxIdx;
          d = minIdx + (over - 1);
        }else { // d < minIdx
          var over = minIdx - d;
          d = maxIdx - (over - 1);
        }
        
        return d
      }
      
      var distance = distanceFromInitSection();
      var style = "margin: 0; left: " + initLeft + "px;";
      if(distance == 0){
      
      }else{
        var left = initLeft + (cardWidth + gap + 100) * distance;
        style = "margin: 0px; position: absolute; bottom: 0px; left: " + left + "px;";
      }
      
      var tempIndexData = this.appData.get('sectionsDataOrder');
      if(tempIndexData.length < self.sections.length){
        var newObj = { name: self.model.get('sectionName'), order: distance };
        tempIndexData.push(newObj);
        this.appData.set('sectionsDataOrder', tempIndexData);
      }
      this.$el.attr("data-order", distance);
      this.$el.attr("style", style);
      
      // set style "left" of '.card-container' - PARENT OF WRAPS
      var sectionName = this.model.get('sectionName');
      var AppCurrentSection = this.appData.get('currentSection');
      if(AppCurrentSection == sectionName){
        var currentSectionWrapElem = $('.card-wrap.' + AppCurrentSection);
        var currentSectionLeftVal = parseInt(currentSectionWrapElem.css('left'));
        var visualG = this.appData.get('visualGap')
        var cardContainerLeftVal = 0 - currentSectionLeftVal + visualG;
        $('.card-container').css('left', cardContainerLeftVal + "px"); 
        
      }
    },
  });
});
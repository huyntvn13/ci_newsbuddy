/*global define*/

define([
  'jquery',
  'marionette',
  'templates',
  'models/ItemSearchResult',
  'views/ItemSearchResult'
  ], function ($, Marionette, templates, ItemSearchResultModel, ItemSearchResult) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.overlaySearchResult,
    tagName: 'div',
    //id: 'search-result',
    className: 'search-results ui-dark',
    templateHelpers : newsContentHelper,
    
    initialize : function(options) {
      //this.appData = options.appData;
    },

    ui : {
      
    },

    modelEvents: {
      'change:data': 'dataChanged',
    },
    
    dataChanged: function() {
      this.model.set('isLoading', false);
      this.render();
    },

    events: {
			'click .ui-btn.grid-btn': 'toggleGridList',
      'click .ui-btn.list-btn': 'toggleGridList',
      'click .button-add-content': 'getMoreResult'
		},
    
    toListView: function() {
      this.model.set('viewType', 'list');
      $('.ui-btn.grid-btn').removeClass('active');
      $('.ui-btn.list-btn').addClass('active');
      $('.summary').removeClass('grid');
      $('.summary').addClass('list');
      $('.results').removeClass('view-grid');
      $('.results').addClass('view-list');
      $('.search-result-image').each(function(){
        var thisImgTag = $(this);
        thisImgTag.centerImage();
      });
    },
    toGridView: function() {
      this.model.set('viewType', 'grid');
      $('.ui-btn.grid-btn').addClass('active');
      $('.ui-btn.list-btn').removeClass('active');
      $('.summary').addClass('grid');
      $('.summary').removeClass('list');
      $('.results').addClass('view-grid');
      $('.results').removeClass('view-list');
      $('.search-result-image').each(function(){
        var thisImgTag = $(this);
        thisImgTag.centerImage();
      });
    },
    toggleGridList: function() {
      if($('.ui-btn.grid-btn').hasClass('active')){ 
        // to listview
        this.toListView();
      }else{ 
        // to gridview
        this.toGridView();
      }
    },
    
    getMoreResult: function() {
      //$('#search-results-list').append("<div class='more-results'></div>");
      
      $('#loading-more-results').css('display', '');
      var requestValues = {
        keyword: this.model.get('keyword'),
        latest_news_id: app.appDataModel.get('currentLatestNewsId'),
        current_search_page: app.appDataModel.get('currentSearchPage'),
        start: (app.appDataModel.get('currentSearchPage') + 1) * 12,
        limit: 12,
      };
      var apiURL = '/api/search';
      $.ajax({
        url: apiURL,
        type: 'POST',
        dataType: "json",
        data: requestValues,
        success: function(res) {
          $('#loading-more-results').css('display', 'none');
          if(res.error) {
            
          }
          else {            
            var results = res.news;
            var len = results.length;
            for (var i = 0; i<len; i++) {
              var itemSearchModel = new ItemSearchResultModel({
                news: results[i],
                data: res,
              });
              var itemSearchView = new ItemSearchResult({model: itemSearchModel});
              $('#search-results-list').append( itemSearchView.render().el );
            }
            app.appDataModel.set('currentLatestNewsId', res.latest_news_id);
            app.appDataModel.set('currentSearchPage', res.current_search_page);
            console.log(res);
          }
        },
      });
      
    },
    
    onRender: function() {
      if(this.model.get('viewType') == "grid"){
        this.toGridView();
      }else{ // to list view
        this.toListView();
      }
      $('head title').html('Kết quả tìm kiếm "' + this.model.get('keyword') + '" - '+ app.appDataModel.get('siteNameFull'));
    },
  });

});
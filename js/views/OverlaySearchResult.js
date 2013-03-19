/*global define*/

define([
  'jquery',
  'marionette',
  'templates',
  ], function ($, Marionette, templates) {
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
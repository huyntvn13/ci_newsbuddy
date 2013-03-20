
define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      viewType: "grid",
      keyword: "",
      isLoading: true,
    },

    initialize : function() {

    },
    
    url: function() {
      return '/api/search/' + this.get("keyword");
    },
    
    requestSearchData: function() {
      var self = this;
      var requestValues = {
        keyword: self.get('keyword'),
        latest_news_id: app.appDataModel.get('currentLatestNewsId'),
        start: 0,
        limit: (app.appDataModel.get('currentSearchPage') + 1) * 12,
        current_search_page: app.appDataModel.get('currentSearchPage'),
      };
      var apiURL = '/api/search';
      $.ajax({
        url: apiURL,
        type: 'POST',
        dataType: "json",
        data: requestValues,
        success: function(res) { 
          if(res.error) {
            
          }
          else {
            self.set('data', res);
            app.appDataModel.set('currentLatestNewsId', res.latest_news_id);
            //app.appDataModel.set('currentSearchPage', res.current_search_page);
            console.log(res);
          }
        },
      });
    },
  });

});

 /*global define*/

define(['marionette','templates', 'helper', 'vent'], function (Marionette, templates, Helper, vent) {
  "use strict";

  return Marionette.ItemView.extend({
    template : templates.blank,
    tagName: 'div',
    className: 'notifications bottom-right',
    id: 'default-notify', 
    
    modelEvents: {
      //'change': 'modelChanged',
    },
    
    ui : { },
    
    events: {
      'click button.restore-news-btn': 'restoreHiddenNews',
    },
    
    restoreHiddenNews: function(e) {
      var newsID = $(e.currentTarget).data("id");
      
      // send request to server
      var apiURL = '../api/restorenews/' + newsID;
      $.ajax({
        url: apiURL,
        type: 'POST',
        dataType: "json",
        success: function(res) { 
          if(res.result) {
            vent.trigger('cardWrapSection:restoreNews', res.newsID);
          }
          else {
            Helper.showNotification("Đã xảy ra lỗi trong quá trình khôi phục tin!");
          }
        }
      });
    },
    
    onRender: function() { },
  });

});
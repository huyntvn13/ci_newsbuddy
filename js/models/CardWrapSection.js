 
define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){
  'use strict';

  return Backbone.Model.extend({
    defaults : {
  		dataOrder: "0",
      sectionName: "home",
      subSection: "",
      viewType: "grid",
      inlineStyle: "",
      loading: true,
      pageNo: 1,
      numOfPages: 0,
      lastUpdateInTimestamp: 0,
      viewAll: false, // viewAll = true: view like not-logged-in-people
      // "margin: 0px; left: 85px; position: relative; bottom: 0px;"
  	},
    
    url: function() {
      //return '/api/section/' + this.get("subSection");
      return '/api/section/' + this.get("sectionName");
    },
    
    restoreNews: function(newsID, type){
      var visibleNewsArr = this.get('visibleNewsArr');
      var data = this.get('data');
      var foundIdx = -1;
      for(var i=0, len=data.news.length; i<len; i++){
        if(newsID == data.news[i].id){
          foundIdx = i;
          break;
        }
      }
      if(foundIdx != -1){ // found
        visibleNewsArr[foundIdx] = 0;
        if(type == "restorenews"){
          this.set('restoringNews', newsID);
        }else if(type == "undoreadlater") {
          this.set('undoingReadLater', newsID);
        }else{}
      }
    },
    
    refreshSection: function() {
      // reload data then scroll to top
      this.set('loading', true);
      this.requestSectionData(true);
      $('html, body').animate({
         scrollTop: 0
      }, 0);
    },
    
    requestSectionData: function(forced) {
      var self = this;
      
      var updateInterval = App.appDataModel.get("updateInterval");
      var now = new Date();
      var timeElapsed = now.getTime() - self.get("lastUpdateInTimestamp");
      if(timeElapsed > updateInterval || forced){
        console.log("###request: forced=" + forced + " authenticated=" + App.userModel.get('authenticated') + " && viewAll=" + this.get('viewAll'));
        
        var apiURL = '';
        if(this.get('subSection') == ''){
          apiURL = '/api/section/' + this.get('viewAll') + "/" + this.get('sectionName');
        }else {
          apiURL = '/api/section/' + this.get('viewAll') + "/" + this.get('subSection');
        }
        $.ajax({
          url: apiURL,
          type: 'GET',
          dataType: "json",
          success: function(res) { 
            if(res.error) {
              
            }
            else {
              self.set('data', res);
              self.calculateRelatedData();
              self.set('loading', false); // loading status changed => render
              
              // back to page 1
              self.set("pageNo", 1);
              
              //console.log(self.get('data'));
            }
          }
        });
      }else{
        self.set('loading', false); // loading status changed => render
        console.log("###request: No need to request.");
      }
    },
    
    calculateRelatedData: function(){
      var self = this;
      
      // create visible news array
      var visibleNewsArr = [];
      var newsArr = self.get('data').news;
      for(var i=0, len=newsArr.length; i<len; i++){
        var valueToPush = newsArr[i]['user_interact'];
        valueToPush = (valueToPush == null) ? 0 : valueToPush;
        visibleNewsArr.push(parseInt(valueToPush));
      }
      self.set('visibleNewsArr', visibleNewsArr);
      
      //-- updatedTime
      var timeNowObj = new Date($.now());
      self.set('updatedTime', timeNowObj.toISOString());
      // h = timeNowObj.getHours(), // 0-24 format
      // m = timeNowObj.getMinutes();
      // var hStr = (h>12) ? (h-12): h,
      // mStr = (m<10) ? ('0'+m) : m;
      // var timeNowStr = hStr + ":" + mStr;
      // timeNowStr += (h>=12) ? " pm" : " am";
      // this.model.set('updatedTime', timeNowStr);
    
      //-- numOfPages
      var numNewsPerPage = App.appDataModel.get("numNewsPerPage");
      var data = self.get('data');
      var numNews = data["news"].length;
      var numOfPages = Math.ceil(numNews / numNewsPerPage);
      self.set("numOfPages", numOfPages);
      
      //-- store lastUpdateInTimestamp
      self.set("lastUpdateInTimestamp", timeNowObj.getTime());
    },
    
    initialize : function() {
      
    },
  });

});


define(['marionette'],function(Marionette) {
  'use strict';

  return Marionette.AppRouter.extend({
    //Configure an AppRouter with appRoutes
    appRoutes:{
      '': 'index',
      'search/:keyword': 'searchNews',
      ':section/:source/:title/:id': 'viewNews_Section',
      ':section/:subSection/:source/:title/:id': 'viewNews_SubSection',
      'errors/404': 'error404',
      ':section/:subSection': 'handleSubsection',
      ':section*': 'index',
    },
    
    /* standard routes can be mixed with appRoutes/Controllers above
    routes : {
      "some/otherRoute" : "someOtherMethod"
    },
    someOtherMethod : function(){
      // do something here.
    }*/
  });

});
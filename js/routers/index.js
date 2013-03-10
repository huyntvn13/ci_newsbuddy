
define(['marionette'],function(Marionette) {
  'use strict';

  return Marionette.AppRouter.extend({
    //Configure an AppRouter with appRoutes
    appRoutes:{
      '': 'index',
      ':section/:source/:title/:id': 'viewNews',
      ':section/:subsection': 'viewSubsection',
      'errors/404': 'error404',
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
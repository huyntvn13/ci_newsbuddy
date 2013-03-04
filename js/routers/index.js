
define(['marionette'],function(Marionette) {
  'use strict';

  return Marionette.AppRouter.extend({
    //Configure an AppRouter with appRoutes
    appRoutes:{
      '': 'index',
      ':section/:id': 'alert',
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
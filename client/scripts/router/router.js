"use strict";

define([
  "backbone",
  "view/app"
], function(Backbone, appView) {

  var AppRouter = Backbone.Router.extend({

    routes: {
      "": "main"
    },

    main: function() {
      new appView().render();
    }

  });

  return AppRouter;
});


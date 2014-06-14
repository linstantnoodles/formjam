"use strict";

define([
  "views/app"
], function(appView) {

  var AppRouter = Backbone.Router.extend({

    routes: {
      "": "main"
    },

    main: function() {
      new appView().render();
    }

});


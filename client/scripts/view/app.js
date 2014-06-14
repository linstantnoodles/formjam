"use strict"

require([
  "jquery",
  "underscore",
  "handlebars",
  "text!templates/app-view.html"
], function($, _, handlebars, appTemplate) {

  var AppView = new Backbone.View.extend({

    initialize: function() {

    },

    events: {

    },

    render: function() {
      return this;
    }

  });

  return AppView;
});


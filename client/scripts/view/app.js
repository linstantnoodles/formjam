"use strict"

require([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "text!templates/app-view.html"
], function(Backbone, $, _, handlebars, appTemplate) {

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


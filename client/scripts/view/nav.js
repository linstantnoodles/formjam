"use strict"

define([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "text!template/nav.html"
], function(Backbone, $, _, handlebars, workbenchTemplate) {

  var WorkbenchView = Backbone.View.extend({

    el: "#nav",

    template: handlebars.compile(workbenchTemplate),

    initialize: function() {
    },

    openFormBuilder: function() {
    },

    events: {

    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });

  return WorkbenchView;
});


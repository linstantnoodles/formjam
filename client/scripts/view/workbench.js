"use strict"

define([
  "jquery",
  "underscore",
  "handlebars",
  "text!template/workbench.html"
], function($, _, handlebars, workbenchTemplate) {

  var WorkbenchView = Backbone.View.extend({

    el: "#right",

    template: handlebars.compile(workbenchTemplate),

    initialize: function() {

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


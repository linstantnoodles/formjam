"use strict"

define([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "text!template/form-template.html"
], function(Backbone, $, _, handlebars, formTemplate) {

  var FormTemplateView = Backbone.View.extend({

    el: "#right",

    template: handlebars.compile(formTemplate),

    initialize: function() {

    },

    events: {

    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });

  return FormTemplateView;
});


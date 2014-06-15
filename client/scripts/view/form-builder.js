"use strict"

define([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "text!template/form-builder.html"
], function(Backbone, $, _, handlebars, formBuilderTemplate) {

  var FormBuilderView = Backbone.View.extend({

    el: "#right",

    template: handlebars.compile(formBuilderTemplate),

    initialize: function() {

    },

    events: {

    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });

  return FormBuilderView;
});


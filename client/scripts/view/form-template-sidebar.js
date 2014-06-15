"use strict"

define([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "text!template/form-template-sidebar.html"
], function(Backbone, $, _, handlebars, formTemplateSidebarTemplate) {

  var FormTemplateSidebarView = Backbone.View.extend({

    el: "#left",

    template: handlebars.compile(formTemplateSidebarTemplate),

    initialize: function() {
      "click something": "openTemplatePreview"
    },

    openTemplatePreview: function() {

    },

    events: {

    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });

  return FormTemplateSidebarView;
});


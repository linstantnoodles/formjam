"use strict"

define([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "view/form-template-sidebar",
  "view/nav",
  "view/form-builder",
  "view/form-template",
  "model/form-template"
], function(Backbone, $, _, handlebars,
  formTemplateSidebarView, navView, formBuilderView,
  formTemplateView, formTemplateModel) {

  var AppView = Backbone.View.extend({

    el: "#app",

    events: {
      "click #create-form": "openFormBuilder",
      "click .left-sidebar a": "openTemplatePreview"
    },

    openFormBuilder: function() {
      new formBuilderView({"model": new formTemplateModel()}).render();
    },

    openTemplatePreview: function(e) {
      e.preventDefault();
      // Do a search for the right model
      new formTemplateView({"model": new formTemplateModel()}).render();
    },

    render: function() {
      new navView().render();
      new formTemplateSidebarView().render();
      return this;
    }

  });

  return AppView;
});


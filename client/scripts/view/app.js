"use strict"

define([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "view/form-template-sidebar",
  "view/nav",
  "view/form-builder",
  "model/form-template"
], function(Backbone, $, _, handlebars,
  formTemplateSidebarView, navView, formBuilderView, formTemplateModel) {

  var AppView = Backbone.View.extend({

    el: "#app",

    events: {
      "click #create-form": "openFormBuilder"
    },

    openFormBuilder: function() {
      new formBuilderView({"model": new formTemplateModel()}).render();
    },

    render: function() {
      new navView().render();
      new formTemplateSidebarView().render();
      return this;
    }

  });

  return AppView;
});


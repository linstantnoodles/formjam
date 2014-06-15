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
  "model/form-template",
  "collection/form-template"
], function(Backbone, $, _, handlebars,
  formTemplateSidebarView, navView, formBuilderView,
  formTemplateView, formTemplateModel, formTemplateCollection) {

  var AppView = Backbone.View.extend({

    el: "#app",

    events: {
      "click #create-form": "openFormBuilder",
      "click .left-sidebar a": "openTemplatePreview"
    },

    openFormBuilder: function() {
      new formBuilderView({model: new formTemplateModel()}).render();
    },

    openTemplatePreview: function(e) {
      e.preventDefault();
      var $link = this.$(e.target);
      var linkId = $link.data("id");
      // Do a search for the right model
      new formTemplateView({
        model: this.templateList.get(linkId)
      }).render();
    },

    render: function() {
      new navView().render();
      this.templateList = new formTemplateCollection();
      new formTemplateSidebarView({
        collection: this.templateList
      }).render();
      return this;
    }

  });

  return AppView;
});


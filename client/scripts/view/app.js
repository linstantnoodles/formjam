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

    currentBuilder: null,

    openFormBuilder: function() {
      if (this.currentBuilder) {
        this.currentBuilder.remove();
      }
      this.currentBuilder = new formBuilderView({model: new formTemplateModel()});
      this.$("#right").html(this.currentBuilder.render().el);
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
      this.currentBuilder = new formBuilderView({model: new formTemplateModel()});
      this.$("#right").html(this.currentBuilder.render().el);

      return this;
    }

  });

  return AppView;
});


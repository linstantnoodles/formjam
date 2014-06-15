"use strict"

define([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "view/form-template-sidebar",
  "view/workbench",
  "view/nav",
  "view/form-builder"
], function(Backbone, $, _, handlebars,
  formTemplateSidebarView, workbenchView, navView, formBuilderView) {

  var AppView = Backbone.View.extend({

    el: "#app",

    events: {
      "click #create-form": "openFormBuilder"
    },

    openFormBuilder: function() {
      new formBuilderView().render();
    },

    render: function() {
      new navView().render();
      new formTemplateSidebarView().render();
      return this;
    }

  });

  return AppView;
});


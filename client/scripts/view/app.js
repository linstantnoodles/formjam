"use strict"

define([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "view/form-template-sidebar",
  "view/workbench"
], function(Backbone, $, _, handlebars,
  formTemplateSidebarView, workbenchView) {

  var AppView = Backbone.View.extend({

    el: "#main-content",

    initialize: function() {
      // nothing
    },

    events: {

    },

    render: function() {
      new formTemplateSidebarView().render();
      new workbenchView().render();
      return this;
    }

  });

  return AppView;
});


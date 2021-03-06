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
      this.listenTo(this.collection, "reset", this.render);
      this.listenTo(this.collection, "add", this.render);
      this.collection.fetch({reset: true});
      setInterval(_.bind(this.collection.fetch, this.collection), 3000);
    },

    render: function() {
      var models = this.collection.models;
      var templates = _.map(models, function(model) {
        return model.attributes;
      });
      this.$el.html(this.template({
        templates: templates
      }));
      return this;
    }

  });

  return FormTemplateSidebarView;
});


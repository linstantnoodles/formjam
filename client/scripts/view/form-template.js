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

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }

  });

  return FormTemplateView;
});


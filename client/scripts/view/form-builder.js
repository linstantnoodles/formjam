"use strict"

/**
 * Configure a form template
 */

// adding a field
// saving the form
// having a title
define([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "text!template/form-builder.html",
  "view/form-template-view/input-element"
], function(Backbone, $, _, handlebars,
  formBuilderTemplate, inputElementView) {

  var FormBuilderView = Backbone.View.extend({

    el: "#right",

    /**
     * Main template
     */

    template: handlebars.compile(formBuilderTemplate),

    initialize: function() {
    },

    events: {
      "click .add-field": "addInputField",
      "click .save-form": "saveForm"
    },

    /**
     * Add an input field
     */

    addInputField: function() {
      var $fields = this.$(".fields");
      var newField = new inputElementView({
        model: this.model
      }).render().el;
      $fields.append(newField);
    },

    /**
     * Save to server
     */

    saveForm: function() {
      this.model.save();
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });

  return FormBuilderView;
});


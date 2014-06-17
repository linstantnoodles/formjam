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

    /**
     * Main template
     */

    template: handlebars.compile(formBuilderTemplate),

    events: {
      "click .add-field": "addInputField",
      "click #save-form": "saveForm"
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
      var title = this.$(".form-title input[type=text]").val();
      var $inputs = this.$(".fields input");
      var that = this;
      var fields = [];
      $inputs.each(function(i) {
        var val = $(this).val();
        fields.push(val);
      });
      this.model.set("title", title);
      this.model.set("config", this.model.convertToJson(fields));
      this.model.save();
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });

  return FormBuilderView;
});


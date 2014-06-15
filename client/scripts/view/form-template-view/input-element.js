"use strict"

/**
 * View for individual fields
 */

define([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "text!template/form-template-component/input-element.html"
], function(Backbone, $, _, handlebars, inputElementTemplate) {

  var InputElementView = Backbone.View.extend({

    template: handlebars.compile(inputElementTemplate),

    events: {
      "click .save-field": "saveInputField"
    },

    /**
     * Save an input field
     */

    saveInputField: function(e) {
      var $input = this.$("input[type=text]");
      var fieldName = $input.val();
      // Save to model
      this.model.saveInputField(fieldName);
      // Remove save button
      this.$(".save-field").remove();
      // Update label
      this.$("label").text(fieldName);
      // Disable text field
      this.$("input[type=text]")
        .val("")
        .attr("disabled", "disabled");
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });

  return InputElementView;
});


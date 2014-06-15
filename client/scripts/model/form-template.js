"use strict"

/**
 * Form configuration
 *
 * {
 *  "title": "something"
 *  "fields": {
 *      "name": {
 *        "type": "input",
 *        "value": "",
 *        "location": {
 *          "x": 100,
 *          "y": 200,
 *          "h": 300,
 *          "w": 400
 *        }
 *      }
 *   }
 * }
 */

require([
  "backbone",
  "jquery"
], function(Backbone, $) {

  var FormTemplateModel = Backbone.Model.extend({

    defaults: {
      "title": "Untitled",
      "config": {
        "title": "Untitled",
        "fields": {
        }
      }
    },

    addInputField: function() {
      console.log("adding in model");
    }

  });

  return FormTemplateModel;
});


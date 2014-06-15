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

define([
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

    saveInputField: function(fieldName) {
      console.log("Saving input to model");
      var obj = this.get("config");
      obj["fields"][fieldName] = {};
      obj["fields"][fieldName]["type"] = "input";
      obj["fields"][fieldName]["value"] = "";
      // Set location values
      obj["fields"][fieldName]["value"] = 100;
      obj["fields"][fieldName]["value"] = 200;
      obj["fields"][fieldName]["value"] = 300;
      obj["fields"][fieldName]["value"] = 400;
      this.set("config", obj);
    },

    url: "/templates"

  });

  return FormTemplateModel;
});


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
      title: "Untitled",
      config: '{"fields":""}'
    },

    convertToJson: function(fieldNames) {
      var obj = {
        fields: {}
      };
      for (var i = 0; i < fieldNames.length; i++) {
        obj.fields[fieldNames[i]] = {
          type: "input",
          value: "",
          x: 0,
          y: 0,
          h: 0,
          w: 0
        };
      }
      return obj;
    },

    url: "/templates"

  });

  return FormTemplateModel;
});


"use strict"

require([
  "backbone",
  "jquery"
], function(Backbone, $) {

  var FormTemplateModel = Backbone.Model.extend({

    defaults: {
      "title": "Untitled"
    }

  });

  return FormTemplateModel;
});


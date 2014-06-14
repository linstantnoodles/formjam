"use strict"

require([
  "jquery"
], function($) {

  var FormTemplateModel = new Backbone.Model.extend({

    defaults: {
      "title": "Untitled"
    }

  });

  return FormTemplateModel;
});


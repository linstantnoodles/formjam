"use strict"

require([
  "jquery",
  "model/form-template"
], function($, formTemplateModel) {

  var FormTemplateCollection = new Backbone.Collection.extend({

    model: formTemplateModel,

    url: "/templates"

  });

  return FormTemplateCollection;
});


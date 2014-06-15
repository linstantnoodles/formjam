"use strict"

define([
  "backbone",
  "jquery",
  "model/form-template"
], function(Backbone, $, formTemplateModel) {

  var FormTemplateCollection = Backbone.Collection.extend({

    model: formTemplateModel,

    url: "/templates"

  });

  return FormTemplateCollection;
});


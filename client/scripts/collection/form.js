"use strict"

require([
  "backbone",
  "jquery",
  "model/form"
], function($, formModel) {

  var FormCollection = Backbone.Collection.extend({

    model: formModel,

    url: "/forms"

  });

  return FormCollection;
});


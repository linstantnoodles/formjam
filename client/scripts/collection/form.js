"use strict"

require([
  "jquery",
  "model/form"
], function($, formModel) {

  var FormCollection = new Backbone.Collection.extend({

    model: formModel,

    url: "/forms"

  });

  return FormCollection;
});


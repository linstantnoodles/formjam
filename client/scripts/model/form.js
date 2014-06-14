"use strict"

require([
  "backbone",
  "jquery"
], function(Backbone, $) {

  var FormModel = Backbone.Model.extend({

    defaults: {
      "img_uri": "http://i1103.photobucket.com/albums/g468/xionnn/jackie-chan-meme1.jpg"
    }

  });

  return FormModel;
});


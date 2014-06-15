"use strict"

define([
  "backbone",
  "jquery",
  "underscore",
  "handlebars",
  "text!template/form-template.html",
  "dropzone"
], function(Backbone, $, _, handlebars, formTemplate, dropzone) {

  var FormTemplateView = Backbone.View.extend({

    el: "#right",

    template: handlebars.compile(formTemplate),

    events: {
      "click .upload": "uploadFormImage"
    },

    initialize: function() {
      handlebars.registerHelper('genForm', function(config) {
        var json = JSON.parse(config);
        var fields = json.fields;
        var keys = Object.keys(fields);
        if (keys.length < 1) {
          return new handlebars.SafeString("<p>No fields exist!</p>");
        }
        var results = "";
        for (var i = 0; i < keys.length; i++) {
          var labelName = keys[i];
          results += "<label>" + labelName + "</label>" + "<input type='text' name='val' disabled/>";
        }
        return new handlebars.SafeString(results);
      });
    },

    postInit: function() {
      var templateId = this.model.get("id");
      $("#my-awesome-dropzone").dropzone({
        url: "/form/" + templateId + "/upload"
      });
    },

    uploadFormImage: function() {
      var $file = this.$("input[type=file]");
      console.log($file.val());
      // grab the value of the file
      // post using ajax as multipart
    },

    render: function() {
      console.log(this.model.attributes);
      this.$el.html(this.template(this.model.attributes));
      this.postInit();
      return this;
    }

  });

  return FormTemplateView;
});


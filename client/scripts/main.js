/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        handlebars: {
          exports: "Handlebars"
        },
        bootstrap: {
          deps: ["jquery"]
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars',
        text: "../bower_components/requirejs-text/text",
        bootstrap: "../bower_components/bootstrap/dist/js/bootstrap",
        dropzone: "../bower_components/dropzone/downloads/dropzone-amd-module"
    }
});

require([
  'backbone',
  'router/router'
], function (Backbone, router) {
    new router();
    Backbone.history.start();
});

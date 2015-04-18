"use strict";


var App = function() {};
_.extend(App.prototype, Backbone.Events);

App.prototype.start = function() {
  this.model = new (require('./model'));

  this.map = new (require('./map'))({
    el: $('#map').get(0),
    model: this.model,
    app: this
  });

  this.controls = new (require('./controls'))({
    el: $('aside.tools').get(0),
    model: this.model,
    app: this
  });

  this.map.render();
  this.controls.render();

  // kick-off!
  this.model.fetch();
};



$(function() {
  console.log('Starting app...');

  (window.app = new App()).start();
});



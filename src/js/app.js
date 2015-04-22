"use strict";

_.mixin(require('./underscore_mixins'));


var App = function() {};
_.extend(App.prototype, Backbone.Events);

App.prototype.start = function() {
  this.model = new (require('./model'));

  this.nav = new (require('./navBar'))({
    el: $('nav.topbar').get(0),
    model: this.model,
    app: this
  });

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

  this.nav.render();
  this.map.render();
  this.controls.render();

  // kick-off!
  // this.controls.refetchData();
};



$(function() {
  console.log('Starting app...');

  (window.app = new App()).start();
});



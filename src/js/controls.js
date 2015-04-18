module.exports = Backbone.View.extend({
  initialize: function(attrs) {
    Backbone.View.prototype.initialize.call(this);

    this.app = attrs.app;
  },

  render: function() {
  }

});
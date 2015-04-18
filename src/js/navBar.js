module.exports = Backbone.View.extend({
  elements: {
    '.loader': 'loader',
  },

  initialize: function(attrs) {
    var self = this;

    this.refreshElements();

    this.app = attrs.app;

    this.listenTo(this.model, "change:state", function(model, val) {
      self.render({
        progress: (val === 'fetching')
      })
    });
  },

  render: function(options) {
    this.$loader.show(!!options.progress);
  }
});
module.exports = Backbone.View.extend({
  elements: {
    '.loading': 'loader',
    'a.about': 'aboutButton'
  },

  initialize: function(attrs) {
    var self = this;

    this.app = attrs.app;

    this.refreshElements();
    this.$aboutButton.on('click', function() {

    });

    this.listenTo(this.model, "change:fetching-search", function(model, val) {
      self.render({
        progress: (val === true)
      })
    });
  },

  render: function(values) {
    values = values || {};

    if (values.progress) {
      this.$loader.show();
    } else {
      this.$loader.hide();      
    }
  }
});
module.exports = Backbone.View.extend({
  elements: {
    '.count': 'count',
    '.count span.number': 'countNumber',
    '.loading': 'loader',
  },

  initialize: function(attrs) {
    var self = this;

    this.refreshElements();

    this.app = attrs.app;

    this.listenTo(this.model, "change:fetching-search", function(model, val) {
      self.render({
        progress: (val === true)
      })
    });

    this.listenTo(this.model, "change:data", function(model, data) {
      self.render({
        count: data.length
      });
    });
  },

  render: function(values) {
    values = values || {};

    if (values.progress) {
      this.$loader.show();
      this.$count.hide();
    } else {
      this.$loader.hide();      
      this.$count.show();
    }

    if (undefined !== values.count) {
      this.$countNumber.text(values.count);
    }

  }
});
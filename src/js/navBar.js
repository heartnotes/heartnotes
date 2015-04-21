module.exports = Backbone.View.extend({
  elements: {
    '.count': 'count',
    '.count .number': 'countNumber',
    '.count .sub': 'countSub',
    '.count .mappable': 'countSubMappable',
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

    this.listenTo(this.model, "change:data", function(model, items) {
      var mappable = items.reduce(function(memo, v) {
        return memo + (v.latlng ? 1 : 0);
      }, 0);

      self.render({
        total: items.length,
        mappable: mappable,
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

    if (undefined !== values.total) {
      this.$countNumber.text(values.total);

      if (values.mappable < values.total) {
        this.$countSub.show();
        this.$countSubMappable.text(values.mappable);
      } else {
        this.$countSub.hide();        
      }
    }

  }
});
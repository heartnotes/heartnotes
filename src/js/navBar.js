module.exports = Backbone.View.extend({
  elements: {
    '.loading': 'loader',
    'a.about': 'aboutButton',
    'section.about': 'aboutSection',
  },

  initialize: function(attrs) {
    var self = this;

    this.app = attrs.app;

    this.refreshElements();

    this.$aboutButton.on('click', function(e) {
      e.preventDefault();

      self.$aboutSection.toggle(400);
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
module.exports = Backbone.View.extend({
  initialize: function(attrs) {
    Backbone.View.prototype.initialize.call(this);

    this.app = attrs.app;
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var self = this;

    if (!self.map) {
      self.$window = $(window);

      var _resizeMap = function() {
        // ensure map fills window
        self.$el.height(self.$window.height() - $('nav.topbar').height());    
      };
      _resizeMap();

      // if window size changes resize the map
      self.$window.resize(_resizeMap);

      self.mapOptions = {
        center: { lat: 39.5, lng: -108.35 },
        zoom: 4
      };

      self.map = new google.maps.Map(self.$el.get(0), self.mapOptions);
    }
  }

});
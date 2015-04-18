module.exports = Backbone.View.extend({
  initialize: function(attrs) {
    var self = this;

    this.app = attrs.app;
    this.listenTo(this.model, "change:data", function(model, data) {
      self.render((data && data.items) || []);
    });
  },

  render: function(items) {
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

      self.map = new google.maps.Map(self.$el.get(0), {
        center: new google.maps.LatLng( 39.5, -108.35 ),
        zoom: 4
      });
    }

 
    if (items) {
      if (self.mapMarkers) {
        self.mapMarkers.clearMarkers();
      }

      var markers = items.map(function(v) {
        return new google.maps.Marker({
          position: new google.maps.LatLng(v.latlng.lat, v.latlng.lng),
          map: self.map,
        });
      });

      // self.mapMarkers = new MarkerClusterer(map, markers, {
      //   gridSize: 50, 
      //   maxZoom: 15
      // });
    }
  }

});
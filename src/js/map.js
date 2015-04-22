var usaLatLngData = require('us_latlng_json');

module.exports = Backbone.View.extend({
  initialize: function(attrs) {
    var self = this;

    self.app = attrs.app;

    self.items = [];

    this.listenTo(this.model, "change:data", function(model, data) {
      self.items = data;

      self.render();
    });

    self.renderMarkers = _.bind(self.renderMarkers, self);
  },



  render: function(options) {
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

      // create map
      self.map = L.map(self.$el.attr('id'), {
        zoom: 1,
        zoomControl: false,
        center: [41.5, -130.35],
      });

      // add an OpenStreetMap tile layer
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          reuseTiles: true,
      }).addTo(self.map);      

      // on zoom update markers
      self.map.on('zoomend', self.renderMarkers);
    }

    self.renderMarkers(options);
  },


  renderMarkers: function(options) {
    var self = this;

    // map marker group
    if (!self.mapMarkers) {
      self.mapMarkers = new L.MarkerClusterGroup();
      self.map.addLayer(self.mapMarkers);
    }

    // remove previous markers
    self.mapMarkers.clearLayers();

    self.items.forEach(function(item) {
      if (!item.latlng) {
        return;
      }

      self.mapMarkers.addLayer(
        L.circleMarker([ item.latlng.lat, item.latlng.lng ])
      );
    });
  }

});
module.exports = Backbone.View.extend({
  initialize: function(attrs) {
    var self = this;

    this.app = attrs.app;
    this.listenTo(this.model, "change:data", function(model, data) {
      self.render(data);
    });

    this.markerClustererStyles = [
      {
        textColor: 'white',
        url: 'img/crosshair_red.png',
        height: 50,
        width: 50
      },
     {
        textColor: 'white',
        url: 'img/crosshair_red.png',
        height: 50,
        width: 50
      },
     {
        textColor: 'white',
        url: 'img/crosshair_red.png',
        height: 50,
        width: 50
      }
    ];
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
        center: new google.maps.LatLng( 39.5, -118.35 ),
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });
    }

 
    if (items) {
      if (self.mapClusterer) {
        self.mapClusterer.clearMarkers();
      }

      self.mapMarkers = [];
      var unableToMap = [];

      items.forEach(function(v) {
        if (!v.latlng) {
          return unableToMap.push(v);
        }

        self.mapMarkers.push(
          new google.maps.Marker({
            position: new google.maps.LatLng(v.latlng.lat, v.latlng.lng),
            icon: 'img/crosshair_red.png'
          })
        );
      });

      self.mapClusterer = new MarkerClusterer(self.map, self.mapMarkers, {
        styles: this.markerClustererStyles,
      });

      if (unableToMap.length) {
        console.log('Unable to map ' + unableToMap.length + ' items');
      }
    }
  }

});
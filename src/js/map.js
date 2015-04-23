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

    self.mapPopupTemplate = _.template($('#mapPopup').html(), {
      interpolate: /\{\{(.+?)\}\}/g,
    });
  },



  render: function() {
    var self = this;
    
    if (!self.map) {
      self.$window = $(window);

      var _resizeMap = function() {
        // ensure map fills window
        self.$el.height(self.$window.height() - $('nav.topbar').height() - 10);    
      };
      _resizeMap();

      // if window size changes resize the map
      self.$window.resize(_resizeMap);

      // create map
      self.map = L.map(self.$el.attr('id'), {
        zoom: 3,
        zoomControl: false,
        center: [41.5, -110.35],
      });

      // zoom control in top-right
      L.control.zoom({
        position: 'bottomright'
      }).addTo(self.map);

      // tile layer
      L.tileLayer(
        'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
          reuseTiles: true,
          maxZoom: 11,
        }
      ).addTo(self.map);
    }

    self.renderMarkers();
  },


  renderMarkers: function() {
    var self = this;

    // map marker group
    if (!self.mapMarkers) {
      self.mapMarkers = new L.MarkerClusterGroup({
        iconCreateFunction: self.markerClusterIconCreateFunction,
        maxClusterRadius: 90,
        spiderfyDistanceMultiplier: 1.2,
        polygonOptions: {
          color: '#ff6f00'
        }
      });
      self.map.addLayer(self.mapMarkers);
    }

    // remove previous markers
    self.mapMarkers.clearLayers();

    self.items.forEach(function(item) {
      if (!item.latlng) {
        return;
      }

      if (!self.markerIcon) {
        self.markerIcon = {};
        ['killed', 'wounded', 'unknown'].forEach(function(outcome) {
          self.markerIcon[outcome] = L.icon({
            iconUrl: 'img/outcome_' + outcome + '.svg',
            iconSize: [30, 30],
            popupAnchor: [0, -3],
          });
        });
      }

      var marker = L.marker([ item.latlng.lat, item.latlng.lng ], {
        icon: self.markerIcon[item.outcome]
      });

      marker.on('click', function() {
        var popup = L.popup()
          .setLatLng([item.latlng.lat, item.latlng.lng])
          .setContent(self.mapPopupTemplate(item))
          .openOn(self.map);
      });

      self.mapMarkers.addLayer(marker);
    });

    mixpanel.track("data rendered");
  },


  markerClusterIconCreateFunction: function(cluster) {
    var sizeCssClass = 'normal',
      clusterSize = cluster.getChildCount();

    if (10 > clusterSize) {
      sizeCssClass = 'small';
    } else if (50 > clusterSize) {
      sizeCssClass = 'medium';
    } else if (100 > clusterSize) {
      sizeCssClass = 'large'
    } else if (200 > clusterSize) {
      sizeCssClass = 'x-large'
    } else {
      sizeCssClass = 'xx-large'
    }

    return new L.DivIcon({ html: '<div class="map-cluster-marker ' + sizeCssClass + '"><span>' + cluster.getChildCount() + '</span></div>' });
  },




});
module.exports = Backbone.View.extend({
  elements: {
    '#filter-victim-age': 'victimAgeSlider',
    '#filter-victim-age-lower': 'victimAgeLower',
    '#filter-victim-age-upper': 'victimAgeUpper',
  },

  initialize: function(attrs) {
    var self = this;
    
    this.refreshElements();
    this.app = attrs.app;
  },


  _linkDualSliderToInputs: function($slider, $lower, $upper) {
    var self = this;

    $slider.on('change', function() {
      var val = $slider.val();

      $lower.val(parseInt(val[0]));
      $upper.val(parseInt(val[1]));

      self.refetchData();
    });

    $lower.on('change', function() {
      $slider.val([$lower.val(), null]);

      self.refetchData();
    });

    $upper.on('change', function() {
      $slider.val([null, $upper.val()]);

      self.refetchData();
    });
  },


  refetchData: function() {
    var self = this;

    var params = {
      victim: {
        age: {
          lower: parseInt(self.$victimAgeLower.val()),
          upper: parseInt(self.$victimAgeUpper.val()),
        }
      }
    };

    self.model.fetch(params);
  },


  render: function(values) {
    values = values || {};

    var self = this;

    if (!self.controlsSetup) {
      self.controlsSetup = true;

      self.$victimAgeSlider.noUiSlider({
        start: [1, 100],
        step: 1,
        connect: true,
        range: {
          'min': 1,
          'max': 100
        },
      });
      
      self._linkDualSliderToInputs(self.$victimAgeSlider, self.$victimAgeLower, self.$victimAgeUpper);
    }

  }

});
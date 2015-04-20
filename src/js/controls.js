module.exports = Backbone.View.extend({
  elements: {
    '#filter-victim-age': 'victimAgeSlider',
    '#filter-victim-age-unknown': 'victimAgeUnknown',
    '#filter-victim-age-lower': 'victimAgeLower',
    '#filter-victim-age-upper': 'victimAgeUpper',
    'input[name=filter-victim-gender]': 'victimGender',
    'input[name=filter-victim-armed]': 'victimArmed',
    'input[name=filter-victim-outcome]': 'victimOutcome',
  },

  initialize: function(attrs) {
    var self = this;
    
    this.refreshElements();
    this.app = attrs.app;

    self.refetchData = _.bind(self.refetchData, self);
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


  _getMultiCheckboxValue: function($checkBox) {
    return $checkBox.filter(':checked').map(function(cb) {
      return $(this).val();
    });
  },


  refetchData: function() {
    var self = this;

    var params = {
      victim: {
        age: {
          lower: parseInt(self.$victimAgeLower.val()),
          upper: parseInt(self.$victimAgeUpper.val()),
          includeUnknown: !!self.$victimAgeUnknown.is(':checked')
        },
        gender: self._getMultiCheckboxValue(self.$victimGender),
        armed: self._getMultiCheckboxValue(self.$victimArmed),
        outcome: self._getMultiCheckboxValue(self.$victimOutcome),
      }
    };

    self.model.fetch(params);

    // get field info 
    if (!self.fieldInfo) {
      self.model.on('change:fieldInfo', function(model, info) {
        self.fieldInfo = info;

        self.render();
      });

      self.model.fetchFieldInfo();      
    }
  },


  render: function(values) {
    values = values || {};

    var self = this;

    if (!self.controlsSetup) {
      self.controlsSetup = true;

      // victim age
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

      // age unknown
      self.$victimAgeUnknown.on('change', self.refetchData);

      // victim gender and armed
      self.$victimGender.on('change', self.refetchData);
      self.$victimArmed.on('change', self.refetchData);
      self.$victimOutcome.on('change', self.refetchData);

      // victim race
      
    }

    if (self.fieldInfo) {
      console.log(self.fieldInfo);
    }
  }

});
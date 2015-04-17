$(function() {
  "use strict";
  
  // ensure map fills window
  var mapElem = $('#map'),
    $window = $(window);

  var _resizeMap = function() {
    mapElem.height($window.height() - $('nav.topbar').height());    
  };
  _resizeMap();

  // if window size changes resize the map
  $window.resize(_resizeMap);

  var mapOptions = {
    center: { lat: 39.5, lng: -108.35 },
    zoom: 4
  };

  var map = new google.maps.Map($('#map').get(0), mapOptions);
});

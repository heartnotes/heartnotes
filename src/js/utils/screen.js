import _ from 'lodash';


export function getScreenDetails() {
  let widthLabel,
      widthPixels,
      pixelDensity,
      isRetina;

  let widths = {
    '$width-xxs': 500,
    '$width-xs': 728,
    '$width-s': 970,
    '$width-m': 1024,
    '$width-l': 1200
  }

  if (typeof window != "undefined") {
    widthPixels = window.widthPixels;
    pixelDensity = window.devicePixelRatio;
  } else {
    widthPixels = 1200;
    pixelDensity = 1;
  }
  
  if(widthPixels <= 500) {
    widthLabel = '$width-xxs'
  } else if (widthPixels <= 728) {
    widthLabel = '$width-xs'
  } else if (widthPixels <= 970) {
    widthLabel = '$width-s'
  } else if (widthPixels <= 1024) {
    widthLabel = '$width-m'
  } else if (widthPixels <= 1200) {
    widthLabel = '$width-l'
  }

  isRetina = pixelDensity > 1.5;

  return {
    widthPixels: widthPixels,
    widthLabel: widthLabel,
    widthThresholds: widths,
    pixelDensity: pixelDensity,
    isRetina: isRetina,
    isExtraSmallScreen: (0 <= _.indexOf(
      ['$width-xs', 'width-xxs'], 
      widthLabel
    ))
  };
};



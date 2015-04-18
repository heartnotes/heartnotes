exports.deepGet = function(obj, path, fallbackValue) {
  if (undefined === obj || null === obj) {
    return fallbackValue;
  }

  var fields = path.split('.'),
    result = obj;

  for (var i=0; i<fields.length; ++i) {
    if ('object' !==  typeof result) {
      return fallbackValue;
    }

    result = result[fields[i]];
  }

  return result || fallbackValue;
};
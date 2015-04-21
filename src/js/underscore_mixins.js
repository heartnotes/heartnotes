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



// Based on https://github.com/neilco/twix/blob/master/twix.js
var Ajax = exports.Ajax = function() {};

Ajax.request = function(options) {
    options = options || {url:""};
    options.type = options.type || 'GET';
    options.headers = options.headers || {};
    options.timeout = parseInt(options.timeout) || 0;
    options.success = options.success || function() {};
    options.error = options.error || function() {};
    options.async = typeof options.async === 'undefined' ? true : options.async;

    var client = new XMLHttpRequest();
    if (options.timeout > 0) {
        client.timeout = options.timeout;
        client.ontimeout = function () { 
            options.error('timeout', 'timeout', client); 
        }
    }
    client.open(options.type, options.url, options.async);

    for (var i in options.headers) {
        if (options.headers.hasOwnProperty(i)) {
            client.setRequestHeader(i, options.headers[i]);
        }
    }
    
    client.send(options.data);
    client.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            var contentType = this.getResponseHeader('Content-Type');
            if (contentType && contentType.match(/json/)) {
                data = JSON.parse(this.responseText);
            }
            options.success(data, this.statusText, this);
        } else if (this.readyState == 4) {
            options.error(this.status, this.statusText, this);
        }
    };

    if (options.async == false) {
        if (client.readyState == 4 && client.status == 200) {
            options.success(client.responseText, client);
        } else if (client.readyState == 4) {
            options.error(client.status, client.statusText, client);
        }
    } 

    return client;
};

Ajax.get = function(url, data, callback) {
    if (typeof data === "function") {
        callback = data;
        data = undefined;
    }
    
    return Ajax.request({
        url: url,
        data: data, 
        success: callback
    });
};

Ajax.post = function(url, data, callback) {
    if (typeof data === "function") {
        callback = data;
        data = undefined;
    }
    
    return Ajax.request({
        url: url,
        type: 'POST',
        data: data, 
        success: callback
    });
};
  

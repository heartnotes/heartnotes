module.exports = Backbone.Model.extend({
  initialize: function() {
    Backbone.Model.prototype.initialize.call(this);

    this.worker = new Worker("worker.js");
    this.worker.addEventListener('message', _.bind(this.onWorkerResponse, this));

    // used to track request progress
    this._fetchMeta = {};
  },

  fetch: function(params) {
    this._fetch('search', params);
  },


  fetchFieldInfo: function() {
    this._fetch('fieldInfo');
  },


  _fetch: function(type, params) {
    var self = this;

    self._fetchMeta[type] = self._fetchMeta[type] || {};

    clearTimeout(self._fetchMeta[type].timeout);

    // guard how soon we fetch after the previous fetch
    self._fetchMeta[type].timeout = setTimeout(function() {
      // notify of state change
      var setData = {};
      setData['fetching-' + type] = true;
      self.set(setData);

      // if multiple fetches are made in succession we need to know to know which 
      // result from the worker is for the latest fetch
      self._fetchMeta[type].id = '' + Math.random() * 10000000;

      self.worker.postMessage({
        type: type,
        id: self._fetchMeta[type].id,
        params: params,
      });
    }, 200);
  },


  onWorkerResponse: function(e) {
    var self = this;

    var response = e.data;

    if (response.error) {
      return self.set({
        error: response.error
      });
    }

    var type = response.type;

    if (response.id != this._fetchMeta[type].id) {
      console.debug('Ignoring old reponse');

      return;
    }

    // clear current request id 
    delete this._fetchMeta[type].id;

    switch (type) {
      case 'fieldInfo':
        this.set({
          fieldInfo: response.results
        });
        break;
      case 'search':
        // notify observers
        this.set({
          data: response.results
        });
        break;

    }

    // state change
    setTimeout(function() {
      // if new request hasn't been initiated
      if (!self._fetchMeta[type].id) {        
        // clear state
        var setData = {};
        setData['fetching-' + type] = false;
        self.set(setData);
      }
    }, 200);
  }
});

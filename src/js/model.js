module.exports = Backbone.Model.extend({
  initialize: function() {
    Backbone.Model.prototype.initialize.call(this);

    this.worker = new Worker("worker.js");
    this.worker.addEventListener('message', _.bind(this.onWorkerResponse, this));
  },

  fetch: function(params) {
    var self = this;

    clearTimeout(self._fetchTimeout);

    // guard how soon we fetch after the previous fetch
    self._fetchTimeout = setTimeout(function() {
      // notify of state change
      self.set({
        state: 'fetching'
      });

      // if multiple fetches are made in succession we need to know to know which 
      // result from the worker is for the latest fetch
      self.currentRequestId = '' + Math.random() * 10000000;

      self.worker.postMessage({
        id: self.currentRequestId,
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

    if (response.id != this.currentRequestId) {
      console.debug('Ignoring old reponse');

      return;
    }

    // clear current request id 
    delete this.currentRequestId;

    // notify observers
    this.set({
      data: response.results
    });

    // state change
    setTimeout(function() {
      // if new request hasn't been initiated
      if (!self.currentRequestId) {
        // clear state
        self.set({
          state: 'ready'
        });
      }
    }, 200);
  }
});

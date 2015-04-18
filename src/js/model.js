module.exports = Backbone.Model.extend({
  initialize: function() {
    Backbone.Model.prototype.initialize.call(this);

    this.worker = new Worker("worker.js");
    this.worker.addEventListener('message', _.bind(this.onWorkerResponse, this));
  },

  fetch: function(options) {
    var self = this;

    clearTimeout(self._fetchTimeout);

    // guard how soon we fetch after the previous fetch
    self._fetchTimeout = setTimeout(function() {
      self.set({
        state: 'fetching'
      });

      // if multiple fetches are made in succession we need to know to know which 
      // result from the worker is for the latest fetch
      self.currentRequestId = '' + Math.random() * 10000000;

      self.worker.postMessage({
        id: self.currentRequestId,
        params: options,
      });
    }, 200);
  },

  onWorkerResponse: function(e) {
    var response = e.data;

    if (response.id != this.currentRequestId) {
      console.debug('Ignoring old reponse');

      return;
    }

    this.set({
      fetching: false,
      data: response.results
    });
  }
});

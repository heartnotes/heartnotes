var React = require('react');


var Icon = require('../../components/icon'),
  Button = require('../../components/button');


module.exports = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func.isRequired,
    isActive: React.PropTypes.bool.isRequired,
  },

  render: function() { 
    var progressMsg = "Loading diary...";

    var loadingError = null;
    if (this.props.loadEntriesError) {
      progressMsg += 'failed!';

      var msg = this.props.loadEntriesError.toString();

      loadingError = (
        <div>
          <div className="error">
            <Icon name="exclamation-triangle" tooltip={msg} />
          </div>
          <Button size="xs" color="dark" onClick={this._goBack}>Back</Button>
        </div>
      );
    }

    return (
      <div className="load-diary step">
        <p>{progressMsg}</p>
        {loadingError}
      </div>
    );
  },


  componentDidUpdate: function(oldProps) {
    if (!this.props.isActive) {
      return;
    }

    // if just became active then kick-off entry loading
    if (!oldProps.isActive) {
      this.props.flux.getActions('user').loadEntries();
    }
  },

  _goBack: function() {
    this.props.showStep('start');
  },

});


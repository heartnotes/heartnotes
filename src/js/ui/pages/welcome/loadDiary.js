var React = require('react');


var Icon = require('../../components/icon'),
  Button = require('../../components/button');


module.exports = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      showStep: null,
    };
  },

  render: function() { 
    var progressMsg = "Loading diary...";

    var loadingError = null;
    if (this.props.loadEntriesError) {
      progressMsg += 'failed!';

      var msg = this.props.loadEntriesError.toString();

      loadingError = (
        <div className="error">
          <Icon name="exclamation-triangle" tooltip={msg} />
        </div>
      );
    }

    return (
      <div className="load-diary step">
        <p>{progressMsg}</p>
        {loadingError}
        <Button size="xs" color="dark" onClick={this._goBack}>Back</Button>
      </div>
    );
  },

  componentDidMount: function() {
    this.props.flux.getActions('user').loadEntries();
  },

  _goBack: function() {
    this.props.showStep('start');
  },

});


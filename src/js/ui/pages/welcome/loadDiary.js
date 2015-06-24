var React = require('react');


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
    var loadingError = 
      (this.props.loadEntriesError ? this.props.loadEntriesError.toString() : null);

    return (
      <div className="load-diary step">
        <div>Loading diary</div>
        {loadingError}
      </div>
    );
  },

  componentDidMount: function() {
    this.props.flux.getActions('entry').reloadAll();
  },

});


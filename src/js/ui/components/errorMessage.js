import React from 'react';

module.exports = React.createClass({
  propTypes: {
    error: React.PropTypes.object.isRequired,
  },

  render() {
    return (
      <div className="error-message">{'' + this.props.error}</div>
    );
  }
});


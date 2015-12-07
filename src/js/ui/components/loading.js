import React from 'react';

import Icon from './icon';


module.exports = React.createClass({
  render: function() {
    return (
      <span className="loading">
        <Icon name="cog" spin={true} />
        <span className="text">{this.props.text}</span>
      </span>
    );
  },
});




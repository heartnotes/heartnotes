import React from 'react';

import Icon from './icon';


module.exports = React.createClass({
  render: function() {
    let text = !this.props.text ? null : (
      <span className="text">{this.props.text}</span>
    );

    return (
      <span className="loading">
        <Icon name="cog" spin={true} />
        {text}        
      </span>
    );
  },
});




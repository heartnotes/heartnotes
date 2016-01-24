import _ from 'lodash';
import React from 'react';

import IconButton from './iconButton';


module.exports = React.createClass({
  getInitialState: function() {
    return {
      open: false,
    };
  },

  render: function() {
    let itemClasses = {
      items: true,
      open: !!this.state.open,
    };

    return (
      <div className="dropdown-menu">
        <IconButton 
          icon="down-arrow" 
          onClick={this._toggleMenu} 
          tooltip="Toggle menu" />
        <div className={Classnames(itemClasses)}>
          {this.props.children}
        </div>
      </div>
    );
  },

  _toggleMenu: function() {
    this.setState({
      open: !this.state.open,
    });
  },

});


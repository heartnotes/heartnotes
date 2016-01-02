import React from 'react';

import IconButton from './iconButton';
import { routing } from '../helpers/decorators';



var Component = React.createClass({
  render: function() {
    var items = [
      {
        icon: 'plus',
        route: '/newEntry',
        desc: 'Add entry',
      },
      {
        icon: 'search',
        route: '/entries',
        desc: 'View timeline',
      },
    ];

    var primaryLinks = items.map(function(item) {
      return (
        <IconButton 
          key={item.icon}
          icon={item.icon} 
          onClick={this._goRoute(item)} 
          tooltip={item.desc} />
      );
    }, this);


    return (
      <div className="main-menu">
        {primaryLinks}
      </div>
    );
  },


  _goRoute: function(item) {
    return () => {
      this.props.history.navigate(item.route);
    };
  },

});


module.exports = routing()(Component);


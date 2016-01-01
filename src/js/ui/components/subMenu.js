var React = require('react');

var IconButton = require('./iconButton');


import { connectRedux, routing } from '../helpers/decorators';


var Component = React.createClass({
  render: function() {
    var items = [
      {
        icon: 'gear',
        action: this._showSettings,
        desc: 'Settings',
      },
      {
        icon: 'eject',
        action: this._closeDiary,
        desc: 'Logout',
      },
    ];

    var buttons = items.map(function(item) {
      return (
        <IconButton icon={item.icon} onClick={item.action} tooltip={item.desc} />
      );
    }, this);

    return (
      <div className="sub-menu">
        {buttons}
      </div>
    );
  },


  _closeDiary: function() {
    this.props.actions.closeDiary();
  },


  _showSettings: function() {
    this.props.history.navigate('/settings');
  },
});


module.exports = connectRedux([
  'closeDiary'
])(routing()(Component));


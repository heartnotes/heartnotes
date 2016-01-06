import _ from 'lodash';
var React = require('react');

var IconButton = require('./iconButton');

import AttentionIcon from './attentionIcon';
import { connectRedux, routing } from '../helpers/decorators';


var Component = React.createClass({
  render: function() {
    let { diaryMgr } = this.props.data.diary;

    let attentionIcon = !diaryMgr.auth.subscriptionActive ? <AttentionIcon /> : null;

    var items = [
      {
        icon: 'wrench',
        action: this._showSettings,
        desc: 'Settings',
        attention: attentionIcon,
      },
      {
        icon: 'eject',
        action: this._closeDiary,
        desc: 'Logout',
      },
    ];


    var buttons = items.map(function(item) {
      return (
        <IconButton 
          attention={item.attention}
          key={item.icon}
          icon={item.icon} 
          onClick={item.action} 
          tooltip={item.desc} />
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


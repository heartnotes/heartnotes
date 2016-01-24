import _ from 'lodash';
import React from 'react';

import IconButton from './iconButton';
import Dropdown from '/dropdown';
import AttentionIcon from './attentionIcon';
import { connectRedux, routing } from '../helpers/decorators';


var Component = React.createClass({
  propTypes: {
    dropdown: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      dropdown: false,
    };
  },

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
        icon: 'comment',
        action: this._giveFeedback,
        desc: 'Feedback',
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

    if (this.props.dropdown) {
      buttons = (
        <Dropdown>{buttons}</Dropdown>
      );
    }

    return (
      <div className="sub-menu">
        {buttons}
      </div>
    );
  },


  _closeDiary: function() {
    this.props.actions.closeDiary();
  },


  _giveFeedback: function() {
    this.props.history.navigate('/feedback');
  },


  _showSettings: function() {
    this.props.history.navigate('/settings');
  },
});


module.exports = connectRedux([
  'closeDiary'
])(routing()(Component));


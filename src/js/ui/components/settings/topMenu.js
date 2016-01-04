import _ from 'lodash';
import React from 'react';
import Classnames from 'classnames';

import { routing } from '../../helpers/decorators';
import Button from '../button';
import AttentionIcon from '../attentionIcon';


const ITEMS = [
  {
    id: 'account',
    route: '/settings',
    desc: 'Account',
    attention: function() {
      let subActive = !!_.get(this.props.data, 'diaryMgr.auth.subscriptionActive');

      return (!subActive) ? <AttentionIcon /> : null;
    },
  },
  {
    id: 'backupRestore',
    route: '/settings/backupRestore',
    desc: 'Backup / Export',
  },
  {
    id: 'help',
    route: '/settings/help',
    desc: 'Help',
  },
];




var Tab = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    active: React.PropTypes.bool,
    attention: React.PropTypes.object,
  },

  render: function() {
    let classes = {
      'menu-tab': true,
      active: !!this.props.active,
      attention: null,
    };

    let attention = null;
    if (this.props.attention) {
      attention = (
        <div className="attention">{this.props.attention}</div>
      );
    }

    return (
      <div className={Classnames(classes)} onClick={this._onClick}>
        {attention}
        {this.props.item.desc}
      </div>
    );
  },

  _onClick: function() {
    this.props.onSelect(this.props.item);
  },
});



var Component = React.createClass({
  propTypes: {
    tab: React.PropTypes.string,
  },

  render: function() {
    var primaryLinks = ITEMS.map((item) => {
      let attention = null;

      if (item.attention) {
        attention = item.attention.call(this);
      }

      return (
        <Tab 
          key={item.id}
          item={item} 
          active={item.id === this.props.tab} 
          attention={attention}
          onSelect={this._onSelect} />
      );
    });


    return (
      <div className="settings-top-menu">
        {primaryLinks}
      </div>
    );
  },


  _onSelect: function(item) {
    this.props.history.navigate(item.route);
  },

});


module.exports = routing()(Component);


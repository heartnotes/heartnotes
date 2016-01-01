import React from 'react';
import Classnames from 'classnames';

import { routing } from '../../helpers/decorators';
import Button from '../button';


const ITEMS = [
  {
    id: 'account',
    route: '/settings',
    desc: 'Account',
  },
  {
    id: 'backupRestore',
    route: '/settings/backupRestore',
    desc: 'Backup / Restore',
  },
  {
    id: 'exportData',
    route: '/settings/exportData',
    desc: 'Export',
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
  },

  render: function() {
    let classes = {
      'menu-tab': true,
      active: !!this.props.active,
    };

    return (
      <div className={Classnames(classes)} onClick={this._onClick}>
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
      return (
        <Tab 
          key={item.id}
          item={item} 
          active={item.id === this.props.tab} 
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


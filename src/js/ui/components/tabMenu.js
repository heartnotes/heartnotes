import _ from 'lodash';
import React from 'react';
import Classnames from 'classnames';



var Tab = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    active: React.PropTypes.bool,
    attention: React.PropTypes.object,
  },

  render: function() {
    let classes = {
      'tab': true,
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
        {this.props.data.desc}
      </div>
    );
  },

  _onClick: function() {
    this.props.onSelect(this.props.data);
  },
});



module.exports = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    selectedItem: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    className: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      className: null,
    }
  },

  render: function() {
    let { items, className, selectedItem } = this.props;

    var primaryLinks = [];

    items.forEach((item) => {
      let attention = null;

      if (item.showIf) {
        if (!item.showIf.call(this)) {
          return;
        }
      }

      if (item.attention) {
        attention = item.attention.call(this);
      }

      primaryLinks.push(
        <Tab 
          key={item.id}
          data={item} 
          active={item.id === this.props.selectedItem} 
          attention={attention}
          onSelect={this.props.onSelect} />
      );
    });

    let classes = Classnames('tab-menu', className);

    return (
      <div className={classes}>
        {primaryLinks}
      </div>
    );
  },


});

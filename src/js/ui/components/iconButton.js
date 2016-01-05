var React = require('react'),
  Classnames = require('classnames');

import $ from 'jquery';


var Icon = require('./icon');


module.exports = React.createClass({
  propTypes: {
    icon : React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    tooltip: React.PropTypes.string,
    className: React.PropTypes.string,
    attention: React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      onClick: null,
      tooltip: null,
      className: null,
      attention: null,
    };
  },

  render: function() {
    var classes = {
      'btn': true,
      'icon-button': true,
    };

    if (this.props.className) {
      classes[this.props.className] = true;
    }

    let { attention } = this.props;
    if (attention) {
      attention = (
        <span className="attention">{attention}</span>
      );
    }

    return (
      <button 
        className={Classnames(classes)} 
        onClick={this._onClick} 
        title={this.props.tooltip}>
          {attention}
          <Icon name={this.props.icon} />
      </button>
    );
  },


  _onClick: function(e) {
    e.preventDefault();
    $(e.currentTarget).blur();

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

});



var React = require('react'),
  Classnames = require('classnames');

import $ from 'jquery';


var Icon = require('./icon');


module.exports = React.createClass({
  propTypes: {
    icon : React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
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
      'icon-link': true,
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
      <a 
        href="#"
        className={Classnames(classes)} 
        onClick={this._onClick} 
        title={this.props.tooltip}
        type="button">
          {attention}
          <Icon name={this.props.icon} />
          <span>{this.props.text}</span>
      </a>
    );
  },


  _onClick: function(e) {
    if (e) {
      e.preventDefault();
      $(e.currentTarget).blur();
    }

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

});



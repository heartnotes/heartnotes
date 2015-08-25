var React = require('react'),
  Classnames = require('classnames');


var Icon = require('./icon');


module.exports = React.createClass({
  propTypes: {
    icon : React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    tooltip: React.PropTypes.string,
    className: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      onClick: null,
      tooltip: null,
      className: null,
    };
  },

  render: function() {
    var classes = {
      'btn': true,
      'icon-button': true,
    };

    classes[this.props.className] = true;

    return (
      <button className={Classnames(classes)} onClick={this.props.onClick} title={this.props.tooltip}>
        <Icon name={this.props.icon} />
      </button>
    );
  },

});



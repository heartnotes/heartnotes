var React = require('react');


var Icon = require('./icon');


module.exports = React.createClass({
  propTypes: {
    icon : React.PropTypes.string,
    onClick: React.PropTypes.func,
    tooltip: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      icon : '',
      onClick: null,
      tooltip: '',
    };
  },

  render: function() {
    return (
      <button className="icon-button" onClick={this.props.onClick}
          title={this.props.tooltip}>
        <Icon name={this.props.icon} />
      </button>
    );
  },

});



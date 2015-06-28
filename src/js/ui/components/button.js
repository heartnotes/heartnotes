var React = require('react');

var LaddaButton = require('react-ladda');


module.exports = React.createClass({
  propTypes: {
    onClick : React.PropTypes.func,
    animActive : React.PropTypes.bool,
    animStyle: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      onClick: null,
      animActive: false,
      animStyle: 'expand-right',
    };
  },

  render: function() {
    return (
      <LaddaButton active={this.props.animActive} style={this.props.animStyle}>
        <button onClick={this.props.onClick}>{this.props.children}</button>
      </LaddaButton>
    );
  },

});



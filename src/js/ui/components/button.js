var React = require('react');

var LaddaButton = require('react-ladda');


module.exports = React.createClass({
  propTypes: {
    onClick : React.PropTypes.func,
    disabled : React.PropTypes.bool,
    animActive : React.PropTypes.bool,
    animStyle: React.PropTypes.string,
    color: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      onClick: null,
      disabled: false,
      animActive: false,
      animStyle: 'expand-right',
      color: '',
    };
  },

  render: function() {
    var buttonAttrs = {};

    if (this.props.disabled) {
      buttonAttrs.disabled = true;
    }

    return (
      <LaddaButton 
        color={this.props.color}
        active={this.props.animActive} 
        style={this.props.animStyle}>
        <button onClick={this.props.onClick} {...buttonAttrs}>
          {this.props.children}
        </button>
      </LaddaButton>
    );
  },

});



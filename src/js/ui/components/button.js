var React = require('react');

var LaddaButton = require('react-ladda');


module.exports = React.createClass({
  propTypes: {
    onClick : React.PropTypes.func,
    disabled : React.PropTypes.bool,
    animActive : React.PropTypes.bool,
    animStyle: React.PropTypes.string,
    color: React.PropTypes.string,
    size: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      onClick: null,
      disabled: false,
      animActive: false,
      animStyle: 'zoom-in',
      color: '',
      size: 'm',
    };
  },

  render: function() {
    var buttonAttrs = {
      onClick: this.props.onClick,
    };

    if (this.props.disabled) {
      buttonAttrs.disabled = true;
    }

    return (
      <LaddaButton 
        buttonColor={this.props.color}
        loading={this.props.animActive} 
        buttonStyle={this.props.animStyle}
        buttonSize={this.props.size}
        {...buttonAttrs}>
          {this.props.children}
      </LaddaButton>
    );
  },

});



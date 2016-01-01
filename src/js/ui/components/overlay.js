var React = require('react'),
  moment = require('moment'),
  Classnames = require('classnames');

import IconButton from './iconButton';


module.exports = React.createClass({
  propTypes: {
    onClick : React.PropTypes.func,
    onClose: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      onClick: null,
      onClose: null,
    };
  },

  getInitialState: function() {
    return {
      show: false,
    };
  },

  render: function() {
    var classes = Classnames({
      overlay: true,
      shown: this.state.show
    });

    let closeButton = null;

    if (this.props.onClose) {
      closeButton = (
        <IconButton 
          className="close-overlay" 
          icon='close' 
          onClick={this.props.onClose} 
          tooltip="Cancel" />
      );
    }

    return (
      <div className={classes} onClick={this._clicked}>
        {closeButton}
        {this.props.children}
      </div>
    );
  },

  _clicked: function() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  },

  isShown: function() {
    return !!this.state.show;
  },

  show: function() {
    if (this.isMounted()) {
      this.setState({
        show: true,
      });
    }
  },

  hide: function() {
    if (this.isMounted()) {
      this.setState({
        show: false,
      });
    }
  },

});



var React = require('react'),
  moment = require('moment'),
  Classnames = require('classnames');

import IconButton from './iconButton';


module.exports = React.createClass({
  propTypes: {
    onClick : React.PropTypes.func,
    onCancel: React.PropTypes.func,
    showCancelButton: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      onClick: null,
      onCancel: null,
      showCancelButton: false,
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

    if (this.props.showCancelButton) {
      closeButton = (
        <IconButton 
          className="close-overlay" 
          icon='close' 
          onClick={this._onCancel} 
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

  _onCancel: function() {
    this.hide();
    
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  },

});



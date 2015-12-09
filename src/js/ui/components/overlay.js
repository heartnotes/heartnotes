var React = require('react'),
  moment = require('moment'),
  Classnames = require('classnames');


module.exports = React.createClass({
  propTypes: {
    onClick : React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      onClick: null,
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

    return (
      <div className={classes} onClick={this._clicked}>
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



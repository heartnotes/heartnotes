var $ = require('jquery');
var _  = require('lodash');
var React = require('react');


var Popup = require('./popup');



module.exports = React.createClass({
  propTypes: {
    name : React.PropTypes.string,
    tooltip : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      name : '',
      tooltip : null,
    };
  },

  getInitialState: function() {
    return {
      showPopup: false,
    };
  },

  render: function() {
    var icon = (
      <i ref="icon" className={"icon-widget fa fa-" + this.props.name} />
    );

    if (this.props.tooltip) {
      return (
        <Popup msg={this.props.tooltip} show={this.state.showPopup}>
          {icon}
        </Popup>
      );
    } else {
      return icon;
    }
  },

  componentDidMount: function() {
    this.$icon = $(React.findDOMNode(this.refs.icon));
    
    this.$icon.off('mouseover').on('mouseover', this._showPopup);
    this.$icon.off('mouseout').on('mouseout', this._hidePopup);
  },


  _showPopup: function() {
    if (this.isMounted()) {
      this.setState({
        showPopup: true
      });
    }
  },


  _hidePopup: function() {
    if (this.isMounted()) {
      this.setState({
        showPopup: false
      });
    }
  },


});



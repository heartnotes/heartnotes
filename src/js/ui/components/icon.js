var $ = require('jquery');
var _  = require('lodash');
var React = require('react');
var Classnames = require('classnames');


var Popup = require('./popup');



module.exports = React.createClass({
  propTypes: {
    name : React.PropTypes.string,
    spin: React.PropTypes.bool,
    tooltip : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      name : '',
      spin: false,
      tooltip : null,
    };
  },

  getInitialState: function() {
    return {
      showPopup: false,
    };
  },

  render: function() {
    let classes = {
      'icon-widget': true,
      fa: true,
      'fa-spin': !!this.props.spin,
    };

    classes[`fa-${this.props.name}`] = true;

    var icon = (
      <i ref="icon" className={Classnames(classes)} />
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



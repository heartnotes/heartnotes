var React = require('react');

var moment = require('moment');

var Pikaday = require('pikaday');

var IconButton = require('./iconButton'),
  Overlay = require('./overlay');


module.exports = React.createClass({
  propTypes: {
    onSelect : React.PropTypes.func.isRequired,
    tooltip : React.PropTypes.string,
    date : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      tooltip: 'Pick date',
      date: null,
    };
  },


  render: function() {
    return (
      <span className="date-picker">
        <input type="hidden" ref="field" />
        <IconButton 
          onClick={this._togglePicker}
          icon="calendar" 
          tooltip={this.props.tooltip}/>
        <Overlay ref="overlay" />
      </span>
    );
  },

  componentDidMount: function() {
    let date = this.props.date || new Date();

    this.datePicker = new Pikaday({ 
      firstDay: 1,
      field: React.findDOMNode(this.refs.field),
      container: React.findDOMNode(this.refs.overlay),
      onClose: this._hide,
      onSelect: this.props.onSelect,
      defaultDate: date,
      maxDate: date,
      setDefaultDate: true,
    });
  },

  componentDidUpdate: function(oldProps) {
    if (this.props.date !== oldProps.date) {
      let date = moment(this.props.date || new Date());

      this.datePicker.setDate(date.format('YYYY-MM-DD'), true);
    }

    this.datePicker.adjustPosition();
  },

  componentWillUnmount: function() {
    if (this.datePicker) {
      this.datePicker.destroy();
    }
  },

  _togglePicker: function() {
    if (!this.datePicker.isVisible()) {
      this._show();
    } else {
      this._hide();
    }
  },

  _show: function() {
    this.refs.overlay.show();
    this.datePicker.show();
  },

  _hide: function() {
    this.refs.overlay.hide();
    this.datePicker.hide();
  },

});



          

var React = require('react');

var moment = require('moment');

var DateTime = require('react-datetime');

var Button = require('./button'),
  IconButton = require('./iconButton'),
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

  getInitialState: function() {
    return {
      date: this.props.date || new Date(),
    };
  },

  render: function() {
    return (
      <span className="date-time-picker">
        <IconButton 
          onClick={this._togglePicker}
          icon="calendar" 
          tooltip={this.props.tooltip}/>
        <Overlay ref="overlay" showCancelButton={true}>
          <DateTime
            value={this.state.date}
            dateFormat="MMMM Do, YYYY"
            timeFormat="HH:mm"
            input={false}
            open={true} 
            onChange={this._onChange}/>
          <Button onClick={this._onDone}>Done</Button>
        </Overlay>
      </span>
    );
  },

  _togglePicker: function() {
    if (!this.refs.overlay.isShown()) {
      this._show();
    } else {
      this._hide();
    }
  },

  _show: function() {
    this.refs.overlay.show();
  },

  _hide: function() {
    this.refs.overlay.hide();
  },

  _onChange: function(date) {
    this.setState({
      date: date,
    });
  },

  _onDone: function() {
    this._hide();

    let date = moment(this.state.date).toDate();

    this.props.onSelect(date);
  },

});



          

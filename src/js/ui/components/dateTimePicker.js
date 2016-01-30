var React = require('react');

var moment = require('moment');

var DateTime = require('react-datetime');

var Button = require('./button'),
  IconButton = require('./iconButton'),
  Overlay = require('./overlay');


module.exports = React.createClass({
  propTypes: {
    onSelect : React.PropTypes.func.isRequired,
    button: React.PropTypes.object,
    showButton: React.PropTypes.bool,
    tooltip : React.PropTypes.string,
    date : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      tooltip: 'Pick date',
      button: null,
      showButton: true,
      date: null,
    };
  },

  getInitialState: function() {
    return {
      date: this.props.date || new Date(),
    };
  },

  render: function() {
    let btn = null;

    if (this.props.showButton) {
      btn = this.props.button || (
        <IconButton 
          icon="calendar" 
          tooltip={this.props.tooltip}/>
      );

      btn = React.cloneElement(btn, {
        onClick: this._togglePicker
      });
    }

    return (
      <span className="date-time-picker">
        {btn}
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
      this.show();
    } else {
      this.hide();
    }
  },

  show: function() {
    this.refs.overlay.show();
  },

  hide: function() {
    this.refs.overlay.hide();
  },

  _onChange: function(date) {
    this.setState({
      date: date,
    });
  },

  _onDone: function() {
    this.hide();

    let date = moment(this.state.date).toDate();

    this.props.onSelect(date);
  },

});



          

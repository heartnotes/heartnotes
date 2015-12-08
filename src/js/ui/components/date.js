var React = require('react');

var moment = require('moment');


module.exports = React.createClass({
  propTypes: {
    format : React.PropTypes.string,
    date : React.PropTypes.object,
    className: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      format : 'MMMM DD, YYYY',
      date: new Date(),
      className: '',
    };
  },

  render: function() {
    let str = moment(this.props.date).format(this.props.format);

    return (
      <span className={`date ${this.props.className}`}>{str}</span>
    );
  },

});



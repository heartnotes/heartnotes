var React = require('react');

var moment = require('moment');


module.exports = React.createClass({
  propTypes: {
    format : React.PropTypes.string,
    date : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      format : 'MMMM DD, YYYY',
      date: new Date(),
    };
  },

  render: function() {
    var str = moment(this.props.date).format(this.props.format);

    return (
      <span className="date">{str}</span>
    );
  },

});



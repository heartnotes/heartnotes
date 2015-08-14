var React = require('react'),
  Classnames = require('classnames');



module.exports = React.createClass({
  propType: {
    msg: React.PropTypes.string,
    type: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      msg: null,
      type: 'info',
    };
  },

  render: function() {
    let msg = this.props.msg;

    let classes = {
      notification: true
    };

    classes.on = !!msg;
    classes.off = !classes.on;

    classes[this.props.type] = true;

    return (
      <div className={Classnames(classes)}>{msg}</div>
    );
  },
});



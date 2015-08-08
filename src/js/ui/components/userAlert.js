var React = require('react'),
  Classnames = require('classnames');



module.exports = React.createClass({
  propType: {
    msg: React.PropTypes.string,
  },

  render: function() {
    let msg = this.props.msg;

    let classes = {
      notification: true
    };

    classes.on = !!msg;
    classes.off = !classes.on;

    return (
      <div className={Classnames(classes)}>{msg}</div>
    );
  },
});



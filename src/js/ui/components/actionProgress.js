var _ = require('lodash');
var Classnames = require('classnames');

var React = require('react');



module.exports = React.createClass({
  propTypes: {
    msg : React.PropTypes.object,
    centered: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      msg: null,
      centered: true,
    };
  },


  render: function() {   
    let classes = Classnames('msg', {
      shown: !!this.props.msg,
      centered: !!this.props.centered,
    });

    return (
      <span className='action-progress'>
        <span className="children">{this.props.children}</span>
        <span className={classes}>{this.props.msg}</span>
      </span>
    );
  },

});


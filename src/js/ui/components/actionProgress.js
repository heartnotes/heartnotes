var $ = require('jquery');
var _ = require('lodash');
var Classnames = require('classnames');

var React = require('react');



module.exports = React.createClass({
  propTypes: {
    msg : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      msg: null,
    };
  },


  render: function() {   
    let classes = Classnames('msg', {
      shown: !!this.props.msg,
    });

    return (
      <span className='action-progress'>
        <span className="children">{this.props.children}</span>
        <span className={classes}>{this.props.msg}</span>
      </span>
    );
  },

});


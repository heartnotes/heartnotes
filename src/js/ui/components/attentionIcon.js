var _  = require('lodash');
var React = require('react');


import Icon from './icon';


module.exports = React.createClass({
  propTypes: {
    tooltip : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      tooltip : null,
    };
  },


  render: function() {
    return (
      <Icon 
        className="attention-icon"
        name="info-circle" 
        {...this.props} />
    );
  },
});



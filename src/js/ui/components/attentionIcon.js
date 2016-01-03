var _  = require('lodash');
var React = require('react');


import Icon from './icon';


module.exports = React.createClass({
  render: function() {
    return (
      <Icon 
        className="attention-icon"
        name="info-circle" 
        tooltip="One or more items require your attention" />
    );
  },
});



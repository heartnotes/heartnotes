var React = require('react');


module.exports = React.createClass({
  propTypes: {
    name : React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      name : '',
    };
  },

  render: function() {
    return (
      <i className={"fa fa-" + this.props.name} />
    );
  },

});



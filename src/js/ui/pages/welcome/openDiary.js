var React = require('react');


module.exports = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      showStep: null,
    };
  },

  render: function() { 
    return (
      <div className="open-diary step">
        <div>Opening diary</div>
      </div>
    );
  },
});


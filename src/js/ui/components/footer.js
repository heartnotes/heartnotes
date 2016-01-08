var React = require('react');


module.exports = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      className: '',
    };
  },
  
  render: function() {
    return (
      <footer className={this.props.className}>
        <div className="footer-content">
          {this.props.children}
        </div>
      </footer>
    );
  },

});




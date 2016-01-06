import React from 'react';
import shell from 'shell';



module.exports = React.createClass({
  propTypes: {
    href : React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      <a className="external-link" onClick={this._openLink} href="#">
        {this.props.children}
      </a>
    );
  },


  _openLink: function(e) {
    e.preventDefault();

    shell.openExternal(this.props.href);
  },

});



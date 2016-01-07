import React from 'react';
import shell from 'shell';

import Detect from '../../utils/detect';


module.exports = React.createClass({
  propTypes: {
    href : React.PropTypes.string.isRequired,
  },

  render: function() {
    let attrs = {};

    if (Detect.isElectronApp()) {
      attrs = {
        onClick: this._openLinkElectron,
        href:"#",
      };
    } else {
      attrs = {
        href:this.props.href,
        target: '_blank',
      };
    }

    return (
      <a className="external-link" {...attrs}>
        {this.props.children}
      </a>
    );
  },


  _openLinkElectron: function(e) {
    e.preventDefault();

    shell.openExternal(this.props.href);
  },

});



import React from 'react';

import TopMenu from '../../components/settings/topMenu';

module.exports = React.createClass({
  propTypes: {
    tab: React.PropTypes.string.isRequired,
  },

  render: function() { 
    return (
      <div className="settings-layout">
        <TopMenu tab={this.props.tab} />
        <div className={`content ${this.props.tab}`}>
          {this.props.children}
        </div>
      </div>
    );
  },
});

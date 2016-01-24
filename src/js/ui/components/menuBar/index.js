import React from 'react';

import BackgroundTasksIndicator from '../backgroundTasksIndicator';
import MainMenu from '../mainMenu';
import SubMenu from '../subMenu';
import Logo from '../logo';
import { connectRedux } from '../../helpers/decorators';


var Component = React.createClass({
  render: function() {
    return (
      <section id="menubar">
        <div>
          <Logo withText={false} onClick={this._onLogoClick} />
          <BackgroundTasksIndicator {...this.props} />
        </div>
        <MainMenu {...this.props} />
        <SubMenu {...this.props} dropdown={true} />
      </section>
    );
  },

});


module.exports = connectRedux()(Component);

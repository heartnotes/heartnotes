import _ from 'lodash';
import React from 'react';

import BackgroundTasksIndicator from '../backgroundTasksIndicator';
import MainMenu from '../mainMenu';
import SubMenu from '../subMenu';
import Logo from '../logo';
import { connectRedux, routing } from '../../helpers/decorators';


module.exports = React.createClass({
  render: function() {
    const isExtraSmallScreen = 
      !!_.get(this.props.data, 'app.screen.isExtraSmall', false);

    return (
      <div id="menubar">
        <div className="logo-container">
          <Logo withText={false} onClick={this._onLogoClick} />
          <BackgroundTasksIndicator {...this.props} />
        </div>
        <MainMenu {...this.props} />
        <SubMenu {...this.props} dropdown={isExtraSmallScreen} />
      </div>
    );
  },

  _onLogoClick: function() {
    this.props.history.navigate('/entries');
  },

});


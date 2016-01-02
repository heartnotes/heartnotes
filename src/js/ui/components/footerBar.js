import React from 'react';
import shell from 'shell';

import IconButton from './iconButton';
import Loading from './loading';
import { connectRedux, routing } from '../helpers/decorators';


class Component extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { app } = this.props.data;

    let newVersionMsg = null;

    if (app.newVersionAvailable) {
      newVersionMsg = (
        <a href="#" onClick={this._goToHomepage}>new version available!</a>
      );
    } else if (app.checkingForUpdate.inProgress) {
      newVersionMsg = (
        <Loading />
      );
    }

    return (
      <footer id="footer-bar">
        <div className="footer-content">
          <div className="meta">
            <span className="version">
              <span className="new-version">{newVersionMsg}</span>
              v{this.props.data.app.version}
            </span>
          </div>
        </div>
      </footer>
    );
  }


  _goToHomepage () {
    shell.openExternal("http://heartnot.es");
  }

}


module.exports = connectRedux()(routing()(Component));


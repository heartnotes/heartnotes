import React from 'react';

import Icon from '../icon';
import ExternalLink from '../externalLink';
import Loading from '../loading';
import { connectRedux, routing } from '../../helpers/decorators';
import Footer from '../footer';


class Component extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { app } = this.props.data;

    let newVersionMsg = null;

    if (app.newVersionAvailable) {
      newVersionMsg = (
        <ExternalLink href={app.downloadLink}>new version available!</ExternalLink>
      );
    } else if (app.checkingForUpdate.inProgress) {
      newVersionMsg = (
        <Loading />
      );
    }

    return (
      <Footer className="welcome-footer-bar">
        <div className="meta">
          <span className="version">
            <span className="new-version">{newVersionMsg}</span>
            v{this.props.data.app.version}
          </span>
          <span className="home">
            <ExternalLink href="https://heartnot.es"><Icon name="home" /></ExternalLink>
          </span>          
        </div>
      </Footer>
    );
  }


}


module.exports = connectRedux()(routing()(Component));


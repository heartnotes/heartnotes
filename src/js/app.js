import _ from 'lodash';
import React from 'react';

// faster taps for mobile
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Provider } from 'react-redux';

import Logger from './utils/logger';
import Detect from './utils/detect';
import Store from './data/store';
import Layout from './ui/layout';
import EntriesView from './ui/pages/entries';
import NewEntryView from './ui/pages/newEntry';
import AccountSettingsView from './ui/pages/settings/account';
import BackupRestoreView from './ui/pages/settings/backupRestore';
import FeedbackView from './ui/pages/settings/feedback';
import WelcomeStart from './ui/pages/welcome/start';
import WelcomeNewCloudDiary from './ui/pages/welcome/newCloudDiary';
import WelcomeNewLocalDiary from './ui/pages/welcome/newLocalDiary';
import WelcomeLoadDiary from './ui/pages/welcome/loadDiary';
import { connectRedux } from './ui/helpers/decorators';


// Dev mode initialization
if (Detect.inDevMode()) { 
  // require('./data/api/fixtures');
}


var App = connectRedux(['init'])(
  React.createClass({
    childContextTypes: {
      logger: React.PropTypes.object,
      router: React.PropTypes.object,
      routeParams: React.PropTypes.object,
      location: React.PropTypes.object,
    },

    getChildContext: function() {
      return {
        logger: Logger,
        routeParams: this.props.params,
        location: this.props.location,
      };
    },

    render: function () {
      return (
        <Layout {...this.props}>
          {this.props.children}
        </Layout>
      );
    },

    componentDidMount: function () {
      this.props.actions.init();
    },
  })
);


const store = Store.create();



const Routes = (
  <Route component={App}>
    <IndexRoute component={NewEntryView} />
    <Route name="singleEntry" path="/entries/:entryId" component={EntriesView} />
    <Route name="entries" path="/entries" component={EntriesView} />
    <Route name="newEntry" path="/newEntry" component={NewEntryView} />
    <Route name="backupRestore" path="/settings/backupRestore" component={BackupRestoreView} />
    <Route name="account" path="/settings" component={AccountSettingsView} />
    <Route name="feedback" path="/feedback" component={FeedbackView} />
    <Route name="welcomeLoadDiary" path="/welcome/loadDiary" component={WelcomeLoadDiary} />
    <Route name="welcomeNewCloudDiary" path="/welcome/newCloudDiary" component={WelcomeNewCloudDiary} />
    <Route name="welcomeNewLocalDiary" path="/welcome/newLocalDiary" component={WelcomeNewLocalDiary} />
    <Route name="welcomeStart" path="/welcome" component={WelcomeStart} />
    <Route path="*" component={NewEntryView} />
  </Route>
);


class RootComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          {Routes}
        </Router>
      </Provider>
    );
  }
}



ReactDOM.render(
  <RootComponent />,
  $('main').get(0)
);



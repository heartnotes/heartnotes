import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { ReduxRouter } from 'redux-router';
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

// API fixtures
if (Detect.inDevMode()) {  
  // require('./data/api/fixtures');
}



class App extends React.Component {
  constructor () {
    super();

    this.state = {
      logger: Logger,
    };
  }

  render () {
    return (
      <Layout {...this.props} {...this.state}>
        {this.props.children}
      </Layout>
    );
  }
}


const Routes = (
  <Route component={App}>
    <IndexRoute component={EntriesView} />
    <Route name="entries" path="/entries" component={EntriesView} />
    <Route name="singleEntry" path="/entries/:entryId" component={EntriesView} />
    <Route name="newEntry" path="/newEntry" component={NewEntryView} />
    <Route name="account" path="/settings" component={AccountSettingsView} />
    <Route name="backupRestore" path="/settings/backupRestore" component={BackupRestoreView} />
    <Route name="feedback" path="/feedback" component={FeedbackView} />
    <Route path="*" component={NewEntryView}/>
  </Route>
);


const store = Store.create(Routes);



class RootComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>{Routes}</ReduxRouter>
      </Provider>
    );
  }
}


ReactDOM.render(
  <RootComponent />,
  $('main').get(0)
);



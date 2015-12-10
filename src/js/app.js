import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { ReduxRouter } from 'redux-router';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Provider } from 'react-redux';


import Logger from './utils/logger';
import Store from './data/store';
import Layout from './ui/layout';
import EntriesView from './ui/pages/entries';
import NewEntry from './ui/pages/newEntry';
import SettingsView from './ui/pages/settings/index';



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
    <Route name="newEntry" path="/newEntry" component={NewEntry} />
    <Route name="settings" path="/settings" component={SettingsView} />
    <Route path="*" component={EntriesView}/>
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



var React = require('react');
var Logger = require('logarama');
var Router = require('react-router');
var $ = require('jquery');

var { Route, DefaultRoute, RouteHandler } = Router;

// Flux
import FluxComponent from 'flummox/component';
import FluxManager from './data/index';


var Layout = require('./ui/layout');
var EntriesView = require('./ui/pages/entries');
var NewEntry = require('./ui/pages/newEntry');
var SettingsView = require('./ui/pages/settings/index');




var App = React.createClass({
  getInitialState: function() {
    var logger = new Logger({
      minLevel: 'info'
    });

    return {
      logger: logger,
      flux: new FluxManager(logger)
    };
  },

  render: function() {
    return (
      <FluxComponent flux={this.state.flux} connectToStores={{
        user: store => ({
          entriesLoaded: !!store.state.entriesLoaded,
          passwordEntered: !!store.state.derivedKeys,
          userAlertMsg: store.state.userAlertMsg,
          userAlertType: store.state.userAlertType,
        }),
      }}>
        <Layout {...this.props}>
          <RouteHandler {...this.props}/>
        </Layout>
      </FluxComponent>
    );
  }
});



var routes = (
  <Route handler={App}>
    <DefaultRoute handler={EntriesView} />
    <Route name="entries" path="/entries/:entryId?" handler={EntriesView} />
    <Route name="newEntry" path="/newEntry" handler={NewEntry} />
    <Route name="settings" path="/settings" handler={SettingsView} />
  </Route>
);


Router.run(routes, Router.HashLocation, function(Handler, state) {
  React.render(
    <Handler routes={state.routes} params={state.params} query={state.query} />, 
    $('main').get(0)
  );
});
 


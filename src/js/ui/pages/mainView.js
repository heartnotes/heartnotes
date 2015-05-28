var React = require('react');

var Router = require('react-router'),
  Link = Router.Link;

var Entries = require('../../data/entries'),
  Timeline = require('../components/timeline'),
  Editor = require('../components/editor');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      entries: Entries.get({
        order_by: 'date',
        order_desc: 'desc',
      })
    };
  },

  render: function() { 
    return (
      <div className="mainView">
        <Timeline entries={this.state.entries} />
        <Editor />
      </div>
    );
  },
});

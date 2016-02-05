var _ = require('lodash'),
  React = require('react');

var moment = require('moment');

import EntryEditor from '../components/entryEditor';
import Loading from '../components/loading';
import { connectRedux } from '../helpers/decorators';




var Component = React.createClass({
  getInitialState: function() {
    return {
      entryId: null,
    }
  },

  render: function() { 
    let { entryId } = this.state;

    let content = (
      <Loading />
    );

    if (entryId) {
      content = (
        <EntryEditor entryId={this.state.entryId} />
      );      
    }

    return (
      <div className="newEntry">{content}</div>
    );
  },

  componentDidMount: function() {
    if (this.props.data.diary.diaryMgr) {
      this.props.actions.createEntryForNow()
        .then((entry) => {
          if (this.isMounted()) {
            this.setState({
              entryId: entry.id,
            });
          }
        });
    }
  }
});



module.exports = connectRedux([
  'createEntryForNow'
])(Component);



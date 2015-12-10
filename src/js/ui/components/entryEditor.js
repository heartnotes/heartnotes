var _ = require('lodash'),
  moment = require('moment'),
  React = require('react');


var DateString = require('./date'),
  DateTimePicker = require('./dateTimePicker'),
  IconButton = require('./iconButton'),
  AskUserDialog = require('./askUserDialog');


import { connectRedux } from '../helpers/decorators';
import * as DateUtils from '../../utils/date';



var Component = React.createClass({
  propTypes: {
    entryId: React.PropTypes.string,
    canDelete: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      entryId: null,
      canDelete: false,
    };
  },

  getInitialState: function() {
    return {
      changedToDate: null,
    };
  },

  render: function() {
    var entry = this._getActiveEntry();

    var entryDate = moment(entry.ts || Date.now()),
      body = entry.body || '';

    var deleteButton = null;
    if (this.props.canDelete) {
      deleteButton = (
        <span className="delete-button">
          <IconButton
            onClick={this._onDelete}
            icon="trash" 
            tooltip="Delete entry"/>
          <AskUserDialog 
            ref="confirmDelete"
            msg="Are you sure you wish to delete this entry?"
            buttons={["Yes", "No"]} />
        </span>
      );
    }

    let dateFormat = (entryDate.year() !== moment().year()) 
      ? 'MMMM Do, YYYY'
      : 'MMMM Do';

    let timeFormat = 'h:mma';

    return (
      <div className="entryEditor">
        <div className="meta">
          <DateString className="day" format={dateFormat} date={entryDate} />
          <DateString className="time" format={timeFormat} date={entryDate} />
          <DateTimePicker 
            onSelect={this._onChangeDate} 
            date={entryDate} 
            tooltip="Change date and time" />
          {deleteButton}
        </div>
        <div className="editor">
          <div ref="editorBody" className="body">{body}</div>
        </div>
      </div>
    );
  },


  componentWillUnmount: function() {
    if (this.editor) {
      this._changeHandler.cancel();

      this.editor.destroy();
    }
  },

  componentDidMount: function() {
    var textNode = React.findDOMNode(this.refs.editorBody);

    this.editor = CKEDITOR.replace(textNode, {
      extraPlugins: 'maxheight',
      removePlugins: 'autogrow,floating-tools',
      enterMode: CKEDITOR.ENTER_BR,
      autoGrow_onStartup: true,
      startupFocus: true,
      placeholder: 'Type here...',
      removeButtons: 'Cut,Copy,Paste,Anchor,Subscript,Superscript',
      toolbarGroups: [
        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
        { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
        { name: 'links' },
      ],
    });

    // https://github.com/heartnotes/heartnotes/issues/3
    // this.editor.on('instanceReady', () => {
    //   console.log(this.editor.document.$.inputEncoding);
    //   console.log(this.editor.document.$.characterSet);
    //   console.log(this.editor.document.$.charset);
    // });

    // save content every second
    this._changeHandler = _.debounce(() => {
      let entry = this._getActiveEntry();

      this.props.actions.updateEntry(
        entry.id, entry.ts, this.editor.getData()
      );
    }, 500);

    this.editor.on('change', this._changeHandler);

    this._setBody();
  },


  shouldComponentUpdate: function(newProps, newState) {
    var newId = newProps.entryId || -1,
      oldId = this.props.entryId || -1;

    var oldDate = DateUtils.getNormalizedTimestamp(this.state.changedToDate || Date.now()),
      newDate = DateUtils.getNormalizedTimestamp(newState.changedToDate || Date.now());

    var oldIsReady = !!this.props.data.entries,
      newIsReady = !!newProps.data.entries;

    return (newId !== oldId || oldDate !== newDate || (newIsReady && !oldIsReady));
  },


  componentWillUpdate: function(newProps) {
    var newId = newProps.entryId || -1,
      oldId = this.props.entryId || -1;

    if (newId !== oldId) {
      this.setState({
        changedToDate: null
      });
    }
  },


  componentDidUpdate: function() {
    this._setBody();
  },


  _getActiveEntry: function() {
    let entry = null;

    let diaryMgr = this.props.data.diary.diaryMgr;

    if (this.state.changedToDate) {
      entry = diaryMgr.getEntryByDate(this.state.changedToDate);

      if (!entry) {
        entry = {
          ts: this.state.changedToDate,
        };
      }
    } else {
      entry = diaryMgr.getEntryById(this.props.entryId);

      if (!entry) {
        entry = diaryMgr.getEntryForNow() || {};
      }
    }

    return entry;
  },


  _setBody: function() {
    let entry = this._getActiveEntry();

    this.editor.setData(entry.body || '', {
      noSnapshot: true
    });
  },


  _onChangeDate: function(newDate) {
    this.setState({
      changedToDate: newDate,
    });
  },


  _onDelete: function() {
    this.refs.confirmDelete.ask((choice) => {
      if ('Yes' === choice) {
        this.props.actions.deleteEntry(this._getActiveEntry().id)
          .then(() => {
            this.props.history.pushState(null, '/entries');
          });
      }
    });
  },


});



module.exports = connectRedux([
  'updateEntry',
  'deleteEntry',
])(Component);


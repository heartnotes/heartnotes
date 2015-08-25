var _ = require('lodash'),
  moment = require('moment'),
  React = require('react');

var { Navigation } = require('react-router');


  

var DateString = require('./date'),
  DatePicker = require('./datePicker'),
  IconButton = require('./iconButton');


module.exports = React.createClass({
  mixins: [Navigation],

  propTypes: {
    entryId: React.PropTypes.string,
    entryDataReady: React.PropTypes.bool,
    canDelete: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      entryId: null,
      entryDataReady: false,
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
        <IconButton className="delete-button"
          onClick={this._onDelete}
          icon="trash" 
          tooltip="Delete entry"/>
      );
    }

    return (
      <div className="entryEditor">
        <div className="meta">
          <DateString format="MMMM Do" date={entryDate} />
          <DatePicker onSelect={this._onChangeDate} 
            date={entryDate} tooltip="Change date"/>
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

    // https://github.com/hiddentao/heartnotes/issues/3
    // this.editor.on('instanceReady', () => {
    //   console.log(this.editor.document.$.inputEncoding);
    //   console.log(this.editor.document.$.characterSet);
    //   console.log(this.editor.document.$.charset);
    // });

    // save content every second
    this._changeHandler = _.debounce(() => {
      let entry = this._getActiveEntry();

      this.props.flux.getActions('entry').update(
        entry.id, entry.ts, this.editor.getData()
      );
    }, 500);

    this.editor.on('change', this._changeHandler);

    this._setBody();
  },


  shouldComponentUpdate: function(newProps, newState) {
    var newId = newProps.entryId || -1,
      oldId = this.props.entryId || -1;

    var oldDate = moment(this.state.changedToDate || Date.now()).startOf('day').valueOf(), 
      newDate = moment(newState.changedToDate || Date.now()).startOf('day').valueOf();

    var oldIsReady = this.props.entryDataReady,
      newIsReady = newProps.entryDataReady;

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
    var store = this.props.flux.getStore('entries'),
      entry = null;

    if (this.state.changedToDate) {
      entry = store.getByDate(this.state.changedToDate);

      if (!entry) {
        entry = {
          ts: this.state.changedToDate,
        };
      }
    } else {
      entry = store.get(this.props.entryId);

      if (!entry) {
        entry = store.getToday() || {};
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
    this.props.flux.getActions('entry').delete(this._getActiveEntry().id);
    this.transitionTo('entries');
  },


});


var _ = require('lodash'),
  moment = require('moment'),
  React = require('react');
  

var DateString = require('./date'),
  DatePicker = require('./datePicker'),
  IconButton = require('./iconButton');


module.exports = React.createClass({
  propTypes: {
    debug: React.PropTypes.bool,
    entry: React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      debug: false,
      entry: null,
    };
  },

  render: function() {
    var entryDate = undefined, body = '';

    if (this.props.entry) {
      entryDate = moment(this.props.entry.ts);
      body = this.props.entry.body;
    }

    return (
      <div className="entryEditor">
        <div className="meta">
          <DateString format="MMMM Do" date={entryDate} />
          <DatePicker onSelect={this._onDateChange} date={entryDate}/>
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
    this._changeHandler = _.debounce(
      _.bind(function() {
        var entryId = this.props.entry ? this.props.entry.id : null;

        this.props.flux.getActions('entry').update(entryId, this.editor.getData());
      }, this),
      500
    );

    this.editor.on('change', this._changeHandler);

    this._setBody();
  },


  shouldComponentUpdate: function(newProps, newState) {
    var newId = newProps.entry ? newProps.entry.id : -1,
      oldId = this.props.entry ? this.props.entry.id : -2;

    return (newId !== oldId);
  },


  componentDidUpdate: function() {
    this._setBody();
  },



  _setBody: function() {
    if (this.props.entry) {
      this.editor.setData(this.props.entry.body, {
        noSnapshot: true
      });
    }
  },


  _onDateChange: function() {
    console.log(arguments);
  },


});


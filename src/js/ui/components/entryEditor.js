var _ = require('lodash'),
  moment = require('moment'),
  React = require('react');

import { Timer } from 'clockmaker';


var DateString = require('./date');


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
        </div>
        <div className="editor">
          <div ref="editorBody" className="body">{body}</div>
        </div>
      </div>
    );
  },

  componentWillUnmount: function() {
    if (this.editor) {
      if (this.editorSaveTimeout) {
        this.editorSaveTimeout.stop();
      }

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
    });

    // save content every 2 seconds
    this.editor.on('change', _.bind(function() {
      if (this.editorSaveTimeout) {
        this.editorSaveTimeout.stop();
      }

      this.editorSaveTimeout = Timer(function() {
        var entryId = this.props.entry ? this.props.entry.id : null;

        this.props.flux.getActions('entry').update(entryId, this.editor.getData());
      }, 2000, {
        thisObj: this
      })
        .start();

    }, this));

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

});


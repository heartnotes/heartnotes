var _ = require('lodash'),
  moment = require('moment'),
  React = require('react');


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
    var date = undefined, body = '';

    if (this.props.entry) {
      date = moment.unix(this.props.entry.ts);
      body = this.props.entry.body;
    }

    return (
      <div className="entryEditor">
        <div className="meta">
          <DateString format="MMMM Mo" date={date} />
        </div>
        <div className="editor">
          <div ref="editorText">{body}</div>
        </div>
      </div>
    );
  },

  componentWillUnmount: function() {
    if (this.editor) {
      this.editor.destroy();
    }
  },

  componentDidMount: function() {
    var textNode = React.findDOMNode(this.refs.editorText);

    this.editor = CKEDITOR.replace(textNode, {
      extraPlugins: 'floating-tools,autogrow',
      enterMode: CKEDITOR.ENTER_BR,
      autoGrow_onStartup: true,
      startupFocus: true,
      placeholder: 'Type here...',
    });

    this.editor.on('change', _.bind(function() {
      var entryId = this.props.entry ? this.props.entry.id : null;

      this.props.flux.getActions('entry').update(entryId, this.editor.getData());
    }, this));
  },

});


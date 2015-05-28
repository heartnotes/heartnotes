var React = require('react');

var Pen = require('pen');


var DateString = require('./date');


module.exports = React.createClass({
  propTypes: {
    debug: React.PropTypes.boolean,
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
      date = this.props.entry.ts;
      body = this.props.entry.body;
    }

    return (
      <div className="entryEditor">
        <div className="meta">
          <DateString format="MMMM Mo" date={date} />
        </div>
        <div className="editor">
          <div className="pen" ref="pen" data-placeholder="Start typing here...">{body}</div>
        </div>
      </div>
    );
  },

  componentDidMount: function() {
    var domNode = React.findDOMNode(this.refs.pen);

    this.editor = new Pen({
      editor: domNode,
      class: 'pen',
      debug: this.props.debug,
      textarea: '<textarea name="pen"></textarea>',
      list: [
        'blockquote', 
        'h2', 
        'h3', 
        'insertorderedlist', 
        'insertunorderedlist',
        'bold', 
        'italic', 
        'underline',
        'createlink',
      ],
    });
  },

});


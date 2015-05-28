var React = require('react');

var Pen = require('pen');


module.exports = React.createClass({
  propTypes: {
    debug: React.PropTypes.boolean,
    body: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      debug: false,
      body: '',
    };
  },

  render: function() {
    return (
      <div className="editor">
        <div className="pen" ref="pen" data-placeholder="Start typing here...">{this.props.body}</div>
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

  shouldComponentUpdate: function() {
    return false;
  },

});


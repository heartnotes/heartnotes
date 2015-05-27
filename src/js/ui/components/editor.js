var React = require('react');

var Pen = require('pen');


module.exports = React.createClass({
  propTypes: {
    debug: React.PropTypes.boolean
  },

  getDefaultProps: function() {
    return {
      debug: false,
    };
  },

  render: function() {
    return (
      <div className="editor">
        <div className="pen" ref="pen">Start typing...</div>
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


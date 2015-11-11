var $ = require('jquery');
var _ = require('lodash');

var React = require('react');



module.exports = React.createClass({
  propTypes: {
    msg : React.PropTypes.object,
    show: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      msg: null,
      show: true,
    };
  },


  render: function() {   
    let bodyStyle = {
      opacity: (this.props.show) ? 1 : 0,
      pointerEvents: (this.props.show) ? 'auto' : 'none',
    }

    return (
      <span className='popup-wrapper'>
        <span className="popup-target" ref="target">{this.props.children}</span>
        <span className="popup-body" ref="body" style={bodyStyle}>
          {this.props.msg}
        </span>
      </span>
    );
  },

  componentWillUnmount: function() {
    if (this.$body) {
      this.$body.off('click');
    }
  },

  componentDidMount: function() {
    this.$body = $(React.findDOMNode(this.refs.body));
    this.$target = $(React.findDOMNode(this.refs.target));

    this._reposition();

    this.$body.on('click', _.bind(function() {
      this.$body.css({
        opacity: 0
      });
    }, this));
  },


  componentDidUpdate: function(prevProps) {
    this._reposition();
  },


  _reposition: function() {
    var targetPos = this.$target.position(),
      parentOuterWidth = this.$target.parent().outerWidth(),
      targetTop = targetPos.top;

    // position body
    this.$body.css({
      top: (targetTop + this.$target.height() + 2) + 'px',
      left: ((parentOuterWidth - this.$body.outerWidth()) / 2) + 'px',
    });
  },

});


var _ = require('lodash');

var React = require('react');



module.exports = React.createClass({
  propTypes: {
    msg : React.PropTypes.object,
    showPopup: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      msg: null,
      showPopup: true,
    };
  },


  render: function() {   
    var wrapperClass = 'popup-wrapper';

    if (!this.props.showPopup) {
      wrapperClass += ' hidden';
    }

    return (
      <span className={wrapperClass}>
        <span className="popup-target" ref="target">{this.props.children}</span>
        <span className="popup-body" ref="body">
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
      this.$body.hide();
    }, this));
  },


  componentDidUpdate: function(prevProps) {
    this._reposition();

    this.$body.show();
  },


  _reposition: function() {
    var targetPos = this.$target.position(),
      parentOuterWidth = this.$target.parent().outerWidth(),
      targetTop = targetPos.top;

    // position body
    this.$body.css({
      top: (targetTop + this.$target.height() + 2) + 'px',
      left: ((parentOuterWidth - this.$body.outerWidth()) / 2) + 'px'
    });
  },

});


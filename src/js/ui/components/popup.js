var _ = require('lodash');

var React = require('react');



module.exports = React.createClass({
  propTypes: {
    msg : React.PropTypes.string,
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
      <div className={wrapperClass}>
        <div className="popup-target" ref="target">{this.props.children}</div>
        <i className="popup-arrow fa fa-caret-up" ref="arrow" />
        <div className="popup-body" ref="body">
          {this.props.msg}
        </div>
      </div>
    );
  },

  componentWillUnmount: function() {
    if (this.$body) {
      this.$body.off('click');
    }
  },

  componentDidMount: function() {
    this.$body = $(React.findDOMNode(this.refs.body));
    this.$arrow = $(React.findDOMNode(this.refs.arrow));
    this.$target = $(React.findDOMNode(this.refs.target));

    this._reposition();

    this.$body.on('click', _.bind(function() {
      this.$arrow.hide();
      this.$body.hide();
    }, this));
  },


  componentDidUpdate: function(prevProps) {
    this._reposition();

    this.$arrow.show();
    this.$body.show();
  },


  _reposition: function() {
    var targetPos = this.$target.position(),
      parentOuterWidth = this.$arrow.parent().outerWidth(),
      arrowTop = targetPos.top + this.$target.height();

    // position arrow
    this.$arrow.css({
      top: arrowTop + 'px',
      left: ((parentOuterWidth - this.$arrow.outerWidth()) / 2) + 'px'
    })

    // position body
    this.$body.css({
      top: (arrowTop + this.$arrow.height()) + 'px',
      left: ((parentOuterWidth - this.$body.outerWidth()) / 2) + 'px'
    });
  },

});


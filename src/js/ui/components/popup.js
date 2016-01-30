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
    this.$body = $(this.refs.body);
    this.$target = $(this.refs.target);

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
    let targetTop = this.$target.offset().top - $(window).scrollTop(),
      targetLeft = this.$target.offset().left - $(window).scrollLeft();

    let bodyWidth = this.$body.outerWidth();
    let bodyHeight = this.$body.outerHeight();

    // position body
    let top = targetTop + this.$target.height() + 2;
    let left = targetLeft - (bodyWidth / 2);

    let windowWidth = $(window).outerWidth();
    let windowHeight = $(window).outerHeight();

    if (10 > left) {
      left = 10;
    } else if (windowWidth - 10 < left + bodyWidth) {
      left = windowWidth - 10 - bodyWidth;
    }

    if (10 > top) {
      top = 10;
    } else if (windowHeight - 10 < top + bodyHeight) {
      top = targetTop - 2 - bodyHeight;
    }

    this.$body.css({
      top: top + 'px',
      left: left + 'px',
    });
  },

});


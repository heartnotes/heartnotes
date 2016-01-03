var React = require('react'),
  Classnames = require('classnames');


var Icon = require('./icon');


module.exports = React.createClass({
  propTypes: {
    icon : React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    tooltip: React.PropTypes.string,
    className: React.PropTypes.string,
    superElem: React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      onClick: null,
      tooltip: null,
      className: null,
      superElem: null,
    };
  },

  render: function() {
    var classes = {
      'btn': true,
      'icon-button': true,
    };

    if (this.props.className) {
      classes[this.props.className] = true;
    }

    let { superElem } = this.props;
    if (superElem) {
      superElem = (
        <span className="super">{superElem}</span>
      );
    }

    return (
      <button 
        className={Classnames(classes)} 
        onClick={this.props.onClick} 
        title={this.props.tooltip}>
          {superElem}
          <Icon name={this.props.icon} />
      </button>
    );
  },

});



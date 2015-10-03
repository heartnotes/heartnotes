var React = require('react');


module.exports = React.createClass({
        propTypes: {
            max: React.PropTypes.number,
            value: React.PropTypes.number,
            text: React.PropTypes.string,
            color: React.PropTypes.string,
        },

        getDefaultProps: function() {
            return {
                max: 1,
                value: 1,
                color: '#fff',
                text: ''
            };
        },

        render: function() {

            var attrs = {
                style: {
                    display: 'inline-block',
                    width: ((this.props.value / this.props.max) * 100) + '%',
                    backgroundColor: this.props.color,
                }
            };

            return (
                <div className = "progress">
                    <label>{this.props.text}</label>
                    <div {...attrs}></div>
                </div>
    );
  },

});
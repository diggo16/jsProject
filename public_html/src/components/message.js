var React = require('react'),
    ptypes = React.PropTypes;

var Message = React.createClass({
    propTypes: {
        text: ptypes.func.isRequired
    },
    render() {
		 return (
		<li>
			{this.props.text}
		</li>
		);
	}
});

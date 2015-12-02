var React = require('react'),
    ptypes = React.PropTypes;

var Message = React.createClass({
    propTypes: {
        text: ptypes.string.isRequired
    },
    render() {
		 return (
		<p>{text} </p>
		);
	}
});

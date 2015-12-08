var React = require('react'),
    ptypes = React.PropTypes;

var Message = React.createClass({
    propTypes: {
		author: ptypes.string,
        body: ptypes.string,
		time: ptypes.string
    },
    render() {
		return (
		<div>
			<div id = 'messagesss'> 
				<p><div id = 'author'>{this.props.author}</div> <div id = 'message'>{this.props.body}</div> <div id = 'time'>{this.props.time}</div> </p>
			</div>
		</div>
		);
	}
});
module.exports = Message;

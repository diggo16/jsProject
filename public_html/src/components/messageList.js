var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');
/*
 * The react class that renders the message list and add button
*/
var MessageList = React.createClass({
    propTypes: {
		onAddClick: ptypes.func.isRequired,
		author: ptypes.string.isRequired,
		messages: ptypes.arrayOf(ptypes.shape({
			text: ptypes.string.isRequired,
			author: ptypes.string.isRequired,
			time: ptypes.string.isRequired
		})).isRequired
    },
	// Handle the add button when clicked
	handleClick(e) {
		// collect the text from the text input
		var node = this.refs.input;
		var text = node.value.trim();
		var author = this.props.author;
		// Send the text to the onAddClick function that adds it to the list		
		this.props.onAddClick(text,author);
		// Reset the input field
		node.value = '';
	},

	// Render the message list, text input field and add button
    render: function(){

        return (
			<div>
			<div id = 'title'>
			</div>
            <div id = 'messagelist'>
				<div id = 'messages'>
					{this.props.messages.map(function (msg,index) {
					  return (
					  	<p key={index}>
					  		<b>{msg.author}</b> wrote at <i>{msg.time}</i>: <br /> 
					  		{msg.text}
					  	</p>
					  	);
					})}
				</div>
            </div>
			<div id = 'add'>
				<p>
					<input type='text' ref='input' />
					<button onClick={(e) => this.handleClick(e)}>
					  Send
					</button>
                </p>
				</div>
			</div>
        );
    }
});
// Transform the message state to props
var mapStateToProps = function(state){
    return {
    	author: state.settings.author,
    	messages: state.messages
    };
};
// Connect onAddClick function to the messagelistreducer
var mapDispatchToProps = function(dispatch){
    return {
		onAddClick: function(text,author){
            dispatch(actions.addmessage(text,author));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(MessageList);
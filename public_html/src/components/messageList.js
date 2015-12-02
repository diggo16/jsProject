var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');
/*
 * The react class that renders the message list and add button
*/
var MessageList = React.createClass({
    propTypes: {
		onAddClick: ptypes.func.isRequired
    },
	// Handle the add button when clicked
	handleClick(e) {
		// collect the text from the text input
		var node = this.refs.input;
		var text = node.value.trim();
		var time = "2015-12-30";
		var author = "Anonymous";
		// Send the text to the onAddClick function that adds it to the list		
		this.props.onAddClick(text, time, author, node);
		// Reset the input field
		//node.value = '';
	},
	// Render the message list, text input field and add button
    render: function(){
        return (
			<div>
			<div id = 'title'>
			<h2>Message</h2>
			</div>
            <div id = 'messagelist'>
				<div id = 'authors'>
					{this.props.author.map(function (author) {
					  return (<p id='author'>{author}</p>);
					})}
				</div>
				<div id = 'messages'>
					{this.props.body.map(function (message) {
					  return (<p id='message'>{message}</p>);
					})}
				</div>
				<div id = 'times'>
					{this.props.time.map(function (time) {
					  return (<p id ='time'>{time}</p>);
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
    return state.message;
};
// Connect onAddClick function to the messagelistreducer
var mapDispatchToProps = function(dispatch){
    return {
		onAddClick: function(text, time, author, node){
            dispatch(actions.addmessage(text, time, author, node));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(MessageList);
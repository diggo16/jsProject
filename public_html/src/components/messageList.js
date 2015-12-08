var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
	Settings = require('./settings'),
	Message = require('./message');
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
		var author = "Anonymous";
		// Send the text to the onAddClick function that adds it to the list		
		this.props.onAddClick(text, author);
		// Reset the input field
		node.value = '';
	},
	// Render the message list, text input field and add button
    render: function(){
		length = this.props.body.length;
		var objects = [];
		for(var i = 0; i < length; i++)
		{
			objects[i] = [this.props.author[i], this.props.body[i], this.props.time[i]];
		}
        return (
			<div>
			<div id = 'title'>
			<h2>Message</h2>
			</div>
            <div id = 'messagelist'>
					{this.props.author.map(function (author, index) {
						return (<Message author={objects[index][0]} body = {objects[index][1]} time = {objects[index][2]}/>);
					})}
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
		onAddClick: function(text, author){
            dispatch(actions.addmessage(text, author));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(MessageList);
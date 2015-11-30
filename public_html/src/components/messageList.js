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
		// Send the text to the onAddClick function that adds it to the list		
		this.props.onAddClick(text);
		// Reset the input field
		node.value = '';
	},
	// Render the message list, text input field and add button
    render: function(){
        return (
            <div>
                <h2>Message</h2>
				{this.props.body.map(function (message) {
				  return ([
					<h3>Message</h3>,
					<p>{message}</p>
				  ]);
				})}
				<p>
					<input type='text' ref='input' />
					<button onClick={(e) => this.handleClick(e)}>
					  Send
					</button>
                </p>
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
		onAddClick: function(text){
            dispatch(actions.addmessage(text));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(MessageList);
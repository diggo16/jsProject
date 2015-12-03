var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');
/*
 * The react class that renders the message list and add button
*/
var MessageList = React.createClass({
    propTypes: {
		changeSettings: ptypes.func.isRequired
    },
	// Handle the add button when clicked
	handleClick(e) {
		// collect the text from the text input
		var username = this.refs.username;
		var usernameValue = username.value.trim();
		// Send the text to the onAddClick function that adds it to the list		
		this.props.changeSettings(usernameValue);
		// Reset the input field
		username.value = '';
	},
	// Render the message list, text input field and add button
    render: function(){
        return (
			<div>
			<p>Settings</p>
			<p>Author:<input type='text' ref='username' /></p>
			<button onClick={(e) => this.handleClick(e)}>
			 Change
			</button>
			</div>
        );
    }
});
// Transform the message state to props
var mapStateToProps = function(state){
    return state.settings;
};
// Connect onAddClick function to the messagelistreducer
var mapDispatchToProps = function(dispatch){
    return {
		changeSettings: function(username){
            dispatch(actions.changeSettings(username));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(MessageList);
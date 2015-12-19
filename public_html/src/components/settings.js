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
        var username = this.refs.username.value.trim();
        // Send the text to the onAddClick function that adds it to the list
        this.props.changeSettings(username);
    },
    // Render the message list, text input field and add button
    render: function () {
        return (
            <div>
                <ul>{this.props.settings.successMessages.map(function (message, index) {
                        return <li key={index}>{message} </li>;
                    }
                )}</ul>
                <p>Settings</p>
                <p>Name:<input type='text' ref='username' defaultValue={this.props.settings.author}/></p>
                <button onClick={(e) => this.handleClick(e)}>
                    Change
                </button>
            </div>
        );
    }
});
// Transform the message state to props
var mapStateToProps = function (state) {
    return {settings: state.settings};
};
// Connect onAddClick function to the messagelistreducer
var mapDispatchToProps = function (dispatch) {
    return {
        changeSettings: function (username) {
            dispatch(actions.changeSettings(username));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(MessageList);
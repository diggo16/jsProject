var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var MessageList = React.createClass({
    propTypes: {
		onAddClick: ptypes.func.isRequired
    },
	handleClick(e) {
		var node = this.refs.input;
		var text = node.value.trim();
		this.props.onAddClick(text);
		node.value = '';
	},
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

var mapStateToProps = function(state){
    return state.message;
};

var mapDispatchToProps = function(dispatch){
    return {
		onAddClick: function(text){
            dispatch(actions.addmessage(text));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(MessageList);
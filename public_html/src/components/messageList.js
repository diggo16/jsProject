var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
	Message = require('./message');

var MessageList = React.createClass({
    propTypes: {
        change: ptypes.func.isRequired
    },
    render: function(){
        return (
            <div>
                <h2>Message</h2>
				<ul>
				  {this.props.body.map((todo, index) =>
				  <Message {...todo}
						key={index}
						/>
				)}
			    </ul>
				<p>
                    <button onClick={this.props.change}>change</button>
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
        change: function(){
            dispatch(actions.changemessage());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(MessageList);
var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var MessageList = React.createClass({
    propTypes: {
        change: ptypes.func.isRequired
    },
    render: function(){
        return (
            <div>
                <h2>Message</h2>
                <p>{this.props.body.length}</p>
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
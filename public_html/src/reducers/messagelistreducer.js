var initialState = require('./../initial-state');

var MessagelistReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
		// When you want to add a message
        case 'MESSAGE_ADD':
			// The message that should be added
			var message = action.text;
			// Concat the new message to the list
            newState.body = newState.body.concat(message);
            return newState;
        default:
            return state || initialState().message;
    }
};

module.exports = MessagelistReducer;	  

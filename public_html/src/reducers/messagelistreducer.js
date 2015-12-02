var initialState = require('./../initial-state');

var MessagelistReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
		// When you want to add a message
        case 'MESSAGE_ADD':
			// The message that should be added
			var message = action.params[0];
			var time = action.params[1];
			var author = action.params[2];
			// Concat the new message, time and author to the list
            newState.body = newState.body.concat(message);
			newState.time = newState.time.concat(time);
			newState.author = newState.author.concat(author);
            return newState;
        default:
            return state || initialState().message;
    }
};

module.exports = MessagelistReducer;	  

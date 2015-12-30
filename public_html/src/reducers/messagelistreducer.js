var initialState = require('../initial-state');
var constants = require("../constants");

var MessagelistReducer = function (state, action) {
    var newState = [].concat(state);
    switch (action.type) {
        // When you want to add a message
        case constants.MESSAGE_ADD:
            // Concat the new message
            return newState.concat({
                text: action.text,
                time: action.time,
                author: action.author
            });
        default:
            return state || initialState().messages;
    }
};

module.exports = MessagelistReducer;	  

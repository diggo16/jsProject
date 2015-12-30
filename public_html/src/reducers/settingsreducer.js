var initialState = require('./../initial-state');
var constants = require("../constants");

var SettingsReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
		// When you want to add a message
        case constants.SETTINGS_CHANGE:
			var author = action.author;

			newState.author = author;
            newState.successMessages.push("Username saved");
            return newState;
        case constants.CLEAR_SUCCESS_MESSAGES:
            newState.successMessages = newState.successMessages.splice(0, newState.successMessages.length - 1);
            return newState;
        default:
            return state || initialState().settings;
    }
};

module.exports = SettingsReducer;	  

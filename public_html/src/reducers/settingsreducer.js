var initialState = require('./../initial-state');

var SettingsReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
		// When you want to add a message
        case 'SETTINGS_CHANGE':
			var author = action.author;

			newState.author = author;
            return newState;
        default:
            return state || initialState().settings;
    }
};

module.exports = SettingsReducer;	  

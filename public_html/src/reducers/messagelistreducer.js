var initialState = require('./../initial-state');

var MessagelistReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'MESSAGE_CHANGE': 
            newState.body = newState.body.concat("newobject");
            return newState;
        default:
            return state || initialState().message;
    }
};

module.exports = MessagelistReducer;	  

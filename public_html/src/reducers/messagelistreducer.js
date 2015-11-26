var initialState = require('./../initial-state');

var MessagelistReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'MESSAGE_CHANGE': 
		newState.body.push("newobject");
		return newState;		
        default:
            return state || initialState().message;
    }
};

module.exports = MessagelistReducer;

//var newState = Object.assign({}, state);
/*
oldlist = state.body;
			oldlist.push("newobject");
			return newstate.body = oldlist;
			
			
return Object.assign({}, state, {
        message: [
          ...state.message,
          {
            body = "newobject"
          }
        ]
      }) 
	  
	  
	  
	 oldlist = state.body;
			oldlist.push("newobject");
			newstate.body = oldlist;
			return newstate.body; 
	  
	  
	  return [
        ...state,
        {
          body: "newobj"
        }
      ]
*/	  
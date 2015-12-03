var Redux = require('redux'),
    messagelistReducer = require('./reducers/messagelistreducer'),
	settingsReducer = require('./reducers/settingsreducer'),
    initialState = require('./initial-state');
// Combine the reducers
var reducers = Redux.combineReducers({
    message: messagelistReducer,
	settings: settingsReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;
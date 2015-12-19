var Redux = require('redux'),
    messagelistReducer = require('./reducers/messagelistreducer'),
    settingsReducer = require('./reducers/settingsreducer'),
    initialState = require('./initial-state'),
    thunk = require("redux-thunk"),
    applyMiddleware = Redux.applyMiddleware;

// Combine the reducers
var reducers = Redux.combineReducers({
    messages: messagelistReducer,
    settings: settingsReducer
});

var store = applyMiddleware(thunk)(Redux.createStore)(reducers, initialState());

module.exports = store;
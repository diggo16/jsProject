var Redux = require('redux'),
    messagelistReducer = require('./reducers/messagelistreducer'),
    initialState = require('./initial-state');

var reducers = Redux.combineReducers({
    message: messagelistReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;
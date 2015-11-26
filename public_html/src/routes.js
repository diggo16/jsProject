var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrap = require('./components/wrap');
    MessageList = require('./components/messageList')

module.exports = (
    <Route path='/' component={Wrap}>
        <IndexRoute component={MessageList}/>
    </Route>
);
var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrap = require('./components/wrap'),
    MessageList = require('./components/messageList'),
	Settings = require('./components/settings');
// Set the index route to messagelist
module.exports = (
    <Route path='/' component={Wrap}>
        <IndexRoute component={MessageList}/>
		<Route path='/settings' component={Settings}/>
    </Route>
);
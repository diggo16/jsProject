var React = require('react'),
    Nav = require('./nav');

// Wrap the navigation window and the other objects together
var Wrap = React.createClass({
    render: function(){
        return (
            <div id="wrap">
                <h1>Chat</h1>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Wrap;
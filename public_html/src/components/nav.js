var React = require('react'),
    Link = require('react-router').Link;
// Navigate to different subsites by changing the adress
var Nav = React.createClass({
    render: function(){
        return (
            <div id="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
					<li><Link to="/settings">Settings</Link></li>
                </ul>
                <div className="clear"/>
            </div>
        );
    }
});

module.exports = Nav;
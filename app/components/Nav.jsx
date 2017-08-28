//call react library
var React = require('react');
//destructuring creates a variable = to the method name when calling the function such as: link = require('react-router').Link
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created by <a href="https://github.com/therealbaconinja" target="_blank">baconinja</a>
              </li>
            </ul>
      </div>

    </div>
  );
};

/*
var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
              <ul className="menu">
                <li>
                  Created by <a href="https://github.com/therealbaconinja" target="_new">baconinja</a>
                </li>
              </ul>
        </div>

      </div>
    );
  }
});
*/

module.exports = Nav;

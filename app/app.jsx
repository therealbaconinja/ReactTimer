//see notes-5-28

var React = require('react');
var ReactDOM = require('react-dom');
//routing
//destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load Foundation or Bootstrap
//css! loader chained with style loader
require('style!css!foundation-sites/dist/foundation.min.css');
//App css
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
  </Route>
</Router>,
  document.getElementById('app')
);

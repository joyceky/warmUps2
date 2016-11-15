// Query strings are often used to pass data from one "page" to another, through the URL. The query string is a list of key-value pairs at the end of a URL. The query string always starts with a ?, and the key-value pairs are separated by &'s. Take a look at the following examples:
//
// http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA
//
// http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week
//
// Write a function called parseQueryString which takes a URL string as an argument and returns a Javascript object containing the key-value pairs from the query string. For example:
//
// parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")
//
// //=> {find_desc: "tacos", find_loc: "San+FranciscoCA"}
//
// parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")
//
// //=> {q: "dogs", sort: "top", t: "week"}
"use strict";
//
var url = 'http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week';

function regQueryObj(url) {
var queryString = {};
url.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function($0, $1, $2, $3) { queryString[$1] = $3; }
);
  console.log(queryString);
}

regQueryObj(url);

function queryObj (querystring) {
  // remove any preceding url and split
  querystring = querystring.substring(querystring.indexOf('?')+1).split('&');
  var params = {}, pair, d = decodeURIComponent;
  // march and parse
  for (var i = querystring.length - 1; i >= 0; i--) {
    pair = querystring[i].split('=');
    params[d(pair[0])] = d(pair[1] || '');
  }
  return params;
}

console.log(queryObj(url));

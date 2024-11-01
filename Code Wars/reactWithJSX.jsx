let React = require('react')

// let us know who your three favorite codewarriors are!
// mantain this format, but choose any three users you want:
// <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>
var myHeader=<h1>My three favorite codewarriors are maliik, david and hamza</h1>

var CodewarsLink = React.createClass({
  render: function() {
    return <a href="http://www.codewars.com/users/noLan">noLan</a>// a link to the user's profile!
  }
});

var Leaderboard = React.createClass({
  render: function() {
    return (
      <div>
      <a href="http://www.codewars.com/users/zeratul">zeratul</a>
      <a href="http://www.codewars.com/users/tassadar">tassadar</a>

      </div>


    )// an abridged version of the leaderboard
    // be sure to use the leaderboard variable preloaded for you
  }
});


console.log()
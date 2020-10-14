const React = require('react');
const PlanetForm = require('./PlanetForm');

/* the main page for the index route of this app */

// list of Entry IDs for each planet model from echoAR console
const planetIDs =
{
  mercury : "<your [planet] entry id here>",
  venus : "<your [planet] entry id here>",
  earth : "<your [planet] entry id here>",
  mars : "<your [planet] entry id here>",
  jupiter : "<your [planet] entry id here>",
  saturn : "<your [planet] entry id here>",
  uranus : "<your [planet] entry id here>",
  neptune : "<your [planet] entry id here>"
}

// list of short urls for each planet model from echoAR console
const planetShortURL = {
  mecury: "<Your [planet] short url here>",
  venus: "<Your [planet] short url here>",
  earth : "<Your [planet] short url here>",
  mars : "<Your [planet] short url here>",
  jupiter : "<Your [planet] short url here>",
  saturn : "<Your [planet] short url here>",
  uranus : "<Your [planet] short url here>",
  neptune : "<Your [planet] short url here>"
}

// Landing Page
const PlanetDemo = function() {

  return (
    <div>
      <PlanetForm entryID={planetIDs} shortURL ={planetShortURL}/>
    </div>
  );
}

module.exports = PlanetDemo;
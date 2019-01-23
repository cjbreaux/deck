
var suits = ["clubs","spades","hearts","diamonds"];
var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

var cards = []

suits.forEach(function(suit){
  ranks.forEach(function(rank){
    cards.push(rank + " of " + suit)
  })
})

// ranks.map(function(rank){
//   return rank + "test"
//   console.log(rank);
// })

// when mapping to an array, it needs to be the same length. cant add elements to an array with map


$(document).ready(function(){

})

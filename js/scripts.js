options = {
  autoplay: true,
  muted: true,
  controls: false
}
videojs("player", options );

var color = ['diamonds', 'clubs', 'hearts', 'spades']; // colour of card
var cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']; // card

function indexToValue(index) {
  if (index == 0) return 0;
  var val = Math.floor((index - 1) / 4) + 1;
  return val; 
}

function indexToFlower(index) {
  return (index % 4) == 0 ? 4 : (index % 4);
}
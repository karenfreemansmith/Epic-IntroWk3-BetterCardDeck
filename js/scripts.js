
var values = ["ace",2,3,4,5,6,7,8,9,10,"jack", "queen", "king"];
var suits = ["diamonds", "hearts", "clubs", "spades"];

suits.forEach(function(suit) {
  values.forEach(function(value) {
    $("ul").append("<li>" + value + " of " + suit +"</li>");
  });
});

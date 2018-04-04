function Player1(name, score) {
  this.name = name;
  this.score = score;
  this.scoreKeeper = [];
}
function Player2(name, score) {
  this.name = name;
  this.score = score;
}




Player1.prototype.scoring = function(){
  var die = Math.floor(Math.random() * 6 + 1)
  var newScore1 = this.score + die;
  player1.scoreKeeper.push(newScore1);


    console.log(newScore1);
}

$(document).ready(function() {
  $("#form1").submit(function(event){
    event.preventDefault();
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    var score1 = 0;
    var score2 = 0;
    var player1 = new Player1(name1, score1);
    var player2 = new Player2(name2, score2);

      player1.scoring();


    // console.log(player1.score1);
    // $("#diebutton").click(function(){
    //   var die = Math.floor(Math.random() * 6 + 1)
    //     console.log(die);
    // });
    console.log(player1, player2);
    console.log(player1.name);

    // $("#diebutton").click(function() {

    //     console.log(die);
    //     if (die !==1) {
    //     alert(player1.score1 += die);
    //     }
    //     alert("you rolled a one!");
    // });
  });



});

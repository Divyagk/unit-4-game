
var randomResult;
var lost = 0;
var win = 0;
var totalscore=0;
// var Crystalnew;
// var images=["./assets/images/image 1.jpg","./assets/images/image2.jpg"]
// var keySound = new Audio('./assets/sounds/typewriter-key.wav');
var winSound = new Audio('./assets/sounds/you-win.wav');
var loseSound = new Audio('./assets/sounds/you-lose.wav');
//  To generating random results.
$(document).ready(function () {
    randomResult = Math.floor(Math.random() * 101) + 19;
    $("#randomresult-text").html(randomResult);

// try
var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  
//   function updateDisplay() { 
  $('#wins-text').text(win);
$('#Loss-text').text(lost);

//resets the game
function reset(){
      
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      
      
      $('#totalscore-text').text(totalscore);
    //   updateDisplay();
      } 
    //   function updateDisplay() { 
    //     $('#wins-text').text(win);
    //   $('#Loss-text').text(lost);}
//adds the wins to the userTotal
function yay(){
   
alert("You won!");
winSound.play();
  win++; 
 
  $('#wins-text').text(win);
  reset();
}
//addes the losses to the userTotal
function loser(){
   
alert ("You lose!");
loseSound.play();

  lost++;
  $('#Loss-text').text(lost);
  reset()
}
//sets up click for jewels
  $('#one').on ('click', function(){
    totalscore = totalscore + num1;
    console.log("New userTotal= " + totalscore);
    $('#totalscore-text').text(totalscore); 
          //sets win/lose conditions
        if (totalscore == randomResult){
          yay();
        }
        else if (  totalscore> randomResult){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    
    totalscore = totalscore + num2;
    console.log("New userTotal= " + totalscore);
    $('#totalscore-text').text(totalscore); 
        if (totalscore == randomResult){
          yay();
        }
        else if ( totalscore > randomResult){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    totalscore = totalscore + num3;
    console.log("New userTotal= " + totalscore);
    $('#totalscore-text').text(totalscore);
//sets win/lose conditions
          if (totalscore == randomResult){
          yay();
        }
        else if ( totalscore > randomResult){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    totalscore = totalscore + num4;
    console.log("New userTotal= " + totalscore);
    $('#totalscore-text').text(totalscore); 
      
          if (totalscore == randomResult){
          yay();
        }
        else if ( totalscore > randomResult){
          loser();
        }
  });   
});

















//  speudo coding 
//  win, loss,you win,youloss,randomnumber display(19-120),4crystal buttons(1-12)
// user score display 
//  Every crystal need to have a random #between 1-12 
//  after every game we want to reset the crystal values 
//  when clicking any crystal, it should adding with the previous result until the game win or loss 
//  if the random number mathches the user score, the player win the game if not they loss 
//  the value of the crystal should be hidded from the player 

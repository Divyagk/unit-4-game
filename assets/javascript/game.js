
var randomResult;
var lost;
var win;
var Crystalnew;
randomResult=Math.floor(Math.random()*101)+19;
// console.log(randomResult)
$("#randomresult-text").text( randomResult);
for(var i=0;i<4;i++){
    var random= Math.floor(Math.random()*11)+1;
    // console.log(random)
    var Crystalnew= $("<div>");
    Crystalnew.attr({
        "class":'Crystals',
        "data-random": random
})
    $("Crystals").append(Crystalnew);
}
















//  speudo coding 
//  win, loss,you win,youloss,randomnumber display(19-120),4crystal buttons(1-12)
// user score display 
//  Every crystal need to have a random #between 1-12 
//  after every game we want to reset the crystal values 
//  when clicking any crystal, it should adding with the previous result until the game win or loss 
//  if the random number mathches the user score, the player win the game if not they loss 
//  the value of the crystal should be hidded from the player 


var random_result = "";
var lost = 0;
var win = 0;
var counter = 0;
var image = ["./assets/images/image 1.jpg", "./assets/images/image2.jpg", "./assets/images/image3.jpg", "./assets/images/image4.png"]
var keySound = new Audio('./assets/sounds/typewriter-key.wav');
var winSound = new Audio('./assets/sounds/you-win.wav');
var loseSound = new Audio('./assets/sounds/you-lose.wav');
$(document).ready(function () {
  // create a function to generate a random number for each crystal.
  function imagegen() {
    for (var i = 0; i < image.length; i++) {
      var crystals = $("<img>");  //create an img tag in html.
      crystals.attr("src", image[i]); //adding src to crystals
      crystals.addClass("crystals");  //creating a class named crystals in htmll(to add class command is .addClass).
      crystals.attr("value", Math.floor(Math.random() * 11) + 1); //set a random number to image.
      crystals.attr("height", "100");
      $("#images").append(crystals);  //appending child  crystals to the images(id that created in html).
      // document.getElementById("gameover-image").style.cssText = "display: none";
      // document.getElementById("youwin-image").style.cssText = "display: none";

    }
  }

  // Create a function to generate a random number.
  function randomNumgen() {
    random_result = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").text("Random Number:" + random_result);
  }

  // to reset the display.
  function resethtml() {
    $("#randomNumber").html("Random Number:" + random_result);
    $("#wintext").html("<p>Wins: " + win + "</p>");
    $("#losstext").html("<p>Losses: " + lost + "</p>");
    $("#score").html("Your total score:" + counter);
   
  
    $("#images").empty();

  }
  // to reset after win or loss occurs.
  function totalReset() {
    randomNumgen()
    counter = 0;
    resethtml();
    imagegen();
   
   }
  //intialise the page with these
  randomNumgen();
  resethtml();
  imagegen();
  
  //to create a fuction for crystal click
  function crystalClick() {
    keySound.play();
    counter += parseInt($(this).attr("value"));  //get the value of the image and increment the counter and update the counter value.
    // parsetInt: The parseInt() function parses a string and returns an integer.
    //Only the first number in the string is returned!
    // Leading and trailing spaces are allowed.
    //If the first character cannot be converted to a number, parseInt() returns NaN.
    $("#score").html("Your total score:" + counter);// to display players score.
    console.log(counter)
    if (random_result === counter) {
      win++;
      winSound.play();
      // document.getElementById("youwin-image").style.cssText = "display: block";
      totalReset();

    }
    else if (counter > random_result) {
      lost++;
      loseSound.play();
      // document.getElementById("gameover-image").style.cssText = "display: block";s
      totalReset();
    }
  }

  $(document).on("click", ".crystals", crystalClick);
});
//  pseudo coding 
//  win, loss,you win,youloss,randomnumber display(19-120),4crystal buttons(1-12)
// user score display 
//  Every crystal need to have a random #between 1-12 
//  after every game we want to reset the crystal values 
//  when clicking any crystal, it should adding with the previous result until the game win or loss 
//  if the random number mathches the user score, the player win the game if not they loss 
//  the value of the crystal should be hidded from the player 

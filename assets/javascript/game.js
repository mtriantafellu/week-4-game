// DISPLAY IDs:
// randomNumber
// totalScore
// wins
// losses

// BUTTON IDs:
// opalBtn
// amberBtn
// quartzBtn
// zirconBtn
// startBtn



$(document).ready(function() {

  // Press Start Button
  $("#startBtn").on("click", function() {

    // Generate Random Number
    var random = Math.floor(Math.random() * 100) +1;

      // Display Random Number at id = randomNumber
      $("#randomNumber").html(random);

  });  // End of Random Number function

  var totalScore = 0;

  $("#opalBtn").on("click", function() {

      var random1 = Math.floor(Math.random() * 10) +1;

      totalScore += parseInt(random1);

      $("#totalScore").html(totalScore);

  });  // End OpalBtn

    $("#amberBtn").on("click", function() {

      var random1 = Math.floor(Math.random() * 10) +1;

      totalScore += parseInt(random1);

      $("#totalScore").html(totalScore);

  });  // End amberBtn  

    $("#zirconBtn").on("click", function() {

      var random1 = Math.floor(Math.random() * 10) +1;

      totalScore += parseInt(random1);

      $("#totalScore").html(totalScore);

  });  // End zirconBtn

    $("#quartzBtn").on("click", function() {

      var random1 = Math.floor(Math.random() * 10) +1;

      totalScore += parseInt(random1);

      $("#totalScore").html(totalScore);

  });  // End quartzBtn

    if (totalScore === randomNumber) {
      wins++;
      alert("You Win!!!");
    }

    else if (totalScore >= randomNumber) {
      losses--
      alert("You Lose!!!");
    }

});  // End of Document Ready





/* Generate a random # by clicking button

// in the body:  button id="random-button"

<h1 class="text-center" id="random-number"></h1>

$(document.ready(function() {
  
  $("random-button").on("click", function() {
  
    var random = Math.floor(Math.random() * 1000) + 1;

    $("#random-number").html(random);

  });

})





/* On Click Example:

jQuery(function($) {
  $("#click-me").on("click", function() {
  
    //...we trigger an alert:
    alert("I've been clicked!");

    });
    $(document).on("keyup", function(event) {
      console.log('keyup?', event.key);

    });
  });
*/




/*
$(document).ready(function() {

  // Make our variables global to the runtime of our application
	var randomNumber = [];
	var totalScore;
	var wins;
	var losses;
	var opal;
	var amber;
	var quartz;
	var zircon; 
*/

/*
  // Use a function to initialize our calculator.
  // This way when the user hits clear, we can guarantee a reset of the app.
  function initializeGame() {
    wins = "";
    losses = "";
    totalScore = "";
    randomNumber = Math.Floor(Math.random());

    $("#randomNumber").html(randomNumber)
  }

  // Add an on click listener to all elements that have the class "number"
  $(".number").on("click", function() {

    // Check if we've already run a calculation, if so... we'll just.
    if (isCalculated) return;

    // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
    if (isOperatorChosen) {
      secondNumber += this.value;
      $("#second-number").html(secondNumber);

    }
    else {
      firstNumber += this.value;
      $("#first-number").html(firstNumber);
    }
  });

  // Add an on click listener to all elements that have the class "operator"
  $(".operator").on("click", function() {
    
    // Check if a first number has already been selected
    // Or we've already run a calculation, if so we just exit.
    if (!firstNumber || isCalculated) return;

    // Set isOperatorChosen to true so we start writing to secondNumber
    isOperatorChosen = true;

    // Store off the operator
    operator = this.value;

    // Set the HTML of the #operator to the text of what was clicked
    $("#operator").html($(this).text());

  });


  // Add an on click listener to all elements that have the class "equal"
  $(".equal").on("click", function() {

    // If we already clicked equal, don't do the calculation again
    if (isCalculated) return;

    // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
    isCalculated = true;

    // Use parseInt to convert our string representation of numbers into actual integers
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    // Based on the operator that was chosen.
    // Then run the operation and set the HTML of the result of that operation
    if (operator === "plus") {
      result = firstNumber + secondNumber;
    }

    if (operator === "minus") {
      result = firstNumber - secondNumber;
    }

    if (operator === "times") {
      result = firstNumber * secondNumber;
    }

    if (operator === "divide") {
      result = firstNumber / secondNumber;
    }

    if (operator === "power") {
      result = Math.pow(firstNumber, secondNumber);
    }

    $("#result").html(result);
  });

  // Add an on click listener to all elements that have the class "clear"
  $(".clear").on("click", function() {

    // Call initializeCalculater so we can reset the state of our app
    initializeCalculator();

  });

  // Call initializeCalculater so we can set the state of our app
  initializeCalculator();


});
*/
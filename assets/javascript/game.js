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

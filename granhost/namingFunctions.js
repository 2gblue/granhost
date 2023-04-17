// Get the buttons by their IDs
var hostButton = document.getElementById("host");
var hostAFKButton = document.getElementById("hostAFK");
var hostWeakButton = document.getElementById("hostWeak");
var firepowerButton = document.getElementById("firepower");
var executeButton = document.getElementById("execute");

// Add event listeners for the click event on the toggle buttons
hostButton.addEventListener("click", toggleButton.bind(null, "主"));
hostAFKButton.addEventListener("click", toggleButton.bind(null, "放置"));
hostWeakButton.addEventListener("click", toggleButton.bind(null, "主弱"));
firepowerButton.addEventListener("click", toggleButton.bind(null, "火力"));
executeButton.addEventListener("click", toggleButton.bind(null, "@10"));

// Function to toggle the gibberish text in the output text field
function toggleButton(text) {
  // Toggle the text in the output text field
  if (outputTextField.value.includes(text)) {
    // Remove the text from the output text field
    outputTextField.value = outputTextField.value.replace(text, "");
  } else {
    // Add the text to the output text field
    outputTextField.value += text;
  }
}

var buttonValueMap = {
  Fire: "火",
  Water: "水",
  Earth: "土",
  Wind: "風",
  Light: "光",
  Dark: "闇",
};

// Get all buttons with class "miscButton"
var miscButtons = document.getElementsByClassName("miscButton");

// Loop through all miscButtons and add event listener
for (var i = 0; i < miscButtons.length; i++) {
  miscButtons[i].addEventListener("click", function (event) {
    // Get the text content of the clicked button
    var buttonText = event.target.textContent;
    // Get the corresponding value from the buttonValueMap
    var buttonValue = buttonValueMap[buttonText];
    // Append the buttonValue to the outputTextField value
    outputTextField.value += buttonValue;
  });
}

// Get the raid times input element
var raidTimesInput = document.getElementById("raidTimes");
var belowRankInput = document.getElementById("belowRank");
var aboveRankInput = document.getElementById("aboveRank");
var personInput = document.getElementById("person");

var previousRaidTimes = "";
raidTimesInput.addEventListener("input", function () {
  var raidTimes = raidTimesInput.value;
  var currentText = outputTextField.value;

  if (currentText.includes("回")) {
    // Replace the previous aboveRank value with the new aboveRank value
    outputTextField.value = currentText.replace(
      previousRaidTimes + " 回",
      raidTimes + " 回"
    );
  } else {
    outputTextField.value = currentText + " " + raidTimes + " 回";
  }

  // Update the previousAboveRank variable with the new aboveRank value
  previousRaidTimes = raidTimes;
});

var previousBelowRank = "";
belowRankInput.addEventListener("input", function () {
  var belowRank = belowRankInput.value;
  var currentText = outputTextField.value;

  if (currentText.includes("↓")) {
    // Replace the previous belowRank value with the new belowRank value
    outputTextField.value = currentText.replace(
      previousBelowRank + " ↓",
      belowRank + " ↓"
    );
  } else {
    outputTextField.value = currentText + " " + belowRank + " ↓";
  }

  // Update the previousBelowRank variable with the new belowRank value
  previousBelowRank = belowRank;
});

var previousAboveRank = "";
aboveRankInput.addEventListener("input", function () {
  var aboveRank = aboveRankInput.value;
  var currentText = outputTextField.value;

  if (currentText.includes("↑")) {
    // Replace the previous aboveRank value with the new aboveRank value
    outputTextField.value = currentText.replace(
      previousAboveRank + " ↑",
      aboveRank + " ↑"
    );
  } else {
    outputTextField.value = currentText + " " + aboveRank + " ↑";
  }

  // Update the previousAboveRank variable with the new aboveRank value
  previousAboveRank = aboveRank;
});

var previousPerson = "";
personInput.addEventListener("input", function () {
  var person = personInput.value;
  var currentText = outputTextField.value;

  if (currentText.includes("人")) {
    // Replace the previous aboveRank value with the new aboveRank value
    outputTextField.value = currentText.replace(
      previousPerson + " 人",
      person + " 人"
    );
  } else {
    outputTextField.value = currentText + " " + person + " 人";
  }

  // Update the previousAboveRank variable with the new aboveRank value
  previousPerson = person;
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(dropdownId) {
  var dropdownContent = document.getElementById("myDropdown-" + dropdownId);
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById("myDropdown" + dropdownId);
  dropdownContent.classList.toggle("show");
}

// Add event listener to the copy button for click event
copyButton.addEventListener("click", function () {
  // Copy the text from the input field to the clipboard
  outputTextField.select(); // Select the text in the input field
  document.execCommand("copy"); // Copy the selected text to the clipboard

  // Update to use Clipboard API
  navigator.clipboard
    .writeText(outputTextField.value)
    .then(function () {
      console.log("Text copied to clipboard");
    })
    .catch(function (err) {
      console.error("Unable to copy text to clipboard", err);
    });
});

/* Function to toggle dropdown content */
function myFunction(id) {
  var dropdownContent = document.getElementById("myDropdown-" + id);
  dropdownContent.classList.toggle("show");
}

/* Close the dropdowns if the user clicks outside of them */
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/* Prevent page redirection on dropdown button and dropdown content click */
var dropdownButtons = document.getElementsByClassName("dropbtn");
for (var i = 0; i < dropdownButtons.length; i++) {
  dropdownButtons[i].addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page redirection on dropdown button click
  });
}

// Get all buttons with class name "miscButton"
var miscButtons = document.getElementsByClassName("miscButton");

// Loop through all miscButtons and add event listener for click event
for (var i = 0; i < miscButtons.length; i++) {
  miscButtons[i].addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the click event
    // Add your desired action or functionality here
    console.log("Button clicked!");
  });
}

// Get all dropdown content elements with class name "dropdown-content"
var dropdownContents = document.getElementsByClassName("dropdown-content");

// Loop through all dropdownContents and add event listener for click event
for (var i = 0; i < dropdownContents.length; i++) {
  var links = dropdownContents[i].getElementsByTagName("a");
  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the click event
      // Add your desired action or functionality here
      console.log("Link clicked!");
    });
  }
}

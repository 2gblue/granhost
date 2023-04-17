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

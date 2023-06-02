// Check if the popup has been displayed before
var isPopupDisplayed = sessionStorage.getItem("popupDisplayed");

// Display the popup if it hasn't been displayed before
if (!isPopupDisplayed) {
  displayPopupWithAnimation();
}

// Display the popup with sliding animation
function displayPopupWithAnimation() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  setTimeout(function() {
    popup.classList.add("show");
  }, 100);
  document.body.style.overflow = "hidden"; // Prevent scrolling behind the popup

  // Set a flag in session storage to indicate that the popup has been displayed
  sessionStorage.setItem("popupDisplayed", "true");
}

// Close the popup
function closePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("show");
  setTimeout(function() {
    popup.style.display = "none";
  }, 300);
  document.body.style.overflow = "auto"; // Enable scrolling again
}

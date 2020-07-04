// Define variable
const message =
  "Thank you for submitting your message. We will respond as soon as possible.";

document
  .getElementById("contactform")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });

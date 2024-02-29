const form = document.getElementById('feedback-form-inner');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Handle form submission here (e.g., send data to server)
  alert('Thank you for your feedback!');

  // Clear the form
  form.reset();
});

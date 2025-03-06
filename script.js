// Example of JavaScript for a simple interaction or validation
document.querySelector('form').addEventListener('submit', function(event) {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  if (name && email && message) {
    alert('Your message has been sent!');
  } else {
    alert('Please fill out all fields before submitting.');
    event.preventDefault();
  }
});

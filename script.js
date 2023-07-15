// // script.js

// const form = document.getElementById('myForm');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission
  
//   // Get the form data
//   const name = document.getElementById('name').value;
//   const phone = document.getElementById('phone').value;

//   // Construct the form submission URL
//   const formId = '1FAIpQLSdY3mP_brjYHgE9MTQD3LvGpfULJoffsyNk9Nw6GTFBOUH9WA'; // Replace with your Google Form ID
//   const baseUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
//   const params = `entry.943225297=${encodeURIComponent(name)}&entry.1180529188=${encodeURIComponent(phone)}`;
//   const url = `${baseUrl}?${params}`;

//   // Send the form data to Google Forms
//   fetch(url, {
//     method: 'POST'
//   })
//     .then(response => {
//         // Handle the response if needed
//         console.log('Form submitted successfully!');
//         // Show the success message
//         successMessage.textContent = 'Form submitted successfully!';
//         successMessage.style.display = 'block';
//         // Reset the form
//         form.reset();
//     })
//     .catch(error => {
//         // Handle any errors
//         console.error('Error submitting the form:', error);
//     });
// });
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        // Here you can add code to actually send the form data to your server
    } else {
        alert('Please fill in all fields.');
    }
});

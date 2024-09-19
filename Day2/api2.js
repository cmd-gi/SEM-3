document.addEventListener('DOMContentLoaded', function() {
    const userBtn = document.getElementById('userBtn');
    const userDisplay = document.getElementById('userDisplay');

    userBtn.addEventListener('click', function() {
        // Fetching a random user from the API
        fetch('https://randomuser.me/api/?nat=us&gender=female')
            .then(response => response.json())
            .then(data => {
                
                const user = data.results[0];
                userDisplay.textContent = `Email: ${user.email}`;
            })
            .catch(error => {
               
                userDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
                console.error('Error fetching user data:', error);
            });
    });
});

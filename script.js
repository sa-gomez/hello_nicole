// Get references to DOM elements
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const displayArea = document.getElementById('displayArea');
const nameDisplay = document.getElementById('nameDisplay');
const imageDisplay = document.getElementById('imageDisplay');

// Handle form submission
nameForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    const name = nameInput.value.trim();
    
    if (name) {
        // Show the display area
        displayArea.classList.remove('hidden');
        
        // Check if the name is "Nicole" (case-insensitive)
        if (name.toLowerCase() === 'nicole') {
            // Special message and image for Nicole
            nameDisplay.textContent = 'I Love you!! :)';
            imageDisplay.classList.remove('hidden');
            imageDisplay.innerHTML = '<img src="nicole.jpg" alt="Display image">';
        } else {
            // Regular message for other names
            nameDisplay.textContent = `Hello, ${name}! 👋`;
            imageDisplay.classList.add('hidden');
        }
        
        // Clear the input
        nameInput.value = '';
    }
});


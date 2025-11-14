# Simple Name Display Website

A simple, beautiful website that takes a user's name and displays it back to them.

## Features

- Clean, modern UI with gradient background
- Text input for name entry
- Displays the name back to the user
- Easy to modify to show an image instead

## How to Use

1. Open `index.html` in your web browser
2. Type your name in the input field
3. Click "Submit"
4. Your name will be displayed below

## Customization

### To Display an Image Instead

Open `script.js` and uncomment one of the image display options:

```javascript
// Option 1: Use your own image file
imageDisplay.classList.remove('hidden');
imageDisplay.innerHTML = '<img src="your-image.jpg" alt="Display image">';

// Option 2: Use a placeholder image service
imageDisplay.classList.remove('hidden');
imageDisplay.innerHTML = '<img src="https://via.placeholder.com/400x300/667eea/ffffff?text=Hello+' + encodeURIComponent(name) + '" alt="Welcome">';
```

### To Show Both Name and Image

You can display both by keeping the name display and adding the image code without hiding the name.

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and layout
- `script.js` - JavaScript functionality

## No Build Step Required!

Just open `index.html` in your browser - that's it! No npm, no build tools, no dependencies.


/**
 * Main JavaScript file
 */

// DOM ready function
document.addEventListener('DOMContentLoaded', function() {
    console.log('SCSS + Gulp Starter loaded successfully!');

    // Check for system dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log('System prefers dark mode');
    }

    // Listen for changes to color scheme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        console.log(`Color scheme changed to ${event.matches ? 'dark' : 'light'} mode`);
    });
});
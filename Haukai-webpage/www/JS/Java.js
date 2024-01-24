// Selectors to grab necessary elements from the HTML
const menuToggle = document.querySelector('.toggle-menu'); // Select the toggle-menu element.
const nav = document.querySelector('header nav ul'); // selects navigation menu ul inside the header
const menuOptions = document.querySelector('.toggle-options'); // Selects the toggle-options element.
const otherContent = document.querySelectorAll('body > *:not(header)'); // Selects all elements in body except header.
const mobileMenu = document.querySelector('.mobile-menu'); // Selects the mobile-menu element.

// Event listener to handle click on menu toggle button
menuToggle.addEventListener('click', () => {
    // Toggles the 'open' class on menuOptions and mobileMenu.
    menuOptions.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    toggleMenu(); // Calls the toggleMenu function
});

// Function to toggle menu visibility and content outside the menu so when you press the toggle menu, the rest of the content disapears.
function toggleMenu() {
    if (menuOptions) {
        // Toggles the 'active' class on menuOptions
        menuOptions.classList.toggle('active');

        // Toggles 'hidden' class on otherContent elements.
        otherContent.forEach(function (element) {
            element.classList.toggle('hidden');
        });
    }
}


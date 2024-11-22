// scripts.js

// Create a toggle button for mobile navigation
const navToggle = document.createElement('button');
navToggle.innerText = "Menu";
navToggle.style.cssText = "background: #0056b3; color: white; border: none; padding: 10px; cursor: pointer; display: none;";

const nav = document.querySelector('header nav');
if (nav) {
    nav.insertBefore(navToggle, nav.firstChild);

    // Add event listener to toggle nav
    navToggle.addEventListener('click', () => {
        const navList = document.querySelector('nav ul');
        navList.classList.toggle('hidden');
    });

    // Show/hide toggle button based on screen size
    function handleResize() {
        if (window.innerWidth <= 600) {
            navToggle.style.display = 'block';
            document.querySelector('nav ul').classList.add('hidden');
        } else {
            navToggle.style.display = 'none';
            document.querySelector('nav ul').classList.remove('hidden');
        }
    }

    // Listen to resize events
    window.addEventListener('resize', handleResize);
    handleResize(); // Call it once on load to set the initial state

    // If there are any links in the navigation, add smooth scroll behavior for internal links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is pointing to the same page with an anchor
            const targetId = this.getAttribute('href');
            if (targetId.charAt(0) === '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // For links navigating to other pages, proceed normally
                window.location.href = targetId;
            }
        });
    });
}

// Initialize once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    handleResize();
});
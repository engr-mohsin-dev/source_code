document.addEventListener('DOMContentLoaded', function() {
    // Ensure the submenu is closed on page load
    const submenu = document.getElementById('submenu');
    submenu.style.display = 'none';
    
    // Select the Products link and the arrow icon
    const productsLink = document.getElementById('products-link');
    const arrowIcon = productsLink.querySelector('i');

    let submenuTimeout; // Variable to store the timeout reference

    // Function to close the submenu
    function closeSubmenu() {
        submenu.style.display = 'none';
        arrowIcon.classList.remove('rotate'); // Reset rotation when submenu is closed
    }

    // Add click event listener to the Products link
    productsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Toggle submenu visibility and rotate icon
        if (submenu.style.display === 'block') {
            closeSubmenu();
        } else {
            submenu.style.display = 'block';
            arrowIcon.classList.add('rotate'); // Add rotation when submenu is opened
            
            // Clear any existing timeout and start a new 5-second timer
            clearTimeout(submenuTimeout);
            submenuTimeout = setTimeout(closeSubmenu, 3000);
        }
    });

    // Add event listener to submenu to reset the timeout if an item is selected
    submenu.addEventListener('mouseover', function() {
        clearTimeout(submenuTimeout); // Clear the timer when mouse is over the submenu
    });

    // Start the timer again when the mouse leaves the submenu
    submenu.addEventListener('mouseleave', function() {
        submenuTimeout = setTimeout(closeSubmenu, 3000); // Restart 5-second timer when mouse leaves submenu
    });

    // Close the submenu and reset the icon rotation if clicked outside of the "Products" link or submenu
    document.addEventListener('click', function(event) {
        if (!productsLink.contains(event.target) && !submenu.contains(event.target)) {
            closeSubmenu();
        }
    });
});


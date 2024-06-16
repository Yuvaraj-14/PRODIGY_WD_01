//JS to change the background color of the navbar when scrolled
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

// JS to change the font color when hovering over a menu item
const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ffcc00';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = '#fff';
    });
});
const navSlide = () => {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('#custom_nav .nav-links li');

    // Toggle Navbar with the burger
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                var delay = index / 10;
                link.style.animation = 'navLinkFade 0.1s ease forwards ' + delay.toString() + 's';
            }
        })

        // Burger animation
        burger.classList.toggle('toggle');
    })

}

window.onload = function() {
  navSlide();
};
document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            // Toggle hamburger icon animation if needed (simple span rotation)
            const spans = menuToggle.querySelectorAll('span');
            if (mobileMenu.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                // Reset Icon
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // "Show More Opinions" Functionality
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenReviews = document.querySelectorAll('.hidden-review');

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            // Show hidden reviews
            hiddenReviews.forEach(review => {
                review.style.display = 'flex'; // Restore flex display
                // Optional: add fade-in animation
                review.style.opacity = '0';
                setTimeout(() => {
                    review.style.transition = 'opacity 0.5s ease';
                    review.style.opacity = '1';
                }, 10);
            });

            // Hide the button after clicking standard behavior, or keep it to load more (mock)
            // The prompt asks for a functional button, usually implies revealing content.
            showMoreBtn.style.display = 'none';
        });
    }

    // Smooth Scroll (Native is usually usually fine, but ensuring behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});


// Footer city links toggle
const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");
city.addEventListener("click", toggleCont);
function toggleCont() {
    city.classList.toggle("active");
    Array.from(cont).forEach((el) => {
        el.style.display = el.style.display === "block" ? "none" : "block";
    });
}
/**
 * Mobile Menu Handler
 * Manages hamburger menu toggle, overlay, and responsive behavior
 */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');

    if (!hamburger || !mobileMenu || !mobileOverlay) return;

    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        mobileOverlay.classList.toggle('show');
        mobileOverlay.style.display = mobileOverlay.classList.contains('show') ? 'block' : 'none';
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMobileMenu);
    mobileOverlay.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMobileMenu();
            }
        });
    });

    // Close menu on resize if open
    window.addEventListener('resize', () => {
        if (window.innerWidth > 600 && mobileMenu.classList.contains('open')) {
            toggleMobileMenu();
        }
    });
});

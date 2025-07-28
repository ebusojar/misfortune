/*
  Simple client‑side enhancements for the Misfortune landing page.

  Features implemented:
    – Smooth scrolling for intra‑page anchor links.
    – Focus management to ensure keyboard users have a predictable experience.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Attach smooth scrolling to local anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // After the scroll, move focus to the target for accessibility
          setTimeout(() => {
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus();
          }, 400);
        }
      }
    });
  });
});
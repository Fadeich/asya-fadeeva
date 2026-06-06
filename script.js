// Header style transition on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 20) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});

// Copy Email to Clipboard with elegant tooltip notification
function copyEmail() {
  const emailText = document.getElementById('emailText').textContent;
  const tooltip = document.getElementById('emailTooltip');
  const badge = document.getElementById('emailBadge');
  
  navigator.clipboard.writeText(emailText).then(() => {
    tooltip.textContent = "Copied!";
    badge.classList.add('contact-badge--copied');
    
    // Reset tooltip after 2 seconds
    setTimeout(() => {
      badge.classList.remove('contact-badge--copied');
      setTimeout(() => {
        tooltip.textContent = "Click to copy";
      }, 300); // Wait for transition fade-out to finish
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal--visible');
      // Unobserve once animated to keep the UI stable
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
});

revealElements.forEach(element => {
  revealOnScroll.observe(element);
});

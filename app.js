document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-down')
      }
    })
  });

  if (document.querySelectorAll('.js-interaction').length > 0) {
    const spies = document.querySelectorAll('.js-interaction')
    spies.forEach(spy => {
      observer.observe(spy);
    })
  }

});
document.addEventListener("DOMContentLoaded", function() {
  // Create the observer
  const observer = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    console.log(entries)
    entries.forEach(entry => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-down-0')
      }
    })
  });

  // Tell the observer which elements to track
  observer.observe(document.querySelector('.js-interaction'));
});
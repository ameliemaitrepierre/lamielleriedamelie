document.addEventListener("DOMContentLoaded", function() {
  // Create the observer
  const observer = new IntersectionObserver(entries => {
    // We will fill in the callback later...
  });

  // Tell the observer which elements to track
  observer.observe(document.querySelector('.square'));
});
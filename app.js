document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-down')
      }
    })
  });

  const spies = document.querySelectorAll('.js-interaction')
  spies.forEach(spy => {
    observer.observe(spy);
  })


  document.getElementById('menu-btn').addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target
    if (target.classList.contains('open')) {
      target.classList.remove('open')
      target.classList.add('close')
    } else {
      target.classList.remove('close')
      target.classList.add('open')
    }
  })
});
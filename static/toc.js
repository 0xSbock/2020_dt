/* 
 * inspired by https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/
 * written by Chris Coyier
 */
window.addEventListener('DOMContentLoaded', () => {
  const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.isIntersecting) {
        document.querySelector(`#toc li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  document.querySelectorAll('h1[id], h2[id]').forEach((heading) => {
    scrollObserver.observe(heading);
    console.log(heading);
  });
});

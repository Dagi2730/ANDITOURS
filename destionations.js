document.addEventListener('DOMContentLoaded', () => {
    const destinationsLink = document.querySelector('a[href="destinations.html"]');
  
    if (destinationsLink) {
      destinationsLink.addEventListener('click', (e) => {
        e.preventDefault();
        const destinationsSection = document.getElementById('destinations');
        if (destinationsSection) {
          destinationsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          alert('Destinations section not found.');
        }
      });
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const bookNowButtons = document.querySelectorAll(".book-now");
  
    bookNowButtons.forEach(button => {
      button.addEventListener("click", function () {
        window.location.href = 'book.html#book';
      });
    });
  });
  
  
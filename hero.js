document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll to the destinations section
    const exploreBtn = document.getElementById('explore-btn');
  
    exploreBtn.addEventListener('click', () => {
      const destinationsSection = document.getElementById('destinations');
      if (destinationsSection) {
        destinationsSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Destinations section not found.');
      }
    });
  });
  
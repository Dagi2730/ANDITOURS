document.addEventListener('DOMContentLoaded', () => {
    const bookNowButtons = document.querySelectorAll(".book-now");
  
    bookNowButtons.forEach(button => {
      button.addEventListener("click", function () {
        document.getElementById('book').scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  
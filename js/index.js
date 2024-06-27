//settings menu responsive toggle
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
  
});

document.querySelectorAll(".navlink").forEach((n) =>
  n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


  const scrollToLinks = document.querySelectorAll('.scrollToSection');

        scrollToLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                let targetId = this.getAttribute('data-target');
                let targetSection = document.getElementById(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });



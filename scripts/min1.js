document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a.nav-link[href^="#"]');
  links.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
              });
          }
      });
  });
});
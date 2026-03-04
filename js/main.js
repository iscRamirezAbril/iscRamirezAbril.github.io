// Navbar scroll effect
window.addEventListener("scroll", () => {
document.getElementById("navbar")
.classList.toggle("scrolled", window.scrollY > 50);
});

// Fade in on scroll
const sections = document.querySelectorAll(".project-content");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}
});
},{threshold:0.3});

sections.forEach(section => {
section.style.opacity = 0;
section.style.transform = "translateY(40px)";
section.style.transition = "all 0.8s ease";
observer.observe(section);
});

/* ===============================
   PROJECTS REVEAL ANIMATION
================================ */

const projectItems = document.querySelectorAll(".project-item");

if (projectItems.length > 0) {

  const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  projectItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.8s ease";
    projectObserver.observe(item);
  });
}
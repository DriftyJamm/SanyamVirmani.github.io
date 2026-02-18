// Scroll animation
const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
},{ threshold: 0.1 });

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "0.7s";
  observer.observe(el);
});

// Dark / Light Toggle
const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

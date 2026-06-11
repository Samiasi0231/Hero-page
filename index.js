document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();

  document.getElementById("year").textContent = year;
});

      document.addEventListener("DOMContentLoaded", () => {
        const footer = document.querySelector(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
          if (entry.isIntersecting) 

        { entry.target.classList.add("active"); }
    });
  },
  
        {
          threshold: 0.2,
  });

        observer.observe(footer);
});
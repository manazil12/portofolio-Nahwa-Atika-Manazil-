// Navbar active link highlight
document.addEventListener("DOMContentLoaded", () => {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll(".nav-link");
    
    menuItems.forEach((item) => {
      if (item.href === currentLocation) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
  
  // Form validation (for contact page)
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (!name || !email || !message) {
        e.preventDefault();
        alert("Semua bidang harus diisi!");
      } else if (!validateEmail(email)) {
        e.preventDefault();
        alert("Masukkan alamat email yang valid!");
      }
    });
  }
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
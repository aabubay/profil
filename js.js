// Menu Toggle untuk tampilan mobile
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Modal Functionality
function showModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Form Validasi
function validateForm(event) {
  event.preventDefault(); // Mencegah form submit default

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const statusMessage = document.getElementById("form-status");

  if (!name || !email || !message) {
    statusMessage.textContent = "Semua field harus diisi!";
    statusMessage.style.color = "red";
    return;
  }

  // Jika form valid
  statusMessage.textContent = "Terima kasih telah mengirim pesan!";
  statusMessage.style.color = "green";
}
// Menampilkan proyek dengan animasi saat scroll
window.addEventListener("scroll", function () {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    const rect = project.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      project.classList.add("show");
    }
  });
});

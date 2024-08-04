// src/scripts/dropdown.js

document.addEventListener('DOMContentLoaded', () => {
  // Ambil semua elemen dropdown
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    // Ambil elemen yang digunakan untuk memicu dropdown
    const trigger = dropdown.querySelector('.dropdown-trigger');
    // Ambil menu dropdown
    const menu = dropdown.querySelector('.dropdown-menu');

    // Tambahkan event listener pada trigger
    trigger.addEventListener('click', () => {
      // Toggle kelas 'is-active' pada menu dropdown
      menu.classList.toggle('is-active');
    });

    // Tutup dropdown jika klik di luar menu
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        menu.classList.remove('is-active');
      }
    });
  });
});

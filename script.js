document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('projects-btn');
  const gallery = document.getElementById('projects-gallery');
  const closeBtn = document.getElementById('close-btn');

  btn.addEventListener('click', () => {
    gallery.classList.toggle('active');
  });

  closeBtn.addEventListener('click', () => {
    gallery.classList.remove('active');
  });
});
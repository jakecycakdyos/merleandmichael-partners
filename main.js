document.addEventListener('DOMContentLoaded', () => {
  function toggleDesc(id) {
    const desc = document.getElementById(id);
    const btn = document.querySelector('.logo-btn[data-desc="' + id + '"]');
    const isActive = desc.classList.contains('active');

    // Hide all descriptions and reset all buttons
    document.querySelectorAll('.description').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.logo-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));

    // If it wasn't already active, show it; otherwise, leave all hidden
    if (!isActive) {
      desc.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
      desc.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  document.querySelectorAll('.logo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleDesc(btn.getAttribute('data-desc'));
    });
    btn.addEventListener('keyup', (e) => {
      if (e.key === "Enter" || e.key === " ") {
        toggleDesc(btn.getAttribute('data-desc'));
      }
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
      document.querySelectorAll('.description').forEach(d => d.classList.remove('active'));
      document.querySelectorAll('.logo-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
    }
  });
});

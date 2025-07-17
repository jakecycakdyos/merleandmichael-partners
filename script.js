
document.addEventListener('DOMContentLoaded', function () {
  const logos = document.querySelectorAll('.logo');
  const descriptions = document.querySelectorAll('.description');

  logos.forEach(logo => {
    logo.addEventListener('click', () => {
      const targetId = logo.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);

      // Hide all descriptions
      descriptions.forEach(desc => {
        if (desc !== targetEl) {
          desc.style.display = 'none';
        }
      });

      // Toggle clicked one
      if (targetEl.style.display === 'block') {
        targetEl.style.display = 'none';
      } else {
        targetEl.style.display = 'block';
      }
    });
  });
});

const colorToggle = document.getElementById('color-toggle');
colorToggle.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});
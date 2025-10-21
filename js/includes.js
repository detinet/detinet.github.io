// Load header and footer includes
document.addEventListener('DOMContentLoaded', function () {
  // Determine the correct path based on current location
  const isSubPage = window.location.pathname.includes('/team/') || window.location.pathname.includes('/contact/');
  const includesPath = isSubPage ? '../includes/' : 'includes/';

  // Load header
  fetch(includesPath + 'header.html')
    .then(response => response.text())
    .then(data => {
      const headerPlaceholder = document.getElementById('header-placeholder');
      if (headerPlaceholder) {
        headerPlaceholder.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading header:', error));

  // Load footer
  fetch(includesPath + 'footer.html')
    .then(response => response.text())
    .then(data => {
      const footerPlaceholder = document.getElementById('footer-placeholder');
      if (footerPlaceholder) {
        footerPlaceholder.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading footer:', error));
});

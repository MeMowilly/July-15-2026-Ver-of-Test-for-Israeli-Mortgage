// Check URL parameters on page load
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('submitted') === 'true') {
    // Hide form, show custom thank-you card
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('thank-you-container').style.display = 'block';
    
    // Switch active view to application page
    if (typeof switchPage === 'function') {
      switchPage('application');
    }
  }
});
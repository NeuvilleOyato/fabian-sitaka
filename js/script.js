// Simple scroll behavior for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-sm');
        header.classList.remove('h-20');
        header.classList.add('h-16');
    } else {
        header.classList.remove('shadow-sm');
        header.classList.add('h-20');
        header.classList.remove('h-16');
    }
});


//call coming soon pop up
function showComingSoon() {
  const modal = document.getElementById("comingSoonModal");
  if (modal) modal.style.display = "block";
}

function hideComingSoon() {
  const modal = document.getElementById("comingSoonModal");
  if (modal) modal.style.display = "none";
}

// optional: click outside to close
window.addEventListener("click", function (e) {
  const modal = document.getElementById("comingSoonModal");
  if (e.target === modal) {
    hideComingSoon();
  }
});
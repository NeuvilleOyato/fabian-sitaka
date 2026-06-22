document.addEventListener('DOMContentLoaded', () => {

    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {

            filterButtons.forEach(b => {
                b.classList.remove('bg-primary', 'text-on-primary');
                b.classList.add('text-on-surface-variant');
            });

            btn.classList.add('bg-primary', 'text-on-primary');
            btn.classList.remove('text-on-surface-variant');

        });
    });

});
        // Sticky Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
            } else {
                header.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
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
        // Simple scroll reveal effect for cards
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.glass-card').forEach(card => {
            card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(card);
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
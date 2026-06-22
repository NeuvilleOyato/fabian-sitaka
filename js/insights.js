        // Simple Micro-interaction: Active category tab switching (UI only)
        const filterButtons = document.querySelectorAll('.filter-bar button');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => {
                    b.classList.remove('text-primary', 'border-b-2', 'border-primary');
                    b.classList.add('text-on-surface-variant');
                });
                btn.classList.add('text-primary', 'border-b-2', 'border-primary');
                btn.classList.remove('text-on-surface-variant');
            });
        });

        // Floating Navbar Effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-md', 'h-16');
                header.classList.remove('h-20');
            } else {
                header.classList.remove('shadow-md', 'h-16');
                header.classList.add('h-20');
            }
        });
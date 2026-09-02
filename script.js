document.addEventListener('DOMContentLoaded', () => {
    
    // Sidebar Navigation Logic
    const navButtons = document.querySelectorAll('.nav-btn');
    const panels = document.querySelectorAll('.panel');
    const scrollArea = document.getElementById('scroll-area');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            navButtons.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button and target panel
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Reset scroll position and progress bar
            scrollArea.scrollTop = 0;
            updateProgress();
        });
    });

    // Accordion Logic
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active-acc');
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                // Optional: remove padding when closed to look cleaner
                content.style.paddingTop = "0";
                content.style.paddingBottom = "0";
            } else {
                content.style.paddingTop = "1rem";
                content.style.paddingBottom = "1rem";
                content.style.maxHeight = content.scrollHeight + 32 + "px"; // 32 is padding
            }
        });
    });

    // Scroll Progress Bar Logic
    const progressBar = document.getElementById('progress-bar');

    function updateProgress() {
        const scrollTop = scrollArea.scrollTop;
        const scrollHeight = scrollArea.scrollHeight - scrollArea.clientHeight;
        const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = scrollPercent + '%';
    }

    scrollArea.addEventListener('scroll', updateProgress);
    updateProgress(); // Initialize on load
});

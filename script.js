// Function to switch from Hub to Presentation
function openPresentation(topicId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(topicId).classList.add('active');
}

// Function to return to Hub
function goHome() {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById('hub').classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    
    // Sidebar Navigation Logic for BOTH topics
    const sidebars = document.querySelectorAll('.sidebar');
    
    sidebars.forEach(sidebar => {
        const navButtons = sidebar.querySelectorAll('.nav-btn');
        const parentView = sidebar.closest('.view');
        const panels = parentView.querySelectorAll('.panel');
        
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active classes inside this specific presentation
                navButtons.forEach(b => b.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                // Add active class to clicked button and target panel
                btn.classList.add('active');
                const targetId = btn.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
            });
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
                content.style.paddingTop = "0";
                content.style.paddingBottom = "0";
            } else {
                content.style.paddingTop = "1rem";
                content.style.paddingBottom = "1rem";
                content.style.maxHeight = content.scrollHeight + 32 + "px";
            }
        });
    });
});

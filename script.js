// Function to open email client
function contactMe() {
    window.location.href = "mailto:zifarchishalanyirenda@gmail.com";
}

// Dynamically set LinkedIn URL (if needed)
document.getElementById('linkedin-btn').href = "https://www.linkedin.com/in/zifar-nyirenda";

// Animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const profile = document.querySelector('.header');
    profile.style.transform = 'translateY(0)';
});

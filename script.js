function contactMe() {
    window.location.href = "mailto:zifarchishalanyirenda@gmail.com";
}

document.getElementById('linkedin-btn').href = "https://www.linkedin.com/in/zifar-nyirenda-086b1a237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";

document.addEventListener('DOMContentLoaded', () => {
    const profile = document.querySelector('.left-panel');
    profile.style.opacity = 0;
    profile.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        profile.style.transition = 'all 0.6s ease-out';
        profile.style.opacity = 1;
        profile.style.transform = 'translateY(0)';
    }, 100);
});

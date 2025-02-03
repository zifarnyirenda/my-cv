function contactMe() {
    window.location.href = "mailto:zifarchishalanyirenda@gmail.com";
}


document.getElementById('linkedin-btn').href = "https://www.linkedin.com/in/zifar-nyirenda-086b1a237/";


document.addEventListener('DOMContentLoaded', () => {
    const profile = document.querySelector('.header');
      
    profile.style.opacity = 0;
    profile.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        profile.style.transition = 'all 0.6s ease-out';
        profile.style.opacity = 1;
        profile.style.transform = 'translateY(0)';
    }, 100);
});

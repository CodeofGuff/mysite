document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.circular-image');
    const devBio = document.querySelector('.dev-bio');
    const voBio = document.querySelector('.vo-bio');
    const sideBar = document.querySelector('.side-bar-left');
    const voSection = document.querySelector('#vo-section');
    
    // Initially hide VO bio and show dev bio
    voBio.classList.remove('visible');
    devBio.classList.add('visible');
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
        const voSectionTop = voSection.offsetTop;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= voSectionTop - 300) {
            devBio.classList.remove('visible');
            voBio.classList.add('visible');
        } else {
            devBio.classList.add('visible');
            voBio.classList.remove('visible');
        }
    });

    // Handle profile image click
    profileImage.addEventListener('click', function() {
        sideBar.classList.toggle('visible');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const coverMusicBtn = document.getElementById('coverMusicBtn');
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');

    let isPlaying = false;

    function toggleMusic() {
        if (isPlaying) {
            bgMusic.pause();
            isPlaying = false;
            updateMusicButtons('▶ PLAY MUSIC');
        } else {
            bgMusic.play();
            isPlaying = true;
            updateMusicButtons('Ⅱ PAUSE MUSIC');
        }
    }

    function updateMusicButtons(text) {
        if(musicToggle) musicToggle.textContent = text;
        if(coverMusicBtn) coverMusicBtn.textContent = text;
    }

    musicToggle.addEventListener('click', toggleMusic);
    coverMusicBtn.addEventListener('click', toggleMusic);

    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = e.target.getAttribute('data-target');
            
            pages.forEach(page => {
                page.classList.remove('active');
            });

            const targetPage = document.getElementById(targetId);
            if (targetPage) {
                targetPage.classList.add('active');
                
                const content = targetPage.querySelector('.content');
                if (content) {
                    content.style.animation = 'none';
                    content.offsetHeight; 
                    content.style.animation = null; 
                }
            }

            if (targetId === 'cover') {
                musicToggle.style.display = 'none';
            } else {
                musicToggle.style.display = 'block';
            }
            
            window.scrollTo(0, 0);
        });
    });
});
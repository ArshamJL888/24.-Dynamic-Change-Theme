let ChangeBox = document.querySelector('.change-box');
let followBtn = document.getElementById('followBtn');
let messageBtn = document.getElementById('messageBtn');
let followStatus = false;
let mainTheme;

followBtn.addEventListener('click', () => {
    followStatus = !followStatus;
    localStorage.setItem('followStatus', followStatus);
    followHandler();
})
ChangeBox.addEventListener('click', (event) => {
    mainTheme = event.target.dataset.color
    if (event.target.tagName === 'BUTTON') {
        localStorage.setItem('mainTheme', mainTheme);
        themeHandler();
    }
})

window.addEventListener('load', themeHandler)
function themeHandler() {
    mainTheme = localStorage.getItem('mainTheme');
    document.documentElement.style.setProperty('--main-theme', mainTheme);
    followHandler()
}

function followHandler() {
    followStatus = localStorage.getItem('followStatus');
    if (followStatus === 'true') {
        followBtn.textContent = 'Followed!'
        followBtn.style.backgroundColor = '#4CAF50'
    }
    else {
        followBtn.textContent = 'Follow';
        followBtn.style.backgroundColor = document.documentElement.style.getPropertyValue('--main-theme')
    }
}
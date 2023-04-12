let buttons = document.querySelectorAll('.btn');
let followBtn = document.getElementById('followBtn');
let isFollowed = false;
let mainTheme = "#03A9F4";
followBtn.addEventListener('click', followHandler)
window.addEventListener('load', loadHandler)
buttons.forEach(function (btn) {
    btn.addEventListener('click', (event) => {
        mainTheme = event.target.dataset.color
        document.documentElement.style.setProperty('--main-theme', mainTheme);
        localStorage.setItem('theme', mainTheme)
    })
})

function followHandler() {
    isFollowed = !isFollowed;
    if (isFollowed) {
        followBtn.textContent = 'Followed!';
        followBtn.style.backgroundColor = '#4CAF50'
    }
    else {
        followBtn.textContent = 'Follow';
        followBtn.style.backgroundColor = document.documentElement.style.getPropertyValue('--main-theme')
    }
}

function loadHandler() {
    mainTheme = localStorage.getItem('theme');
    document.documentElement.style.setProperty('--main-theme', mainTheme);
}

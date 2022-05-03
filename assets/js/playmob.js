const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playBar = $('.main-footer')
const playScreen = $('.root__playing')
const downIcon = $('.playing-song-content-icon-mob')
const root = document.getElementById("root")

playBar.onclick = function (e) {
    const playClick = e.target.closest('.playing-control__buttons-play');
    const pauseClick = e.target.closest('.playing-control__buttons-pause');
    if (playClick || pauseClick) {
        return;
    } else {
        playScreen.classList.remove('res-hide');
        playBar.classList.add('res-hide');
        playScreen.classList.add('play-mob');
        downIcon.classList.remove('res-hide');
        root.setAttribute("class", "song-info")
    }
}

downIcon.onclick = function() {
    playScreen.classList.add('res-hide');
    playBar.classList.remove('res-hide');
    playScreen.classList.remove('play-mob');
    downIcon.classList.add('res-hide');
    root.removeAttribute("class")
}
import { allSongs, allPlaylists } from "./database.js";

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const helloList = $('#mainhead-connav')
const mainHead = $('#main-head')
const mainOpenPlayList = $('.main-openplaylist')
const mainOpenPlayListHeader = $('.main-openplaylist-header')
const actionePrevPage = $('#action__prevpage')
const titleCurrentSong = $('.playing-song-content-info-name')
const artistCurrentSong = $('.playing-song-content-info-artist')
const imgCurrentSong = $('.playing-song-img')
const audioCurrentSong = $('#audio')
const processCurrentSong = $('.playing-control__playback__slider')
const playBtn = $('.playing-control__buttons-playpause')

const app = {
    allSongs,
    currentIndex: 0,
    isPlay: false,
    isRandom: false,
    isRepeat: false,

    //định nghĩa
    defineproperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.allSongs[this.currentIndex]
            }
        })
    },

    //render list nhạc
    render: function () {

        //code của quỳnh



        const htmls = this.allSongs.map(song => {
            return `<div class="main-openplaylist-body__table-item">
                <div class="number">1</div>
                <div class="title">
                    <img src="${song.img}" alt="" class="title-img">
                    <div class="title-info">
                        <div class="title-info__name">${song.name}</div>
                        <div class="title-info__artist">${song.artist}</div>
                    </div>
                </div>
                <div class="album">${song.album}</div>
                <div class="more">
                    <span class="more__time">4:45</span>
                    <img src="./assets/img/now-playing/favorite.png" alt="" class="more__favourite">
                </div>
            </div>`
        })
        $('.main-openplaylist-body__table-body').innerHTML = htmls.join('');
    },

    //Xử lí các sự kiện handle
    handleEvent: function () {
        const _this = this
        //CD quay / dừng
        const imgAnimate = imgCurrentSong.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            //thời gian quay 1 vòng
            duration: 10000, //10 seconds
            //lặp lại bao nhiêu lần - timing function
            iterations: Infinity //lặp vô hạn
        })

        imgAnimate.pause()

        //Xử lý khi click play
        playBtn.onclick = function () {
            console.log(1);
            if (_this.isPlay) {
                audioCurrentSong.pause()
            }
            else {
                audioCurrentSong.play()
            }
        }

        //song play
        audioCurrentSong.onplay = function () {
            _this.isPlay = true
            playBtn.classList.add('playing')
            imgAnimate.play()
        }

        //song pause
        audioCurrentSong.onpause = function () {
            _this.isPlay = false
            playBtn.classList.remove('playing')
            imgAnimate.pause()
        }

        //tiến độ thay đổi
        audioCurrentSong.ontimeupdate = function () {
            if (audioCurrentSong.duration) {
                const processPercent = Math.floor(audioCurrentSong.currentTime / audioCurrentSong.duration * 100)
                processCurrentSong.value = processPercent
            }
        }

        // khi tua xong
        processCurrentSong.onchange = function (e) {
            const seekTime = e.target.value * audioCurrentSong.duration / 100
            audioCurrentSong.currentTime = seekTime
        },
            helloList.onclick = function (e) {
                const listClick = e.target.closest('.mainhead-connav-item')
                if (listClick) {
                    mainHead.style.display = 'none'
                    mainOpenPlayList.style.display = 'block'
                    _this.getScreenClickList(listClick.getAttribute('id-list'));
                }
            }

        actionePrevPage.onclick = function () {
            mainHead.style.display = 'block'
            mainOpenPlayList.style.display = 'none'

        }
    },

    //Xử lí các sự kiện handle







    getScreenClickList: function (index) {
        const list = allPlaylists[index]
        mainOpenPlayListHeader.innerHTML = `
        <img src="${list.img}" alt="">
        <div class="main-openplaylist-header__title">
            <div class="main-openplaylist-header__title__type">playlist</div>
            <div class="main-openplaylist-header__title__name">${list.name}</div>
            <div class="main-openplaylist-header__title__descriptione"></div>
            <div class="main-openplaylist-header__title__info">• ${list.songs.length} songs</div>
        </div>
        `
    },

    loadCurrentSong: function () {
        titleCurrentSong.textContent = this.currentSong.name
        artistCurrentSong.textContent = this.currentSong.artist
        imgCurrentSong.src = this.currentSong.img
        audioCurrentSong.src = this.currentSong.path
    },

    start: function () {
        //Định nghĩa các thuộc tính cho Object
        this.defineproperties()

        //Lắng nghe xử lí sự kiện cho DOM
        this.handleEvent()

        //Load bài hát hiện tại ra màn hình audio
        this.loadCurrentSong()

        //render list nhạc
        this.render()
    },
}

app.start()
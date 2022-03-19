import { allSongs, allPlaylists } from "./database.js";

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//HUY
const helloList = $('#mainhead-connav')
const mainHead = $('#main-head')
const mainOpenPlayList = $('.main-openplaylist')
const mainOpenPlayListHeader = $('.main-openplaylist-header')
const actionePrevPage = $('#action__prevpage')
const playAlbumBtn = $('.main-openplaylist-body__btns-play')
//===========================================================
//QUYNH
const titleCurrentSong = $('.playing-song-content-info-name')
const artistCurrentSong = $('.playing-song-content-info-artist')
const imgCurrentSong = $('.playing-song-img')
const audioCurrentSong = $('#audio')
const processCurrentSong = $('.playing-control__playback__slider')

const playBtn = $('.playing-control__buttons-playpause')
const previousBtn = $('.playing-control__buttons-prev')
const nextBtn = $('.playing-control__buttons-next')
const shuffleBtn = $('.shuffle')
const repeatBtn = $('.repeat')
//=============================================================
const app = {
    //QUYNH
    listSong: [...allSongs],
    currentIndex: 0,
    isPlay: false,
    isRandom: false,
    isRepeat: false,

    //định nghĩa
    defineproperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.listSong[this.currentIndex]
            }
        })
    },

    //render list nhạc
    render: function () {

        const htmls = this.listSong.map((song, index) => {
            return `<div class="main-openplaylist-body__table-item ${index == this.currentIndex ? 'active' : ''}">
                <div class="number">${index + 1}</div>
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
            if (_this.isPlay) {
                audioCurrentSong.pause()
            }
            else {
                audioCurrentSong.play()
            }
        }

        playAlbumBtn.onclick = function () {
            _this.currentIndex = 0
            _this.render()
            _this.loadCurrentSong()
            audioCurrentSong.play()
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
        }

        // preview song
        previousBtn.onclick = function () {
            if (_this.isRandom) {
                _this.loadRandomSong()
            } else {
                _this.loadPreviousSong()
            }
            audioCurrentSong.play()
            _this.render()
        }

        // next song
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.loadRandomSong()
            } else {
                _this.loadNextSong()
            }
            audioCurrentSong.play()
            _this.render()
        }

        // random song
        shuffleBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            //bật tắt active, đồng thời truyền vào đối số, khi _this.isRandom = true thì thêm active và ngược lại
            shuffleBtn.classList.toggle('active', _this.isRandom)
        }

        //repeat song
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        //handle when this song ended
        audioCurrentSong.onended = function () {
            if (_this.isRepeat) {
                audioCurrentSong.play()
            } else {
                nextBtn.click()
            }
        }

        //====
        //HUY
        helloList.onclick = function (e) {
            const listClick = e.target.closest('.mainhead-connav-item')
            if (listClick) {
                mainHead.style.display = 'none'
                mainOpenPlayList.style.display = 'block'
                _this.getScreenClickList(listClick.getAttribute('id-list'));
                _this.addSongsToList(allPlaylists[listClick.getAttribute('id-list')].songs)
                _this.render()
            }
        }

        actionePrevPage.onclick = function () {
            mainHead.style.display = 'block'
            mainOpenPlayList.style.display = 'none'

        }
    },

    //cập nhật trạng thái của bài hát đang phát trên thanh
    loadCurrentSong: function () {
        titleCurrentSong.textContent = this.listSong[this.currentIndex].name
        artistCurrentSong.textContent = this.listSong[this.currentIndex].artist
        imgCurrentSong.src = this.listSong[this.currentIndex].img
        audioCurrentSong.src = this.listSong[this.currentIndex].path
    },

    //chuyển bài tiếp theo
    loadNextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.listSong.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    //quay lại bài trước đó    
    loadPreviousSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.listSong.length - 1
        }
        this.loadCurrentSong()
    },

    //random bất kỳ một bài nào đó
    loadRandomSong: function () {
        let randomIndex
        do {
            randomIndex = Math.floor(Math.random() * this.listSong.length)
        }
        while (randomIndex === this.currentIndex)
        this.currentIndex = randomIndex
        this.loadCurrentSong()
    },

    //==========================================================
    //HUY
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

    addSongsToList: function (data) {
        this.listSong = data
    },

    //========================================================

    start: function () {
        //QUYNH
        // Định nghĩa các thuộc tính cho Object
        // this.defineproperties()

        //Lắng nghe xử lí sự kiện cho DOM
        this.handleEvent()

        //Load bài hát hiện tại ra màn hình audio
        this.loadCurrentSong()

        //render list nhạc
        //=======================================================
    },
}

app.start()
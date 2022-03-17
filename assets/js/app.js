import { allSongs } from "./database.js";

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)






const app = {
    currentIndex: 1,
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
        console.log(1);

    },





    //Xử lí các sự kiện handle
    handleEvent: function () {

    },
    start: function () {
        //Định nghĩa các thuộc tính cho Object
        this.defineproperties()

        //Lắng nghe xử lí sự kiện cho DOM
        this.handleEvent()

        //Load bài hát hiện tại ra màn hình audio
        // this.loadCurrentSong()

        //render list nhạc
        this.render()
    },
}

app.start()
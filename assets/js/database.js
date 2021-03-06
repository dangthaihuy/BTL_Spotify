const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const mainHeaderConNav = $('#mainhead-connav')
const rightUsers = $('.right-users')
const listMadeForYou = $('#madeforyou-list')
const listBestofartist = $('#bestofartist-list')
const listRecentlyPlayed = $('#recently-played-list')

export const allSongs = [
    {
        id: 1,
        name: "Hold On",
        artist: ["Justin Bieber"],
        img: "./data/albums/justice__justin-bieber.jpg",
        path: "./data/songs/hold-on__justin-bieber.mp3",
        album: "Justice",
        backgroundColor: '#095250',
        tag: ['favorite', 'pop']
    },
    {
        id: 2,
        name: "Weightless",
        artist: ["All Time Low"],
        img: "./data/albums/nothing-personal__all-time-low.jpg",
        path: "./data/songs/weightless__all-time-low.mp3",
        album: "Nothing Personal",
        backgroundColor: '#70684e',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 3,
        name: "Break Your Little Heart",
        artist: ["All Time Low"],
        img: "./data/albums/nothing-personal__all-time-low.jpg",
        path: "./data/songs/break-your-little-heart__all-time-low.mp3",
        album: "Nothing Personal",
        backgroundColor: '#70684e',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 4,
        name: "Damned If I Do Ya (Damned If I Don't)",
        artist: ["All Time Low"],
        img: "./data/albums/nothing-personal__all-time-low.jpg",
        path: "./data/songs/damn-if-i-do-ya__all-time-low.mp3",
        album: "Nothing Personal",
        backgroundColor: '#70684e',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 5,
        name: "Stella",
        artist: ["All Time Low"],
        img: "./data/albums/nothing-personal__all-time-low.jpg",
        path: "./data/songs/stella__all-time-low.mp3",
        album: "Nothing Personal",
        backgroundColor: '#70684e',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 6,
        name: "Runaways",
        artist: ["All Time Low"],
        img: "./data/albums/future-hearts__all-time-low.jpg",
        path: "./data/songs/runaways__all-time-low.mp3",
        album: "Future Hearts",
        backgroundColor: '#466668',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 7,
        name: "Australia",
        artist: ["Jonas Brothers"],
        img: "./data/albums/jonas-brothers__jonas-brothers.jpg",
        path: "./data/songs/australia__jonas-brothers.mp3",
        album: ["Jonas Brothers"],
        backgroundColor: '#585657',
        tag: ['favorite', 'pop punk', 'pop']
    },
    {
        id: 8,
        name: "Hesitate",
        artist: ["Jonas Brothers"],
        img: "./data/albums/happiness-begins__jonas-brothers.jpg",
        path: "./data/songs/hesitate__jonas-brothers.mp3",
        album: "Happiness Begins",
        backgroundColor: '#5c6e6e',
        tag: ['favorite', 'pop']
    },
    {
        id: 9,
        name: "Rollercoaster",
        artist: ["Jonas Brothers"],
        img: "./data/albums/happiness-begins__jonas-brothers.jpg",
        path: "./data/songs/rollercoaster__jonas-brothers.mp3",
        album: "Happiness Begins",
        backgroundColor: '#5c6e6e',
        tag: ['favorite', 'pop']
    },
    {
        id: 10,
        name: "Where Have You Gone (Anywhere)",
        artist: ["Lucas & Steve"],
        img: "./data/albums/letters-to-remember__lucas-steve.jpg",
        path: "./data/songs/where-have-you-gone-anywhere__lucas-steve.mp3",
        album: "Letters To Remember",
        backgroundColor: '#5c6e6e',
        tag: ['favorite', 'edm']
    },
    {
        id: 11,
        name: "Letters",
        artist: ["Lucas & Steve"],
        img: "./data/albums/letters-to-remember__lucas-steve.jpg",
        path: "./data/songs/letters__lucas-steve.mp3",
        album: "Letters To Remember",
        backgroundColor: '#111735',
        tag: ['favorite', 'edm']
    },
    {
        id: 12,
        name: "Daylight",
        artist: ["Maroon 5"],
        img: "./data/albums/overexposed__maroon-5.jpg",
        path: "./data/songs/daylight__maroon-5.mp3",
        album: "Overexposed",
        backgroundColor: '#111735',
        tag: ['favorite', 'pop']
    },
    {
        id: 13,
        name: "These Heights (feat. Caroline Pennell)",
        artist: ["Bassjackers", "Lucas & Steve", "Caroline Pennell"],
        img: "./data/singles/these-heights__bassjackers.jpg",
        path: "./data/songs/these-heights__bassjackers__lucas-steve__caroline-pennell.mp3",
        album: "These Heights (feat. Caroline Pennell)",
        backgroundColor: '#241832',
        tag: ['favorite', 'edm']
    },
    {
        id: 14,
        name: "More Than A Feeling",
        artist: ["Boston"],
        img: "./data/albums/boston__boston.jpg",
        path: "./data/songs/more-than-a-feeling__boston.mp3",
        album: "Boston",
        backgroundColor: '#812824',
        tag: ['favorite', 'rock']
    },
    {
        id: 15,
        name: "Good Times",
        artist: ["All Time Low"],
        img: "./data/albums/last-young-renegade__all-time-low.jpg",
        path: "./data/songs/good-times__all-time-low.mp3",
        album: "Last Young Renegade",
        backgroundColor: '#29373c',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 16,
        name: "Missing You",
        artist: ["All Time Low"],
        img: "./data/albums/future-hearts__all-time-low.jpg",
        path: "./data/songs/missing-you__all-time-low.mp3",
        album: "Future Hearts",
        backgroundColor: '#466668',
        tag: ['favorite', 'pop']
    },
    {
        id: 17,
        name: "Kids In The Dark",
        artist: ["All Time Low"],
        img: "./data/albums/future-hearts__all-time-low.jpg",
        path: "./data/songs/kids-in-the-dark__all-time-low.mp3",
        album: "Future Hearts",
        backgroundColor: '#466668',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 18,
        name: "Dear Maria Count Me In",
        artist: ["All Time Low"],
        img: "./data/albums/so-wrong-its-right__all-time-low.jpg",
        path: "./data/songs/dear-maria-count-me-in__all-time-low.mp3",
        album: "So Wrong, It's Right",
        backgroundColor: '#665303',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 19,
        name: "Time Bomb",
        artist: ["All Time Low"],
        img: "./data/albums/dirty-work__all-time-low.jpg",
        path: "./data/songs/time-bomb__all-time-low.mp3",
        album: "Dirty Work",
        backgroundColor: '#02446c',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 20,
        name: "Life of the party",
        artist: ["All Time Low"],
        img: "./data/albums/last-young-renegade__all-time-low.jpg",
        path: "./data/songs/life-of-the-party__all-time-low.mp3",
        album: "Last Young Renegade",
        backgroundColor: '#29373c',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 21,
        name: "Something's Gotta Give",
        artist: ["All Time Low"],
        img: "./data/albums/future-hearts__all-time-low.jpg",
        path: "./data/songs/somethings-gotta-give__all-time-low.mp3",
        album: "Future Hearts",
        backgroundColor: '#466668',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 22,
        name: "Once In A Lifetime",
        artist: ["All Time Low"],
        img: "./data/singles/once-in-a-lifetime__all-time-low.jpg",
        path: "./data/songs/once-in-a-lifetime__all-time-low.mp3",
        album: "Once In A Life Time",
        backgroundColor: '#623023',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 23,
        name: "Monsters (feat. blackbear)",
        artist: ["All Time Low", "blackbear"],
        img: "./data/albums/wake-up-sun-shine__all-time-low.jpg",
        path: "./data/songs/monsters__all-time-low.mp3",
        album: "Wake Up, Sunshine",
        backgroundColor: '#64593c',
        tag: ['favorite', 'pop punk']
    },
    {
        id: 24,
        name: "Used To Love (with Dean Lewis)",
        artist: ["Martin Garrix", "Dean Lewis"],
        img: "./data/singles/used-to-love__martin-garrix.jpg",
        path: "./data/songs/used-to-love__martin-garrix.mp3",
        album: "Used To Love (with Dean Lewis)",
        backgroundColor: '#203e51',
        tag: ['favorite', 'edm']
    },
    {
        id: 25,
        name: "Drown (feat. Cliton Kane)",
        artist: ["Martin Garrix", "Cliton Kane"],
        img: "./data/singles/drown__martin-garrix.jpg",
        path: "./data/songs/drown__martin-garrix.mp3",
        album: "Drown (feat. Cliton Kane)",
        backgroundColor: '#484747',
        tag: ['favorite', 'edm']
    },
    {
        id: 26,
        name: "No Sleep (feat. Bonn)",
        artist: ["Martin Garrix", "Bonn"],
        img: "./data/singles/no-sleep__martin-garrix.jpg",
        path: "./data/songs/no-sleep__martin-garrix.mp3",
        album: "No Sleep (feat. Bonn)",
        backgroundColor: '#523825',
        tag: ['favorite', 'edm']
    },
    {
        id: 27,
        name: "High On Life (feat. Bonn)",
        artist: ["Martin Garrix", "Bonn"],
        img: "./data/singles/high-on-life__martin-garrix.jpg",
        path: "./data/songs/high-on-life__martin-garrix.mp3",
        album: "High On Life (feat. Bonn)",
        backgroundColor: '#3b3e3e',
        tag: ['favorite', 'edm']
    },
    {
        id: 28,
        name: "Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)",
        artist: ["Martin Garrix", "Macklemore", "Fall Out Boy"],
        img: "./data/singles/summer-days__martin-garrix.jpg",
        path: "./data/songs/summer-days__martin-garrix.mp3",
        album: "Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)",
        backgroundColor: '#2e5a62',
        tag: ['favorite', 'edm']
    },
    {
        id: 29,
        name: "These Are The Times (feat. JRM)",
        artist: ["Martin Garrix", "JRM"],
        img: "./data/singles/these-are-the-times__martin-garrix.jpg",
        path: "./data/songs/these-are-the-times__martin-garrix.mp3",
        album: "These Are The Times (feat. JRM)",
        backgroundColor: '#545454',
        tag: ['favorite', 'edm']
    },
    {
        id: 30,
        name: "Burn Out (feat. Dewain Whitmore)",
        artist: ["Martin Garrix", "Dewain Whitmore"],
        img: "./data/singles/burn-out__martin-garrix.jpg",
        path: "./data/songs/burn-out__martin-garrix.mp3",
        album: "Burn Out (feat. Dewain Whitmore)",
        backgroundColor: '#1d162b',
        tag: ['favorite', 'edm']
    },
    {
        id: 31,
        name: "Higher Ground (feat. John Martin)",
        artist: ["Martin Garrix", "John Martin"],
        img: "./data/singles/higher-ground__martin-garrix.jpg",
        path: "./data/songs/higher-ground__martin-garrix.mp3",
        album: "Higher Ground (feat. John Martin)",
        backgroundColor: '#4e4e4e',
        tag: ['favorite', 'edm']
    },
    {
        id: 32,
        name: "Forbidden Voices",
        artist: ["Martin Garrix"],
        img: "./data/singles/forbidden-voices__martin-garrix.jpg",
        path: "./data/songs/forbidden-voices__martin-garrix.mp3",
        album: "Forbidden Voices",
        backgroundColor: '#2f2f2f',
        tag: ['favorite', 'edm']
    },
    {
        id: 33,
        name: "Waiting For Tomorrow (feat. Mike Shinoda)",
        artist: ["Martin Garrix", "Mike Shinoda"],
        img: "./data/ep/bylaw-ep__martin-garrix.jpg",
        path: "./data/songs/waiting-for-tomorrow__martin-garrix.mp3",
        album: "BYLAW EP",
        backgroundColor: '#3c1f29',
        tag: ['favorite', 'edm']
    },
    {
        id: 34,
        name: "Sucker",
        artist: ["Jonas Brothers"],
        img: "./data/albums/happiness-begins__jonas-brothers.jpg",
        path: "./data/songs/sucker__jonas-brothers.mp3",
        album: "Happiness Begins",
        backgroundColor: '#5c6e6e',
        tag: ['favorite', 'pop']
    },
    {
        id: 35,
        name: "Only Human",
        artist: ["Jonas Brothers"],
        img: "./data/albums/happiness-begins__jonas-brothers.jpg",
        path: "./data/songs/only-human__jonas-brothers.mp3",
        album: "Happiness Begins",
        backgroundColor: '#5c6e6e',
        tag: ['favorite', 'pop']
    },
    {
        id: 36,
        name: "By Your Side",
        artist: ["Jonas Blue", "RAYE"],
        img: "./data/albums/blue__jonas-blue.jpg",
        path: "./data/songs/by-your-side__jonas-blue.mp3",
        album: "Blue",
        backgroundColor: '#435864',
        tag: ['favorite', 'edm']
    },
    {
        id: 37,
        name: "Mama",
        artist: ["Jonas Blue", "William Singe"],
        img: "./data/albums/blue__jonas-blue.jpg",
        path: "./data/songs/mama__jonas-blue.mp3",
        album: "Blue",
        backgroundColor: '#435864',
        tag: ['favorite', 'edm']
    },
    {
        id: 38,
        name: "Polaroid",
        artist: ["Jonas Blue", "Liam Payne", "Lennon Stella"],
        img: "./data/albums/blue__jonas-blue.jpg",
        path: "./data/songs/polaroid__jonas-blue.mp3",
        album: "Blue",
        backgroundColor: '#435864',
        tag: ['favorite', 'edm']
    },
    {
        id: 39,
        name: "Rise",
        artist: ["Jonas Blue", "Jack & Jack"],
        img: "./data/albums/blue__jonas-blue.jpg",
        path: "./data/songs/rise__jonas-blue.mp3",
        album: "Blue",
        backgroundColor: '#435864',
        tag: ['favorite', 'edm']
    },
    {
        id: 40,
        name: "Younger",
        artist: ["Jonas Blue", "HRVY"],
        img: "./data/singles/younger__jonas-blue.jpg",
        path: "./data/songs/younger__jonas-blue.mp3",
        album: "Younger",
        backgroundColor: '#85171d',
        tag: ['favorite', 'edm']
    },
    {
        id: 41,
        name: "Perfect Stranger",
        artist: ["Jonas Blue", "JP Cooper"],
        img: "./data/albums/blue__jonas-blue.jpg",
        path: "./data/songs/perfect-stranger__jonas-blue.mp3",
        album: "Blue",
        backgroundColor: '#435864',
        tag: ['favorite', 'edm']
    },
    {
        id: 42,
        name: "Walk Thru Fire",
        artist: ["Vicetone", "Meron Ryan"],
        img: "./data/singles/walk-thru-fire__vicetone.jpg",
        path: "./data/songs/walk-thru-fire__vicetone__meron-ryan.mp3",
        album: "Walk Thru Fire",
        backgroundColor: '#8d0b16',
        tag: ['favorite', 'edm']
    },
    {
        id: 43,
        name: "Waiting",
        artist: ["Vicetone", "Daisy Guttridge"],
        img: "./data/singles/waiting__vicetone.jpg",
        path: "./data/songs/waiting__vicetone__daisy-guttridge.mp3",
        album: "Waiting",
        backgroundColor: '#9d131d',
        tag: ['favorite', 'edm']
    },
    {
        id: 44,
        name: "Something Strange",
        artist: ["Vicetone", "Daisy Guttridge"],
        img: "./data/singles/something-strange__vicetone.jpg",
        path: "./data/songs/something-strange__vicetone__haley-reinhart.mp3",
        album: "Something Strange",
        backgroundColor: '#1e4062',
        tag: ['favorite', 'edm']
    },
    {
        id: 45,
        name: "Somebody I'm Not",
        artist: ["Martin Jensen", "Bjrnskov"],
        img: "./data/singles/somebody-im-not__martin-jensen.jpg",
        path: "./data/songs/somebody-im-not__martin-jensen__bjrnskov.mp3",
        album: "Somebody I'm Not",
        backgroundColor: '#083347',
        tag: ['favorite', 'edm']
    },
    {
        id: 46,
        name: "Peace Of Mind",
        artist: ["Boston"],
        img: "./data/albums/boston__boston.jpg",
        path: "./data/songs/peace-of-mind__boston.mp3",
        album: "Boston",
        backgroundColor: '#812824',
        tag: ['favorite', 'rock']
    },
    {
        id: 47,
        name: "We Built This City",
        artist: ["Starship"],
        img: "./data/albums/knee-deep-in-the-hoopla__starship.jpg",
        path: "./data/songs/we-built-this-city__starship.mp3",
        album: "Knee Deep In The Hoopla",
        backgroundColor: '#525147',
        tag: ['favorite', 'rock']
    },
    {
        id: 48,
        name: 'Burning Heart - From "Rocky IV" Soundtrack',
        artist: ["Survivor"],
        img: "./data/albums/rocky-iv__survivor.jpg",
        path: "./data/songs/burning-heart__survivor.mp3",
        album: "Rocky IV",
        backgroundColor: '#72322e',
        tag: ['favorite', 'rock']
    },
    {
        id: 49,
        name: "Sweet Child O' Mine",
        artist: ["Gun N' Roses"],
        img: "./data/albums/appetite-for-destruction__gun-n-roses.jpg",
        path: "./data/songs/sweet-child-o-mine__guns-n-roses.mp3",
        album: "Appetite For Destruction",
        backgroundColor: '#63212c',
        tag: ['favorite', 'rock']
    },
    {
        id: 50,
        name: "Carry On Wayward Son",
        artist: ["Kansas"],
        img: "./data/albums/leftoverture__kansas.jpg",
        path: "./data/songs/carry-on-wayward-son__kansas.mp3",
        album: "Leftoverture",
        backgroundColor: '#645951',
        tag: ['favorite', 'rock']
    },
    {
        id: 51,
        name: "Who's In Your Head",
        artist: ["Jonas Brothers"],
        img: "./data/albums/setlist-the-remember-this-tour__jonas-brothers.jpg",
        path: "./data/songs/whos-in-your-head__jonas-brothers.mp3",
        album: "Setlist: The Remember This Tour",
        backgroundColor: '#4a6b21',
        tag: ['favorite', 'pop']
    },
    {
        id: 52,
        name: "Seven Nation Army",
        artist: ["The White Stripes"],
        img: "./data/albums/elephant__the-white-stripes.jpg",
        path: "./data/songs/seven-nation-army__the-white-stripes.mp3",
        album: "Elephant",
        backgroundColor: '#bc3204',
        tag: ['favorite', 'rock']
    },
    {
        id: 53,
        name: "Rain",
        artist: ["The Cult"],
        img: "./data/albums/love__the-cult.jpg",
        path: "./data/songs/rain__the-cult.mp3",
        album: "Love",
        backgroundColor: '#071923',
        tag: ['favorite', 'rock']
    },
    {
        id: 54,
        name: "House Of The Rising Sun",
        artist: ["The Animals"],
        img: "./data/albums/the-animals__the-animals.jpg",
        path: "./data/songs/house-of-the-rising-sun__the-animals.mp3",
        album: "The Animals",
        backgroundColor: '#516062',
        tag: ['favorite', 'rock']
    },
    {
        id: 55,
        name: "Hold On (feat. Michel Zitron)",
        artist: ["Martin Garrix", "Matisse & Sadko", "Michel Zitron"],
        img: "./data/singles/hold-on__martin-garrix.jpg",
        path: "./data/songs/hold-on__martin-garrix.mp3",
        album: "Hold On (feat. Michel Zitron)",
        backgroundColor: '#4c4d50',
        tag: ['favorite', 'edm']
    },
    {
        id: 56,
        name: "Stargazing",
        artist: ["Kygo", "Justin Jesso"],
        img: "./data/ep/stargazing-ep__kygo.jpg",
        path: "./data/songs/stargazing__kygo__justin-jesso.mp3",
        album: "Stargazing-EP",
        backgroundColor: '#4c4d50',
        tag: ['favorite', 'edm']
    },
    {
        id: 57,
        name: "It Ain't Me (with Selena Gomez)",
        artist: ["Kygo", "Selena Gomez"],
        img: "./data/singles/it-aint-me__kygo.jpg",
        path: "./data/songs/it-aint-me__kygo__selena-gomez.mp3",
        album: "Stargazing-EP",
        backgroundColor: '#4c4d50',
        tag: ['favorite', 'edm']
    },
    {
        id: 58,
        name: "Higher Love",
        artist: ["Kygo", "Whitney Houston"],
        img: "./data/singles/higher-love__kygo.jpg",
        path: "./data/songs/higher-love__kygo__whitney-houston.mp3",
        album: "Higher Love",
        backgroundColor: '#4c4d50',
        tag: ['favorite', 'edm']
    },
    {
        id: 59,
        name: "Happy Now",
        artist: ["Kygo", "Sandro Cavazza"],
        img: "./data/singles/happy-now__kygo.jpg",
        path: "./data/songs/happy-now__kygo__sandro_cavazza.mp3",
        album: "Happy Now",
        backgroundColor: '#4c4d50',
        tag: ['favorite', 'edm']
    },
    {
        id: 60,
        name: "Firestone",
        artist: ["Kygo", "Conrad Sewell"],
        img: "./data/albums/cloud-nine__kygo.jpg",
        path: "./data/songs/firestone__kygo__conrad-sewell.mp3",
        album: "Cloud Nine",
        backgroundColor: '#4c4d50',
        tag: ['favorite', 'edm']
    },
    {
        id: 61,
        name: "Born To Be Yours",
        artist: ["Kygo", "Imagine Dragons"],
        img: "./data/singles/born-to-be-yours__kygo.jpg",
        path: "./data/songs/born-to-be-yours__kygo__imagine-dragons.mp3",
        album: "Born To Be Yours",
        backgroundColor: '#4c4d50',
        tag: ['favorite', 'edm']
    },
    {
        id: 62,
        name: "Remind Me To Forget",
        artist: ["Kygo", "Miguel"],
        img: "./data/albums/kids-in-love__kygo.jpg",
        path: "./data/songs/remind-me-to-forget__kygo__miguel.mp3",
        album: "Kids In Love",
        backgroundColor: '#4c4d50',
        tag: ['favorite', 'edm']
    },
    {
        id: 63,
        name: "Girls Like You (feat. Cardi B)",
        artist: ["Maroon 5", "Cardi B"],
        img: "./data/albums/red-pill-blues__maroon-5.jpg",
        path: "./data/songs/girls-like-you__maroon-5__cardi-b.mp3",
        album: "Red Pill Blues",
        backgroundColor: '#4c4d50',
        tag: ['favorite', 'pop']
    },
    {
        id: 64,
        name: "What Lovers Do (feat. SZA)",
        artist: ["Maroon 5", "SZA"],
        img: "./data/albums/red-pill-blues__maroon-5.jpg",
        path: "./data/songs/what-lovers-do__maroon-5__sza.mp3",
        album: "Red Pill Blues",
        backgroundColor: '#4c4d50',
        tag: ['favorite', 'pop']
    },
    {
        id: 65,
        name: "Don't Wanna Know (feat. Kendrick Lamar)",
        artist: ["Maroon 5",],
        img: "./data/albums/red-pill-blues__maroon-5.jpg",
        path: "./data/songs/dont-wanna-know-maroon-5__kendrick-lamar.mp3",
        album: "Red Pill Blues",
        backgroundColor: '#4c4d50',
        tag: ['favorite', 'pop']
    },
    {
        id: 66,
        name: "Payphone",
        artist: ["Maroon 5"],
        img: "./data/albums/overexposed__maroon-5.jpg",
        path: "./data/songs/payphone__maroon-5__wiz-khalifa.mp3",
        album: "Overexposed",
        backgroundColor: '#743b53',
        tag: ['favorite', 'pop']
    },
    {
        id: 67,
        name: "Moves Like Jagger - Studio Recording From The Voice Performance",
        artist: ["Maroon 5"],
        img: "./data/albums/overexposed__maroon-5.jpg",
        path: "./data/songs/moves-like-jagger__maroon-5__christina-aguilera.mp3",
        album: "Overexposed",
        backgroundColor: '#743b53',
        tag: ['favorite', 'pop']
    },
    {
        id: 68,
        name: "Maps",
        artist: ["Maroon 5"],
        img: "./data/albums/v__maroon-5.jpg",
        path: "./data/songs/maps__maroon-5.mp3",
        album: "V",
        backgroundColor: '#743b53',
        tag: ['favorite', 'pop']
    },
    {
        id: 69,
        name: "Animals",
        artist: ["Maroon 5"],
        img: "./data/albums/v__maroon-5.jpg",
        path: "./data/songs/animals__maroon-5.mp3",
        album: "V",
        backgroundColor: '#743b53',
        tag: ['favorite', 'pop']
    },
    {
        id: 70,
        name: "Sugar",
        artist: ["Maroon 5"],
        img: "./data/albums/v__maroon-5.jpg",
        path: "./data/songs/sugar__maroon-5.mp3",
        album: "V",
        backgroundColor: '#743b53',
        tag: ['favorite', 'pop']
    },
    {
        id: 71,
        name: "Beautiful Mistakes (feat. Megan Thee Stallion)",
        artist: ["Maroon 5", "Megan Thee Stallion"],
        img: "./data/albums/jordi__maroon-5.jpg",
        path: "./data/songs/beautiful-mistakes__maroon-5__megan-thee-stallion.mp3",
        album: "JORDI",
        backgroundColor: '#743b53',
        tag: ['favorite', 'pop']
    },
    {
        id: 72,
        name: "Memories",
        artist: ["Maroon 5"],
        img: "./data/albums/jordi__maroon-5.jpg",
        path: "./data/songs/memories__maroon-5.mp3",
        album: "JORDI",
        backgroundColor: '#743b53',
        tag: ['favorite', 'pop']
    },
    {
        id: 73,
        name: "Fast Car",
        artist: ["Jonas Blue"],
        img: "./data/albums/blue__jonas-blue.jpg",
        path: "./data/songs/fast-car__jonas-blue__dakota.mp3",
        album: "Blue",
        backgroundColor: '#435864',
        tag: ['favorite', 'edm']
    },
    {
        id: 74,
        name: "Cake By The Ocean",
        artist: ["DNCE"],
        img: "./data/albums/dnce__dnce.jpg",
        path: "./data/songs/cake-by-the-ocean__dnce.mp3",
        album: "DNCE",
        backgroundColor: '#58250e',
        tag: ['favorite', 'pop']
    },
    {
        id: 75,
        name: "High Hopes",
        artist: ["Panic! At The Disco"],
        img: "./data/albums/pray-for-the-wicked__panic-at-the-disco.jpg",
        path: "./data/songs/high-hopes__panic-at-the-disco.mp3",
        album: "Pray For The Wicked",
        backgroundColor: '#084444',
        tag: ['favorite', 'pop']
    },
    {
        id: 76,
        name: "Hey Look Ma I Made It",
        artist: ["Panic! At The Disco"],
        img: "./data/albums/pray-for-the-wicked__panic-at-the-disco.jpg",
        path: "./data/songs/hey-look-ma-i-made-it__panic-at-the-disco.mp3",
        album: "Pray For The Wicked",
        backgroundColor: '#084444',
        tag: ['favorite', 'pop']
    },
    {
        id: 77,
        name: "ME! (feat. Brendon Urie of Panic! At The Disco)",
        artist: ["Taylor Swift", "Brendon Urie", "Panic! At The Disco"],
        img: "./data/albums/lover__taylor-swift.jpg",
        path: "./data/songs/me__taylor-swift__brendon-urie.mp3",
        album: "Lover",
        backgroundColor: '#935f71',
        tag: ['favorite', 'pop']
    },
    {
        id: 78,
        name: "Forever Young",
        artist: ["John De Sohn", "LIAMOO"],
        img: "./data/albums/made-for-you__john-de-sohn.jpg",
        path: "./data/songs/forever-young__john-de-sohn-liamoo.mp3",
        album: "Made For You",
        backgroundColor: '#303030',
        tag: ['favorite', 'edm']
    },
    {
        id: 79,
        name: "Happy Kids",
        artist: ["John De Sohn"],
        img: "./data/albums/made-for-you__john-de-sohn.jpg",
        path: "./data/songs/happy-kids__john-de-sohn-liamoo.mp3",
        album: "Made For You",
        backgroundColor: '#303030',
        tag: ['favorite', 'edm']
    },
    {
        id: 80,
        name: "Got Damn! (W.O.M.A.N)",
        artist: ["John De Sohn", "LIAMOO"],
        img: "./data/singles/got-damn-woman__john-de-sohn.jpg",
        path: "./data/songs/got-damn-woman__john-de-sohn.mp3",
        album: "Got Damn! (W.O.M.A.N)",
        backgroundColor: '#0c4e99',
        tag: ['favorite', 'edm']
    },
    {
        id: 81,
        name: "Wasted Love",
        artist: ["John De Sohn", "Andrelli", "Ramus Hagen"],
        img: "./data/singles/wasted-love__john-de-sohn.jpg",
        path: "./data/songs/wasted-love__john-de-sohn__andrelli__rasmus-hagen.mp3",
        album: "Wasted Love",
        backgroundColor: '#303031',
        tag: ['favorite', 'edm']
    },
    {
        id: 82,
        name: "Radio Ga Ga",
        artist: ["Queen"],
        img: "./data/albums/the-works__queen.jpg",
        path: "./data/songs/radio-ga-ga-remastered-2011__queen.mp3",
        album: "The Works (Deluxe Remastered Version)",
        backgroundColor: '#66645e',
        tag: ['favorite', 'rock']
    },
    {
        id: 83,
        name: "Ta B???u Cho T???ng Th???ng Chum",
        artist: ["Linh Ph????ng"],
        img: "./data/singles/ta-bau-cho-tt-trump__linh-phuong.jpg",
        path: "./data/songs/ta-bau-cho-tt-trump__linh-phuong.mp3",
        album: "Ta B???u Cho T???ng Th???ng Chum",
        backgroundColor: '#aa1e35',
        tag: ['hidden']
    },
    {
        id: 84,
        name: "Censored (remix)",
        artist: ["Ch??? C???"],
        img: "./data/singles/censored-remix__chi-ca.jpg",
        path: "./data/songs/censored-remix__chi-ca.mp3",
        album: "Censored (remix)",
        backgroundColor: '#53534f',
        tag: ['hidden']
    },
    {
        id: 85,
        name: "Super Idol (remix)",
        artist: ["??????"],
        img: "./data/singles/super-idol-remix__a-tu.jpg",
        path: "./data/songs/super-idol-remix__a-tu.mp3",
        album: "??????105??C??????",
        backgroundColor: '#1a132a',
        tag: ['hidden']
    },
]

export const headerList = [
    {
        id: 1,
        name: "Liked Songs",
        description: '',
        owner: "Team12",
        img: "./data/playlists/own-playlists/liked-songs.jpg",
        songs: allSongs,
        backgroundColor: '74, 53, 144',
        headerColor: '32, 22, 64',
        tag: ['own playlist', 'liked songs']
    },
    {
        id: 2,
        name: "All Time Low",
        description: '',
        owner: "Team12",
        img: "./data/playlists/own-playlists/all-time-low.jpg",
        songs: allSongs.filter(song => song.artist.includes('All Time Low')).sort(() => Math.random() - 0.5),
        backgroundColor: '142, 128, 86',
        headerColor: '64, 58, 38',
        tag: ['own playlist',]
    },
    {
        id: 3,
        name: "I Built This Playlist On Rock And Roll",
        description: 'Most of these songs are come from Lost Santos Rock Radio',
        owner: "Team12",
        img: "./data/playlists/own-playlists/i-built-this-playlist-on-rock-and-roll.jpg",
        songs: allSongs.filter(song => song.tag.includes('rock')).sort(() => Math.random() - 0.5),
        backgroundColor: '42, 102, 80',
        headerColor: '16, 42, 32',
        tag: ['own playlist',]
    },
    {
        id: 4,
        name: "Jonas Brothers",
        description: '',
        owner: "Team12",
        img: "./data/playlists/own-playlists/jonas-brothers.jpg",
        songs: allSongs.filter(song => song.artist.includes('Jonas Brothers') || song.artist.includes('DNCE')).sort(() => Math.random() - 0.5),
        backgroundColor: '180, 200, 200',
        headerColor: '80, 90, 90',
        tag: ['own playlist',]
    },
    {
        id: 5,
        name: "Martin Garrix",
        description: '',
        owner: "Team12",
        img: "./data/playlists/own-playlists/martin-garrix.jpg",
        songs: allSongs.filter(song => song.artist.includes('Martin Garrix')).sort(() => Math.random() - 0.5),
        backgroundColor: '13, 54, 75',
        headerColor: '3, 22, 32',
        tag: ['own playlist',]
    },
    {
        id: 6,
        name: "Jonas Blue",
        description: '',
        owner: "Team12",
        img: "./data/playlists/own-playlists/jonas-blue.jpg",
        songs: allSongs.filter(song => song.artist.includes('Jonas Blue')).sort(() => Math.random() - 0.5),
        backgroundColor: '3, 24, 60',
        headerColor: '0, 10, 26',
        tag: ['own playlist',]
    },
]

export const allUsers = [
    {
        id: 1,
        name: "Donal Trump",
        avatarPath: './assets/img/user/donal-trump.jfif',
        latestSongID: '83',
        lastActive: 'online',
    },
    {
        id: 2,
        name: "Dev Nguyen",
        avatarPath: './assets/img/user/dev-nguyen.jpg',
        latestSongID: '84',
        lastActive: '10h',
    },
    {
        id: 3,
        name: "A Tu",
        avatarPath: './assets/img/user/atu.jpg',
        latestSongID: '85',
        lastActive: '1d',
    }
]

renderPlaylist(headerList)
renderUsers(allUsers)


// X??? l?? Made For You
const dailyMixesFactory = {
    data: {
        artistGroup: [
            ["Tobu", "Martin Garrix", "Jonas Blue"],
            ["Kygo", "Martin Jensen", "John De Sohn"],
            ["Tobu", "Jonas Brothers", "Panic! At The Disco"],
            ["Boston", "Starship", "The Cult", "The White Stripes", "The Animals", "Gun N' Roses", "Queen"],
            ["Queen", "Maroon 5", "Justin Bieber"]
        ],
        albumDailyMixes: [

        ]
    },
    createDailyMixer: function () {
        const data = this.data.artistGroup;
        const albumDaily = []
        for (const listArtist of data) {
            let songOfListArtist = [];
            for (const artist of listArtist) {
                const album = allSongs.filter((song) => {
                    return song.artist.includes(artist)
                })
                songOfListArtist = songOfListArtist.concat(album)
            }
            albumDaily.push(songOfListArtist)
        }
        for (const i in data) {
            const playlist = {
                name: `Daily Mixes ${new Number(i) + 1}`,
                id: i,
                description: this.getDescription(data[i]),
                owner: 'Made for Team12',
                img: `./data/playlists/daily-mixes/${data[i][0].toLowerCase()}/daily-mix-${new Number(i) + 1}.jfif`,
                songs: albumDaily[i],
                backgroundColor: '122, 130, 137',
                headerColor: '51, 54, 58',
                tag: ['daily mix']
            }
            this.data.albumDailyMixes.push(playlist)
        }
    },
    getDescription: function (data) {
        const result = data.join(', ')
        return `${result}, and more`
    },
    render: function () {
        const htmls = this.data.albumDailyMixes.map((album, id) => {
            return `
            <div class="body-playlist-item" id-list=${id}>
                <img src="./assets/img/main/headnav/play-now.png" alt="" class="body-list-play hide">
                <img src=${album.img} alt="">
                <a href="#" class="body-playlist-item-header font-16">${album.name}</a>
                <a href="#" class="font-14 album-decription" style="margin-top: 4px;">${album.description}</a>
            </div>
            `
        });
        listMadeForYou.innerHTML = htmls.join('')
    },
    start: function () {
        this.createDailyMixer();
        this.render()
    }
}

dailyMixesFactory.start()
export const albumDailyMixes = dailyMixesFactory.data.albumDailyMixes


//X??? l?? Best of artist
export const bestOfArtistList = [
    {
        id: 1,
        name: "All Time Low",
        description: 'The best of All Time Low, all in one playlist.',
        owner: "Spotify",
        img: "./data/playlists/best-of-artist/AllTimeLow.jfif",
        songs: allSongs.filter(song => song.artist.includes('All Time Low')).sort(() => Math.random() - 0.5),
        backgroundColor: '204, 78, 78',
        headerColor: '86, 32, 32',
        tag: ['best of artist',]
    },
    {
        id: 2,
        name: "Jonas Blue",
        description: 'This is Jonas Blue. The essential tracks, all in one playlist.',
        owner: "Spotify",
        img: "./data/playlists/best-of-artist/JonasBlue.jfif",
        songs: allSongs.filter(song => song.artist.includes('Jonas Blue')).sort(() => Math.random() - 0.5),
        backgroundColor: '110, 141, 194',
        headerColor: '45, 57, 80',
        tag: ['best of artist',]
    },
    {
        id: 3,
        name: "Jonas Brothers",
        description: 'All the essentials in one playlist.',
        owner: "Spotify",
        img: "./data/playlists/best-of-artist/JonasBrothers.jfif",
        songs: allSongs.filter(song => song.artist.includes('Jonas Brothers') || song.artist.includes('DNCE')).sort(() => Math.random() - 0.5),
        backgroundColor: '147, 139, 169',
        headerColor: '61, 57, 70',
        tag: ['best of artist',]
    },
    {
        id: 4,
        name: "Kygo",
        description: "The essential Norwegian DJ's tracks and remixes.",
        owner: "Spotify",
        img: "./data/playlists/best-of-artist/Kygo.jfif",
        songs: allSongs.filter(song => song.artist.includes('Kygo')),
        backgroundColor: '125, 201, 193',
        headerColor: '51, 83, 80',
        tag: ['best of artist',]
    },


    {
        id: 5,
        name: "Maroon 5",
        description: 'The essential tracks by the Dutch DJ and producer.',
        owner: "Spotify",
        img: "./data/playlists/best-of-artist/Maroon5.jfif",
        songs: allSongs.filter(song => song.artist.includes('Maroon 5')),
        backgroundColor: '132, 199, 192',
        headerColor: '54, 83, 80',
        tag: ['best of artist',]
    },
]
renderBestOfArtistList()


const recentlyPlayed = {
    data: headerList.concat(albumDailyMixes, bestOfArtistList).sort(() => Math.random() - 0.5).slice(0, 5),
    render: function () {
        const htmls = this.data.map((list, id) => {
            return `
            <div class="body-playlist-item" id-list=${id}>
                <img src="./assets/img/main/headnav/play-now.png" alt="" class="body-list-play hide">
                <img src=${list.img} alt="">
                <a href="#" class="body-playlist-item-header font-16">${list.name}</a>
                <a href="#" class="font-14 album-decription" style="margin-top: 4px;">${list.description}</a>
            </div>
            `
        })
        listRecentlyPlayed.innerHTML = htmls.join('')
    },

    start: function () {
        this.render()
    }
}

recentlyPlayed.start()
export const recentlyPlayedList = recentlyPlayed.data


function renderBestOfArtistList() {
    const htmls = bestOfArtistList.map((list, id) => {
        return `
        <div class="body-playlist-item" id-list=${id}>
            <img src="./assets/img/main/headnav/play-now.png" alt="" class="body-list-play hide">
            <img src=${list.img} alt="">
            <a href="#" class="body-playlist-item-header font-16">This Is ${list.name}</a>
            <a href="#" class="font-14 album-decription" style="margin-top: 4px;">${list.description}</a>
        </div>
        `
    })
    listBestofartist.innerHTML = htmls.join('')
}


function renderPlaylist() {
    const playLists = headerList.map((list, id) => {
        return `
        <li class="dis-flex-row mainhead-connav-item" id-list=${id} id = "mainhead-connav-item-${id}">
            <img src=${list.img} class="list-img" alt="">
            <div class="head-navin4 dis-flex-row">
                <h2 class="nav-namenav-name font-16 font-14tab font-10mob">${list.name}</h2>
                <img src="./assets/img/main/headnav/play-now.png" class="nav-play hide" alt="">
            </div>
        </li>
        `
    })
    mainHeaderConNav.innerHTML = playLists.join('')
}
function renderUsers(users) {
    const usersList = users.map(user => {
        const song = allSongs[user.latestSongID - 1]

        return `
        <div class="right-user">
            <div class="right-user-avatar">
                <img src="${user.avatarPath}" alt="">
            </div>
            <div class="right-user-content">
                <div class="right-user-content-nameactive">
                    <span>${user.name}</span>
                    <div>
                        <img src="./assets/img/right-sidebar/listening.png" alt="">
                    </div>
                </div>
                <div class="right-user-content-music">
                    <div class="right-user-content-music-song">
                        <span class="right-user-content-music-song__name">${song.name}</span>
                        <img src="./assets/img/right-sidebar/dot.png" alt="">
                        <span class="right-user-content-music-song__artist">${song.artist}</span>
                    </div>
                    <div class="right-user-content-music-owner">
                        <img src="./assets/img/right-sidebar/playlist.png" alt="">
                        <span>${song.album}</span>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    rightUsers.innerHTML = usersList.join('')
}
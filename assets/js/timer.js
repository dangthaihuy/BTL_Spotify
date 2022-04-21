var timer = document.getElementById('timer-head');
var time = new Date();
var hour = time.getHours();

if (hour < 12) {
    timer.innerText = 'Good Morning';
} else if (hour >= 12 && hour < 19) {
    timer.innerText = 'Good Afternoon';
} else {
    timer.innerText = 'Good Evening';
}
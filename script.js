function updateClock() {
    let clockElement = document.getElementById('clock');
    let now = new Date();
    clockElement.textContent = now; 
}
let greetBtn = document.getElementById('greetBtn');
let greetingElement = document.getElementById('greeting');

greetBtn.addEventListener('click', function() {
    let now = new Date();
    let hours = now.getHours();
    if (hours < 12) {
        greetingElement.textContent = "Good Morning!";
    } else if (hours < 18) {
        greetingElement.textContent = "Good Afternoon!";
    } else {
        greetingElement.textContent = "Good Evening!";
    }
});

setInterval(updateClock, 1000);
updateClock();
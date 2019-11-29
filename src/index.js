let start_btn = document.getElementById('start-btn');
let directions_div = document.getElementById('directions');
let quiz = document.getElementById('quiz');
let counter_span = document.getElementsByClassName('counter')[0];
let countdown_div = document.getElementById('countdown');
let overlay_div = document.getElementsByClassName('overlay')[0];

let deck = [];

function getRandom() {
    for(let i = 0; i < 10; i++) {
        let char = characters[Math.floor(Math.random() * characters.length)];
        if(deck.indexOf(char) == -1) {
            deck.push(char);
        }
    }
} 

function showQuiz() {
    quiz.classList.add('fadein');
    setTimeout(function(){
        quiz.classList.remove('hidden');
    }, 1000);
}

function decreaseCounter(callback, delay, reps) {
    let x = 0;
    let intervalId = window.setInterval(function() {
        callback();
        x++;
        if(x === reps) {
            window.clearInterval(intervalId);
            counter_span.innerHTML = 'GO!';
            counter_span.classList.add('fadeout');
            setTimeout(function() {
                counter_span.classList.add('hidden');
                overlay_div.style.display = 'none';
            }, 1000);
            
        }
    }, delay);
    
}

function startCountdown() {
    decreaseCounter(function() {
        counter_span.innerHTML--;
    }, 1000, 3);
}

function hideDirectionsAndStart() {
    console.log("hiding..");
    directions_div.classList.add('fadeout');
    start_btn.classList.add('fadeout');
    setTimeout(function(){
        directions_div.classList.add('hidden');
        start_btn.classList.add('hidden');
        countdown_div.style.display = 'flex';
        overlay_div.classList.add('fadein')
        overlay_div.classList.remove('hidden');
        startCountdown();
    }, 1000);
}
 

start_btn.addEventListener('click', function() {
    getRandom();
    console.log('clicked start');
    start_btn.disabled = 'disabled';
    setTimeout(hideDirectionsAndStart, 500);
})


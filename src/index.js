let start_btn = document.getElementById('start-btn');
let directions_div = document.getElementById('directions');
let quiz = document.getElementById('quiz');


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


function hideDirectionsAndStart() {
    console.log("hiding..");
    directions_div.classList.add('fadeout');
    start_btn.classList.add('fadeout');
    setTimeout(function(){
        directions_div.classList.add('hidden');
        start_btn.classList.add('hidden');
    }, 500);
    showQuiz();
}
 

start_btn.addEventListener('click', function() {
    getRandom();
    console.log('clicked start');
    setTimeout(hideDirectionsAndStart, 500);
})


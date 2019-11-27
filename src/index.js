const Game = require('./quiz');

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('flashcards ready to go');
    let quiz = new quiz();
    quiz.start();
    console.log(quiz.deck);
});





// import { getRandom } from '../characters/characters';

// var directions_div = document.getElementById('directions');
// var start_btnn = document.getElementsByClassName('start-btn')[0];
// var quiz_div = document.getElementById('quiz');

// function clickStart() {
//     directions_div.classList.add('fadeout');
//     start_btnn.classList.add('fadeout');
//     setTimeout(function() {
//         shuffle();
//         showQuiz();
//     }, 500);
// }

// function clickRestart() {
    
//     setTimeout(function() {
//         quiz_div.classList.remove('fadein');
        
//     }, 500);

// }

// function showQuiz() {
//     directions_div.classList.add('hidden');
//     start_btnn.classList.add('hidden');
//     quiz_div.classList.remove('hidden');

//     setTimeout(function() {
//         quiz_div.classList.add('fadein');
//     }, 1000);
// }

// function shuffle() {
//     var 
// }

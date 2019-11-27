
var directions_div = document.getElementById('directions');
var start_btnn = document.getElementsByClassName('start-btn')[0];
var quiz_div = document.getElementById('quiz');

function clickStart() {
    directions_div.classList.add('fadeout');
    start_btnn.classList.add('fadeout');
    setTimeout(function() {
        showQuiz();
    }, 500);
}

function clickRestart() {
    
    setTimeout(function() {
        quiz_div.classList.remove('fadein');
        
    }, 500);

}

function showQuiz() {
    directions_div.classList.add('hidden');
    start_btnn.classList.add('hidden');
    quiz_div.classList.remove('hidden');

    setTimeout(function() {
        quiz_div.classList.add('fadein');
    }, 1000);
}

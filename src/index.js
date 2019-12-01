let start_btn = document.getElementById('start-btn');
let restart_btn = document.getElementById('restart-btn');
let directions_div = document.getElementById('directions');
let quiz = document.getElementById('quiz');
let counter_span = document.getElementsByClassName('counter')[0];
let countdown_div = document.getElementById('countdown');
let overlay_div = document.getElementsByClassName('overlay')[0];
let deckFlashcards_div = document.getElementsByClassName('deck')[1];
let practice_div = document.getElementById('practice');

const deck = [];

function hideShowCards() {
    practice_div.classList.add('fadeout');
    setTimeout(function () {
        practice_div.classList.add('hidden');
        practice_div.classList.remove('fadeout');
    }, 2500);
}

function fadeCard(card, delay) {
    setTimeout(function () {
        card.classList.add('fadeout');
        setTimeout(function () {
            card.classList.add('invisible')
        }, delay - (delay * .20));
    }, delay - (delay * .8));
}

function createCard(zi, delay) {
    let char, def, py;
    let c = zi;
    char = c.character;
    def = c.definition;
    py = c.pinyin

    let card = document.createElement('div');
    let definition = document.createElement('div');
    let pinyin = document.createElement('div');
    let character = document.createElement('div');

    card.className = 'card';
    character.id = 'character';
    definition.className = 'definition';
    pinyin.className = 'pinyin';
    let writer = HanziWriter.create(character, char, {
        width: 100, height: 100, padding: 0
    })

    pinyin.innerHTML = py;
    definition.innerHTML = def;
    card.appendChild(character);
    card.appendChild(definition);
    card.appendChild(pinyin);
    card.classList.add('fadein');
    practice_div.appendChild(card);
    fadeCard(card, delay);
}

function removePractice() {
    practice_div.classList.add('fadeout');
    setTimeout(function () {
        practice_div.classList.add('hidden');
        practice_div.classList.remove('fadeout');
    }, 4000);
}

function showCards() {
    practice_div.classList.add('fadein');
    setTimeout(function() {
        practice_div.classList.remove('fadein');
        practice_div.classList.remove('hidden');
    }, 2000);
    
    let i = 0;
    let delay = 3000;
    let intervalId = setInterval(nextCard, delay);
    
    function nextCard() {
        if(i === deck.length) {
            clearInterval(intervalId);
            removePractice();
        } else{
            createCard(deck[i], delay);
            i++;
        }
    }  
}


function getRandom() {
    let randomI, char;
    for(let i = 0; i < 10; i++) {
        randomI = Math.floor(Math.random() * characters.length);
        char = characters[randomI];
        if(deck.indexOf(char) === -1) {
            deck.push(char);
        } else {
            i--;
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
                counter_span.classList.remove('fadeout');
                overlay_div.style.display = 'none';
                countdown_div.style.display = 'none';
            }, 1000);
            showCards();
        }
    }, delay);    
}

function startCountdown() {
    decreaseCounter(function() {
        counter_span.innerHTML--;
    }, 1000, 3);
}

function hideDirectionsAndStart() {
    directions_div.classList.add('fadeout');
    start_btn.classList.add('fadeout');
    setTimeout(function(){
        directions_div.classList.add('hidden');
        start_btn.classList.add('hidden');
        directions_div.classList.remove('fadeout');
        start_btn.classList.remove('fadeout');
        countdown_div.style.display = 'flex';
        overlay_div.classList.remove('hidden');
        startCountdown();
    }, 1000);
}

function clearAll() {
    practice_div.classList.add(hidd)
}


start_btn.addEventListener('click', function() {
    getRandom();
    start_btn.disabled = 'disabled';
    setTimeout(hideDirectionsAndStart, 500);
});

restart_btn.addEventListener('click', function() {
    getRandom();
    restart_btn.disabled = 'disabled';
    setTimeout(clearAll, 500);
});


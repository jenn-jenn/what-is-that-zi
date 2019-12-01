let start_btn = document.getElementById('start-btn');
let directions_div = document.getElementById('directions');
let quiz = document.getElementById('quiz');
let counter_span = document.getElementsByClassName('counter')[0];
let countdown_div = document.getElementById('countdown');
let overlay_div = document.getElementsByClassName('overlay')[0];
let deckFlashcards_div = document.getElementsByClassName('deck')[1];
let practice_div = document.getElementById('practice');
let practice_char = document.querySelectorAll('#practice > .card > #character')[0];
let practice_def = document.querySelectorAll('#practice > .card > .definition')[0];
let practice_pinyin = document.querySelectorAll('#practice > .card > .pinyin')[0];

const deck = [];

function createFlashcards() {
    let char, def, pinyin, newCard, front, back, character, p, charID;
    let img = document.createElement('img');
    img.src = '/img/backface.png';

    for (let i = 0; i < 1; i++) {
        char = deck[i].character;
        def = deck[i].definition;
        pinyin = deck[i].pinyin;
        newCard = document.createElement('div');
        newCard.className = 'flashcard';

        front = document.createElement('div');
        front.className = 'front';

        back = document.createElement('div');
        back.className = 'back';
        character = document.createElement('div');
        charID = 'character'
        character.id = charID;
            
        let writer = HanziWriter.create(character, char, {
            width: 40, height: 40, padding: 0
        });

        p = document.createElement('p');
        p.className = 'definition'
        p.innerHTML = def;
        front.appendChild(character);
        front.appendChild(p);
        back.appendChild(img);  
        newCard.appendChild(front);
        newCard.appendChild(back);
        deckFlashcards_div.append(newCard);
    }   
}


function showCards() {
    practice_div.classList.add('fadein');

    setTimeout(function() {
        practice_div.classList.remove('fadein');
        practice_div.classList.remove('hidden');
    }, 2000);
    
    let i = 0;
    let intervalId = setInterval(nextCard, 500);
    let char, def, pinyin;

    function nextCard() {
        if(i === deck.length) {
            clearInterval(intervalId);
            hideShowCards();
        } else{
            let svg = document.querySelectorAll('svg')[0];
            console.log(svg);
            if(svg){
                svg.remove();
            }
            
            let c = deck[i];
            char = c.character;
            def = c.definition;
            pinyin = c.pinyin

            let writer = HanziWriter.create(practice_char, char, {
                width: 100, height: 100, padding: 0
            });

            practice_pinyin.innerHTML = pinyin;
            practice_def.innerHTML = def;
            i++;
        }
    }  
}


function hideShowCards() {
    practice_div.classList.add('fadeout');
    setTimeout(function () {
        practice_div.classList.add('hidden');
    }, 2500);
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
    // createFlashcards();
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
        countdown_div.style.display = 'flex';
        overlay_div.classList.remove('hidden');
        startCountdown();
    }, 1000);
}

start_btn.addEventListener('click', function() {
    getRandom();
    console.log('clicked start');
    console.log(deck);
    start_btn.disabled = 'disabled';
    setTimeout(hideDirectionsAndStart, 500);
})


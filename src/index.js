let start_btn = document.getElementById('start-btn');
let restart_btn = document.getElementById('restart-btn');
let directions_div = document.getElementById('directions');
let quiz_div = document.getElementById('quiz');
let counter_span = document.getElementsByClassName('counter')[0];
let countdown_div = document.getElementById('countdown');
let overlay_div = document.getElementsByClassName('overlay')[0];
let leftDeck_div = document.getElementById('left-deck');
let rightDeck_div = document.getElementById('right-deck');
let practice_div = document.getElementById('practice');

let intervalId;

let testing = document.getElementById('testing');

let deck = [];
let wrong = [];
let correct = [];

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
        let children = practice_div.childNodes;
        for(i = 0; i < children.length; i++){
            children[i].classList.remove('fadeout');
            children[i].classList.remove('fadein');
            children[i].classList.remove('invisible');
        }
        showQuiz();
    }, 2000);
}

function showCards() {
    practice_div.classList.add('fadein');
    setTimeout(function() {
        practice_div.classList.remove('hidden');
        practice_div.classList.remove('fadein');
    }, 2000);
    
    let i = 0;
    let delay = 3000;
    intervalId = setInterval(nextCard, delay);
    
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

function createQuizCard(zi) {

    console.log('creating quiz card');
    let char, realDef, def1, py, left;
    let c = zi;
    char = c.character;
    realDef = c.definition;
    py = c.pinyin
    
    randomNum = Math.floor(Math.random() * characters.length);
    while(characters[randomNum].character === char) {
        randomNum = Math.floor(Math.random() * characters.length);
    }
    left = Math.floor(Math.random() * 2); 
    // if 0 left, 1 right
    def1 = characters[randomNum].definition;


    let card = document.createElement('div'); 
    let quizCard = document.createElement('div');
    let pinyin = document.createElement('div');
    let character = document.createElement('div');
    let choice_section = document.createElement('section');
    let choice_one = document.createElement('div');
    let choice_two = document.createElement('div');

    card.className = 'card';
    quizCard.className = 'quiz-card';
    character.id = 'character';
    pinyin.className = 'pinyin';

    let writer = HanziWriter.create(character, char, {
        width: 150, height: 150, padding: 0
    })
    pinyin.innerHTML = py;
    quizCard.appendChild(character);
    quizCard.appendChild(pinyin);
    quizCard.classList.add('fadein');
    
    choice_section.className = 'choice-section'
    choice_one.id = 'c1';
    choice_two.id = 'c2';

    if(left === 0){
        choice_one.innerHTML = realDef;
        choice_two.innerHTML = def1;
    } else {
        choice_one.innerHTML = def1;
        choice_two.innerHTML = realDef;
    }
    choice_section.appendChild(choice_one);
    choice_section.appendChild(choice_two);
    card.appendChild(quizCard);
    card.appendChild(choice_section);
    quiz_div.appendChild(card);
}

function showQuiz() {
    console.log('showing quiz')
    quiz_div.classList.add('fadein');
    quiz_div.classList.remove('hidden');

    for(let i = 0; i < deck.length; i++){
        createQuizCard(deck[i]);
    }
}

function decreaseCounter(callback, delay, reps) {
    let x = 0;
    
    let intervalId = setInterval(function() {
        callback();
        x++;
        if(x === reps) {
            clearInterval(intervalId);
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
    console.log(x);

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
    practice_div.classList.add('hidden');
    quiz_div.classList.add('hidden');
    leftDeck_div.classList.add('hidden');
    rightDeck_div.classList.add('hidden');
    if(intervalId){
        clearInterval(intervalId);
    }
    counter_span.innerHTML = 3;
    counter_span.classList.add('fadein');
    counter_span.classList.remove('hidden');
    overlay_div.style.display = 'flex';
    countdown_div.style.display = 'flex';
    
    setTimeout(startCountdown, 1000);
}

start_btn.addEventListener('click', function() {
    getRandom();
    console.log(deck);
    start_btn.disabled = 'disabled';
    setTimeout(hideDirectionsAndStart, 500);
});

restart_btn.addEventListener('click', function() {
    console.log('restarting....');
    console.log(deck);
    correct = [];
    wrong = [];
    restart_btn.disabled = 'disabled';
    setTimeout(clearAll, 500);
});


testing.addEventListener('click', function() {
    getRandom();
    showQuiz();
})


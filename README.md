# README

## What is That Zi?!

### Overview
<em>What is that Zi?!</em> is an interactive flashcard/quiz that teaches users a few Chinese characters at a quick pace. Flashcards will show up for about 3 seconds each and then the quiz will start. There will be 2 answer choices with the definition. Choosing the correct one will place the card on the left hand side, otherwise it will be on the right side. Currently, Restart will restart with the current set of words. In the new future, I plan to add selections to either restart with current or new sets.

### Technologies
+ JavaScript
+ HTML5
+ CSS3

### Feature Highlights

#### Start, Restart, End
Users are able to click on these buttons to either begin, restart, or end the quiz

![alt text](https://user-images.githubusercontent.com/16752858/71553903-145e1a00-29cc-11ea-846c-d8e68396f37a.png)
 "Start Page")

#### Show cards 
Cards will be shown for about 3 seconds each, one at a time

![alt text](https://github.com/jenn-jenn/what-is-that-zi/blob/master/img/flashcard.png "Show card")

#### Placement of cards upon selecting answer
Card will be placed in the correct spot.

![alt text](https://github.com/jenn-jenn/what-is-that-zi/blob/master/img/placement.png "Placement of card")

### Challenges
One of the challenges was trying to get the correct card when selecting an answer choice. Because the `click` event was attached to the answer choices, it was hard to tell which was the current card I want to work with. What I thought of was adding a `current` class to all the cards, and when I'm checking for the answer, I will look for the last child of that class and remove it. Therefore, each time I go through the quiz cards, the last child would be the card below the card I moved.

### Code Snippet
I utilized the `data-answer` attribute to mark whether a card is the correct answer or not, and then later use it to check for the correct answer upon clicking on one of the choices. 

``` javascript
    if(left === 0){
        choice_one.innerHTML = realDef;
        choice_one.setAttribute('data-answer', 'true')
        choice_two.innerHTML = def1;
        choice_two.setAttribute('data-answer', 'false')
    } else {
        choice_one.innerHTML = def1;
        choice_one.setAttribute('data-answer', 'false')
        choice_two.innerHTML = realDef;
        choice_two.setAttribute('data-answer', 'true')
    }
```

``` javascript
    if(e.target.dataset.answer === 'true') {
        progressBar.value += 10;
        ptLabel.innerHTML++; 
        thisCard.classList.add('moveleft');
        thisCard.style.zIndex = zIndex;
    } else {
        thisCard.classList.add('moveright');
        thisCard.style.zIndex = zIndex;
    }
```

#### Future Goal
+ Better layout styling
+ Let user choose whether to restart with current words or with new words
+ Refactor JS and CSS code
+ Add better animations
+ Possibly add pronunciation audio

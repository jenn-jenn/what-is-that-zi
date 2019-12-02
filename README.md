# README

## What is That Zi?!

Live application: [What is that Zi?!](https://what-is-that-zi.herokuapp.com/)

### Overview
<em>What is that Zi?!</em> is an interactive flashcard/quiz that teaches users a few Chinese characters at a quick pace. Flashcards will show up for about 3 seconds each and then the quiz will start. There will be 2 answer choices with the definition. Choosing the correct one will place the card on the left hand side, otherwise it will be on the right side. Currently, Restart will restart with the current set of words. In the new future, I plan to add selections to either restart with current or new sets.

### Technologies
+ JavaScript
+ HTML5
+ CSS3

### Feature Highlights

#### Start, restart, end
Users are able to click on these buttons to either begin, restart, or end the quiz

![alt text](https://github.com/jenn-jenn/what-is-that-zi/blob/master/img/start.png "Start Page")

#### Show cards 
Cards will be shown for about 3 seconds each, one at a time

![alt text](https://github.com/jenn-jenn/what-is-that-zi/blob/master/img/flashcard.png "Show card")

#### Placement of cards upon selecting answer
Card will be placed in the correct spot.

![alt text](https://github.com/jenn-jenn/what-is-that-zi/blob/master/img/placement.png "Placement of card")

### Challenges
One of the challenges was trying to get the correct card when selecting an answer choice. Because the `click` event was attached to the answer choices, it was hard to tell which was the current card I want to work with. What I thought of was adding a `current` class to all the cards, and when I'm checking for the answer, I will look for the last child of that class and remove it. Therefore, each time I go through the quiz cards, the last child would be the card below the card I moved.

#### Future Goal
+ Better layout styling
+ Let user choose whether to restart with current words or with new words
+ Refactor JS and CSS code
+ Add better animations
+ Possibly add pronunciation audio

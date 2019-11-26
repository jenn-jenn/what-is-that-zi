var writer = HanziWriter.create('character', '我', {
    width: 100,
    height: 100,
    padding: 5
});

const card = document.getElementsByClassName('flashcards');

card[0].addEventListener('click', flip)

function flip() {   
    console.log(this)
}
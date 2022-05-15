const cardArray = [
    {
        name: 'fries',
        img: "/images/Aletter.png",
        alt: "image1"
    },
    {
        name: 'cheeseburger',
        img: "/images/Bletter.png",
        alt: "image2"
    },
    {
        name: 'hotdog',
        img: "/images/Cletter.png",
        alt: "image3"
    },
    {
        name: 'ice-cream',
        img: "/images/Dletter.png",
        alt: "image4"
    },
    {
        name: 'milkshake',
        img: "/images/Eletter.png",
        alt: "image5"
    },
    {
        name: 'pizza',
        img: "/images/Fletter.png",
        alt: "image6"
    },
    {
        name: 'fries',
        img: "/images/lettera.png",
        alt: "image7"
    },
    {
        name: 'cheeseburger',
        img: "/images/letterb.png",
        alt: "image8"
    },
    {
        name: 'hotdog',
        img: "/images/letterc.png",
        alt: "image9"
    },
    {
        name: 'ice-cream',
        img: "/images/letterd.png",
        alt: "image10"
    },
    {
        name: 'milkshake',
        img: "/images/lettere.png",
        alt: "image11"
    },
    {
        name: 'pizza',
        img: "/images/letterf.png",
        alt: "image12"
    },
]

cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
let cardsAlt = [];
const cardsWon = [];


function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.setAttribute('width', '100px')
        card.setAttribute('height', '100px')
        card.setAttribute('alt', cardArray[i].alt);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
}

createBoard();

function checkMatch () {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];


    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a macth')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again')
    }

    if (cardsAlt[0] == cardsAlt[1]) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cards[optionOneId].addEventListener('click', flipCard)
        cards[optionTwoId].addEventListener('click', flipCard)
        cardsWon.pop()
        alert('You clicked the same cards')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsAlt = []
    cardsChosenIds = []


    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulation you found them all'
    }
}

function flipCard() {
    console.log(cardArray);
    const cardId = this.getAttribute('data-id');
    cardsAlt.push(cardArray[cardId].alt);
    console.log(cardsAlt)
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}











console.log(cardsChosen)
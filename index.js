let player = {
    name: "Seda", 
    chips: 200
}


let isAlive = false
let hasBlackJack = false
let messageInfo = document.getElementById("message-info")
let cardsInfo = document.getElementById("cards_info")
let sumInfo = document.getElementById("sum-info")
let playerInfo = document.getElementById("player-info")

playerInfo.textContent = player.name + ": $" + player.chips

let cards = []
let sum = 0
let message = ""

function getRandomCard() {
    let randomNumber = Math.floor (Math.random()*13)+1
    if (randomNumber > 10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else {
        return randomNumber 
    }
}


 
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsInfo.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsInfo.textContent += cards[i] + " "
    }
    sumInfo.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
        
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        isAlive = false
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageInfo.textContent = message
       
}

function newCard() {
    if(isAlive === true || hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }

    
    
}
 

    
    


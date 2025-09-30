const btnHomeOne = document.getElementById("btn-home-1")
const btnHomeTwo = document.getElementById("btn-home-2")
const btnHomeThree = document.getElementById("btn-home-3")
const btnGuestOne = document.getElementById("btn-guest-1")
const btnGuestTwo = document.getElementById("btn-guest-2")
const btnGuestThree = document.getElementById("btn-guest-3")

const scoreHomeDiv = document.getElementById("score-home")
const scoreGuestDiv = document.getElementById("score-guest")

const btnRestart = document.getElementById("btn-restart")

let scoreHome = 0
let scoreGuest = 0

function scoreSetup() {
    scoreHomeDiv.textContent = scoreHome
    scoreGuestDiv.textContent = scoreGuest
}

btnHomeOne.addEventListener("click", function(){
    // let score = Number(scoreHomeDiv.textContent)
    scoreHome += 1
    scoreHomeDiv.textContent = scoreHome
})

btnHomeTwo.addEventListener("click", function(){
    // let score = Number(scoreHomeDiv.textContent)
    scoreHome += 2
    scoreHomeDiv.textContent = scoreHome
})
btnHomeThree.addEventListener("click", function(){
    // let score = Number(scoreHomeDiv.textContent)
    scoreHome += 3
    scoreHomeDiv.textContent = scoreHome
})

btnGuestOne.addEventListener("click", function(){
    // let score = Number(scoreGuestDiv.textContent)
    scoreGuest += 1
    scoreGuestDiv.textContent = scoreGuest
})

btnGuestTwo.addEventListener("click", function(){
    // let score = Number(scoreGuestDiv.textContent)
    scoreGuest += 2
    scoreGuestDiv.textContent = scoreGuest
})

btnGuestThree.addEventListener("click", function(){
    // let score = Number(scoreGuestDiv.textContent)
    scoreGuest += 3
    scoreGuestDiv.textContent = scoreGuest
})

btnRestart.addEventListener("click", function(){
    scoreHome = 0
    scoreGuest = 0
    scoreSetup()
})

scoreSetup()
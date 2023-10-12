let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let ElGest =document.getElementById("gest")
let ElNew =document.getElementById("new")
let Elcontainer =document.getElementById("container")
// import Confetti from 'react-confetti'
let homeScore = 0
let homeScore1 = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}
function ScoreOne(){
    homeScore1 += 1
    ElGest.textContent = homeScore1
}

function ScoreTwo(){
    homeScore1 += 2
    ElGest.textContent = homeScore1
}
function ScoreThree(){
    homeScore1 += 3
    ElGest.textContent = homeScore1
}
// function newf(e){
// homeStoreEl = 0
// homeStoreEl.innerHTML = 0
// ElGest = 0
// ElGest.innerHTML = 0



    
// }
// if(homeScore > homeScore1){
//     return Confetti()
// }
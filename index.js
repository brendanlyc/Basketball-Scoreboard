
let home_score = 0
let guest_score = 0

let home_score_display = document.getElementById("home-score")
let guest_score_display = document.getElementById("guest-score")

function incrementHomeOne() {
    home_score += 1
    home_score_display.innerText = home_score
}

function incrementHomeTwo() {
    home_score += 2
    home_score_display.innerText = home_score
}

function incrementHomeThree() {
    home_score += 3
    home_score_display.innerText = home_score
}

function incrementGuestOne() {
    guest_score += 1
    guest_score_display.innerText = guest_score
}

function incrementGuestTwo() {
    guest_score += 2
    guest_score_display.innerText = guest_score

}

function incrementGuestThree() {
    guest_score += 3
    guest_score_display.innerText = guest_score

}

function newGame() {
    guest_score = 0
    home_score = 0
    guest_score_display.innerText = guest_score
    home_score_display.innerText = home_score
}

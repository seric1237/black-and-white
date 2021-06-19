input.onButtonPressed(Button.A, function () {
    if (player1 > player2) {
        basic.showString("Player1 won!")
        P1_score = P1_score + 1
    }
    if (player1 < player2) {
        basic.showString("Player2 won!")
        P2_score = P2_score + 1
    }
    if (player1 == player2) {
        basic.showString("Draw")
    }
    for (let index = 0; index < 3; index++) {
        basic.showNumber(P1_score)
        basic.pause(1000)
    }
    for (let index = 0; index < 3; index++) {
        basic.showNumber(P2_score)
        basic.pause(1000)
    }
    player1 = 0
    player2 = 0
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        basic.showNumber(P1_score)
        basic.pause(1000)
    }
    for (let index = 0; index < 3; index++) {
        basic.showNumber(P2_score)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(2)
    P1_score = 0
    P2_score = 0
    player1 = 0
    player2 = 0
    basic.showString("reset")
})
radio.onReceivedValue(function (name, value) {
    if (name == "P1") {
        player1 = value
    }
    if (name == "P2") {
        player2 = value
    }
})
let player2 = 0
let player1 = 0
let P2_score = 0
let P1_score = 0
radio.setGroup(2)
P1_score = 0
P2_score = 0
player1 = 0
player2 = 0

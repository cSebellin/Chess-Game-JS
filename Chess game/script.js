const board = document.getElementById('board')
const A8 = document.getElementById('A8')
const squares = document.querySelectorAll('square')
let destination = " "
console.log(destination);
let piece = ""

let firstClickID = ""

function getfirstClick() {
    const
}

function sendDestination() {
    destination = document.getElementById('destination').innerText
}

sendDestination()

A8.addEventListener('click', () => {
    piece = A8.innerHTML
    destination.innerHTML = piece
    A8.innerHTML = ""

})
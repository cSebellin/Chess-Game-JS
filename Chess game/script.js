import A8 from './controllers/board'
import B8 from './controllers/board'
import C8 from './controllers/board'
import D8 from './controllers/board'
import E8 from './controllers/board'

const board = document.getElementById('board')
const A8 = document.getElementById('A8')
const squares = document.querySelectorAll('square')
let destination = " "
console.log(destination);
let piece = ""

function sendDestination() {
    destination = document.getElementById('destination').innerText
}

sendDestination()

A8.addEventListener('click', () => {
    piece = A8.innerHTML
    destination.innerHTML = piece
    A8.innerHTML = ""

})
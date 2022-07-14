"use-strict";
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const check = document.querySelector('.check');
const reset = document.querySelector('.reset');
const input = document.querySelector('.control-input');
const message = document.querySelector('#message');
let myNumber = Math.trunc((Math.random() * 20) + 1);
score.textContent = 20;
highscore.textContent = 0;
function messageText(msg) {
    message.textContent = msg;
}
check.addEventListener('click', function () {
    if ((Number(input.value) <= 0 || Number(input.value) > 20)) {
        messageText('Between 1 and 20!');
        message.style.color = 'orange';
    } else {
        if (Number(input.value) < myNumber && score.textContent > 1) {
            messageText('Too Low!');
            score.textContent = score.textContent - 1;
            message.style.color = 'red';
        } else if (Number(input.value) > myNumber && score.textContent > 1) {
            messageText('Too High!');
            score.textContent = score.textContent - 1;
            message.style.color = 'red';
        } else if (Number(input.value) === myNumber) {
            messageText('You Win!');
            if (Number(score.textContent) > Number(highscore.textContent)) {
                highscore.textContent = score.textContent;
            }
            check.disabled = true;
            number.textContent = myNumber;
            message.style.color = 'lightgreen';
        } else {
            check.disabled = true;
            messageText('You Lost!');
            number.textContent = myNumber;
            message.style.color = 'red';
        }
    }
});
reset.addEventListener('click', function () {
    check.disabled = false;
    input.value = '';
    score.textContent = 20;
    messageText('Guess What!');
    message.style.color = '#fff';
    number.textContent = '?';
    myNumber = Math.trunc((Math.random() * 20) + 1);
    console.log(myNumber);
});





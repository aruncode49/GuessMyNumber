'use strict';

const number = Math.trunc(Math.random() * 20 + 1); // this is our secret number
const checkbtn = document.querySelector('.check');
let msg = document.querySelector('.message');
let score = 20;
let scoreLabel = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let hScore = 0;

checkbtn.addEventListener('click', function ()
{
    const guessNumber = Number(document.querySelector('.guess').value);
    // when there is no input
    if (!guessNumber)
    {
        msg.textContent = '⛔ No Number!';
    }

    // when the player wins the game
    else if (guessNumber === number)
    {
        msg.textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        
        if(score > hScore)
        {
            hScore = score;
            highScore.textContent = hScore;
        }
    }

    // when the guess is wrong
    else if(guessNumber !== number)
    {
        if (score > 1)
        {
            msg.textContent = guessNumber > number ? '📈 Too High!' : '📉 Too Low!';
            score--;
            scoreLabel.textContent = score;
        } 
        else
        {
            msg.textContent = '💥 You lost the game!';
            scoreLabel.textContent = 0;
        }
    }
});

// game reset functionality by again button; 
const againBtn = document.querySelector('.again');

againBtn.addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = null;
    msg.textContent = 'Start guessing...';
    highScore.textContent = hScore;
    scoreLabel.textContent = '20';
    score = 20;
})

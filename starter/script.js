'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='correct number';

document.querySelector('.number').textContent='12';
document.querySelector('.score').textContent='14';


document.querySelector('.guess').value='23';
console.log(document.querySelector('.guess').value); */

document.querySelector('.again').addEventListener('click',function()
{
    score=20;
    let secretNumber = Math.trunc(Math.random()*20) +1;
    document.querySelector('.message').textContent='Start Guessing....';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor='#222';

    document.querySelector('.number').style.width='15rem';




});

let secretNumber = Math.trunc(Math.random()*20) +1;

let score=20;
let highscore=0;

const display=function(message)
{
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function()
{
    const guess = Number( document.querySelector('.guess').value);

    console.log(guess);

    if (!guess)
    {
        display('No number !');
    }

    else if(guess===secretNumber)
    {
        display("won");
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';

        document.querySelector('.number').style.width='30rem';
        if(score>highscore)
        {
            highscore=score;
        document.querySelector('.highscore').textContent=highscore;
        } 
    }
    
    else if(guess != secretNumber)
    
    {
        display( guess>secretNumber?"too high":"too low");

        score--;
        document.querySelector('.score').textContent=score;
        }
        else
        {
        document.querySelector('.message').textContent='you lost tha game';
    }
    /*else if(guess>secretNumber)
    {   if(score>0)
        {
        document.querySelector('.message').textContent="too high";

        score--;
        document.querySelector('.score').textContent=score;
        }
        else
        {
        document.querySelector('.message').textContent='you lost tha game';
        }
    
    }

    else if(guess<secretNumber)
    {
        if(score>0)
        {
        document.querySelector('.message').textContent="too low";
        score--;
        document.querySelector('.score').textContent=score;

        }
        else
        {
        document.querySelector('.message').textContent='you lost tha game';
        }

    }
*/
    //document.querySelector('.message').textContent = 'correct number';
});



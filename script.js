'use strict';

//Call .question
//.answer
//#clickMe

const questions = document.querySelector('.question');
const answers = document.querySelector('.answer');
const click = document.querySelector('.clickMe');

//let playing = true;

//answers.textContent = eightBall;

answers.classList.add('hidden');

click.addEventListener('click', function () {
  answers.classList.remove('hidden');

  let eightBall = '';

  let randomNumber = Math.floor(Math.random() * 8);

  switch (randomNumber) {
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Reply hazy, try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Do not count on it';
      break;
    case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook is not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
  }
  answers.innerHTML = eightBall;
  document.querySelector('.clickMe').disabled = true;
  click.classList.add('hidden');
});

questions.addEventListener('click', function () {
  answers.innerHTML = '';
  document.querySelector('.question').value = '';
  document.querySelector('.clickMe').disabled = false;
  click.classList.remove('hidden');
});

//console.log(`The Magic 8 Ball says ${eightBall}`);

/*What I want to do with this project is
1) have someone type their question and click the button-----COMPLETED
2) the button click trigger the randomNumber function-----COMPLETED
3)have the result of the function returned to the middle of the 8 ball-----COMPLETED
4)when input is clicked, reset answer field.-----COMPLETED
5)When question is clicked, run random number again.
*/

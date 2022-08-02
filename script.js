"use strict";

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy, try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook is not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

//console.log(`The Magic 8 Ball says ${eightBall}`);

/*What I want to do with this project is
1) have someone type their question and click the button
2) the button click trigger the randomNumber function
3)have the result of the function returned to the middle of the 8 ball*/

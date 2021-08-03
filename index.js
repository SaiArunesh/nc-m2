const readLineSync = require("readline-sync");
const chalk = require("chalk");

const prompt = chalk.bold.green;
const banner = chalk.bold.red;

let score = 0;

let leaderBoard={
1:{
  username:"hulk",
  score: "3"
},
2:{
  username:"hawkeye",
  score:"2"
}
};

let questions = {
  1:{question:prompt("Is hulk bruce banner"), answer:"yes"},
  2:{question:prompt("Are you batman?"), answer:"no"},
  3:{question:prompt("What is 2*2?"), answer:"dormamu"}
}

function checkUserResponse(question, rightAnswer){
  let answer = readLineSync.question(question+"\t");
  let currentScore = 0;
  answer = answer.toLowerCase();
  rightAnswer = rightAnswer.toLowerCase();
  if(answer === rightAnswer){
    console.log("you are right");
    currentScore = currentScore = 1;
    console.log("You scored ",currentScore," points\n");
  }
  else{
    console.log("Sorry, you are wrong\n");
  }
  return currentScore;
  }

  for(let [index,quest] of Object.entries(questions)){
    console.log(index,".");
     let question = quest.question
     let answer = quest.answer
     score = score + checkUserResponse(question,answer);
  }


console.log(banner("Your final score is ",prompt(score)," points\n\n"));

  console.log(banner("Leader Board\n"));
  let scoreBeatenFlag = false;
  for(let [index,user] of Object.entries(leaderBoard)){
       let username = user.username
     let points = user.score
console.log(username," ==>",points," points");
if(score>=points)
{
  scoreBeatenFlag = true;
}
  }

  if(scoreBeatenFlag){
    console.log(prompt("\nScreenshot your final score and send to me I will buy you an icecream and add to leaderBoard as well"));  }


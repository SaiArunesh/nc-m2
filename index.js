const readLineSync = require("readline-sync");
const chalk = require("chalk");

const prompt = chalk.bold.green;
const banner = chalk.bold.red;

let score = 0;

let leaderBoard={
1:{
  username:"hulk",
  score: "4"
},
2:{
  username:"hawkeye",
  score:"5"
}
};

let questions = {
  1:{question:prompt("What is the name of the high performance core of M1 chip? "), answer:"Firestorm"},
  2:{question:prompt("What is the name of the energy effecient core of M1 chip? "), answer:"Icestorm"},
  3:{question:prompt("M1 is the succesor to Apple's which chip?"), answer:"A14 Bionic"},
  4:{question:prompt("What is the differnce in M1 between Macbook Air and Macbook Pro?"), answer:"Fans"},
  5:{question:prompt("Does Windows 10 support native ARM"), answer:"yes"},

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

  
currentUserName = readLineSync.question("What is your name? ");
if(currentUserName === "")
{
  currentUserName = "Nam nahi bateyaga?";
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
  console.log(currentUserName, " ==>", score, " points");


  if(scoreBeatenFlag){
    console.log(prompt("\nScreenshot your final score and send to me I will buy you an icecream and add to leaderBoard as well"));  }


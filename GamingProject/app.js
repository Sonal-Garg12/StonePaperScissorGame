let userScore =0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const  msg = document.querySelector("#msg");
let userScorePara= document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice =() =>{
    const options =["rock","paper","scissors"];
       const randIdx = Math.floor(Math.random() * 3);
       return options[randIdx];
    //rock, paper , scissors
};

const drawGame = () =>{
    msg.innerHTML = " Game was draw. Play again";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};
 const showWinner = (userWin, userChoice, compChoice) =>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win: Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose: ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }

 };
 const playGame = (userChoice)=>{
    //Generate computer choice
    const compChoice = genCompChoice();
    if(userChoice ===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            //paper, scissors
            userWin = compChoice === "paper"? false: true;
        }else if(userChoice ==="paper"){
            //rock, scissors
            userWin = compChoice === "scissors"? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
 };
 
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
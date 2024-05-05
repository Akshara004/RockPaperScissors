let userScore=0;
let compScore= 0;

const choices= document.querySelectorAll(".choice")
const msg= document.querySelector("#msg")
const userScoreMsg=document.querySelector("#myScore")
const compScoreMsg=document.querySelector("#compScore")
const reset= document.querySelector("#btn");


const resetGame=()=>{
    userScoreMsg.innerText=0;
    compScoreMsg.innerText=0;
    msg.innerText="Play your move."
    msg.style.backgroundColor="white";
    msg.style.color="black";
}

const genCompChoise=()=>{
    const options=['rock','paper','scissors']
    const randIdx= Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame=()=>{
    msg.innerText="Game was drawn. Play again"
    msg.style.backgroundColor= "blue";
    msg.style.color= "white";
    

}

const showWinner=(userWin,userCoice,compCoice)=>{
    if(userWin){
        userScore++;
        userScoreMsg.innerText= userScore;
        msg.innerText="You Win!!. Comp chose "+compCoice;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        compScoreMsg.innerText= compScore
        msg.innerText="You Lost!!. Comp chose "+compCoice;
        msg.style.backgroundColor= "red";
        msg.style.color= "white";
    }
}

const playGame=(userCoice)=>{
    const compCoice= genCompChoise();

    if(userCoice===compCoice){
        drawGame();
    }
    else{
        let userWin= true;
        if(userCoice==='rock'){
           userWin= compCoice==='paper'?false:true;
        }
        else if(userCoice==='paper'){
            userWin=compCoice==='scissors'?false:true;
        }
        else{
            userWin= compCoice==='rock'?false:true;
        }

        showWinner(userWin,userCoice,compCoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userCoice=choice.getAttribute("id");
        playGame(userCoice);
    })
});

reset.addEventListener("click",resetGame);

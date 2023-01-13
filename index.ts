#! /usr/bin/env node
 
import inquirer from 'inquirer';

async function startFunc() {

const systemNum = Math.floor(Math.random()*10);
const userNum = await inquirer.prompt([
    {
        type:"number",
        name:"userGuess",
        message:"type your guess number btw 1 to 10:"
    }
])
const {userGuess} = userNum;

console.log("Your Guess: ",userGuess, '\nSystem Guess: ',systemNum)
if(userGuess === systemNum){
    console.log("congratulation great you done it \n you win")
}else{
    console.log("please try again better luck for next time")
}

}
async function startAgain(){
    do{
        await startFunc();
        var again = await inquirer
        .prompt([
            {
            type: "input",
            name:"restart",
            message:"Do you want to continue? press y or no"
        }
        ])
    }
    while( again.restart == "Y" || again.restart =="y" || again.restart =="YES" || again.restart =="yes")
}startAgain();
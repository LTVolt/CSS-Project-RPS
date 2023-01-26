let playerSelection;
let computerSelection;
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice()
{
    let choice = ['rock', 'paper', 'scissors'];
    let computerSelection = Math.floor(Math.random() * choice.length);
    return choice[computerSelection];
}

function getPlayerChoice()
{
    let playerSelection = prompt('Rock, Paper, Scissors!', 'rock').toLowerCase();
    if (playerSelection == 'rock' || playerSelection == 'scissors' || playerSelection == 'paper') return playerSelection;
    else 
    {
        console.log('Bad move, try again...');
        getPlayerChoice();
    }
}

function playRound()
{
    let player = getComputerChoice();
    let computer = getPlayerChoice();
    
        if (player == computer) 
        {
            console.log("It's a tie!" + ' ' + playerPoints + ' ' + computerPoints);
            return playerPoints, computerPoints;
        }
        else if (player == 'rock' && computer == 'scissors')
        {
            playerPoints++;
            console.log("You win! Rock beats Scissors" + ' ' + playerPoints + ' ' + computerPoints);
            return playerPoints, computerPoints;
        }
        else if (player == 'scissors' && computer == 'paper')
        {
            playerPoints++;
            console.log("You win! Scissors beats Paper" + ' ' + playerPoints + ' ' + computerPoints);
            return playerPoints, computerPoints;
        }
        else if (player == 'paper' && computer == 'rock')
        {
            playerPoints++;
            console.log("You win! Paper beats Rock" + ' ' + playerPoints + ' ' + computerPoints);
            return playerPoints, computerPoints;
        }
        else if (player == 'rock' && computer == 'paper')
        {
            computerPoints++;
            console.log("You lose! Paper beats Rock" + ' ' + playerPoints + ' ' + computerPoints);
            return playerPoints, computerPoints;
        }
        else if (player == 'scissors' && computer == 'rock')
        {
            computerPoints++;
            console.log("You lose! Rock beats Scissors" + ' ' + playerPoints + ' ' + computerPoints);
            return playerPoints, computerPoints;
        }
        else if (player == 'paper' && computer == 'scissors')
        {
            computerPoints++;
            console.log("You win! Scissors beats Paper" + ' ' + playerPoints + ' ' + computerPoints);
            return playerPoints, computerPoints;
        }
}

function game()
{
    for (let i = 1; i <= 5; i++) playRound();
    if (playerPoints > computerPoints) console.log('You win!');
    else if (playerPoints < computerPoints) console.log('You lose!');
    else console.log('How did you manage to tie a Bo5?');
    playerPoints = 0;
    computerPoints = 0;
}

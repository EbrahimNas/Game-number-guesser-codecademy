let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = (target) => {
    return Math.floor(Math.random() * 10);
}


// formula to get absolute distance
const getAbsoluteDistance = ( num1, num2) => {
    return Math.abs(num1 - num2)
}

const compareGuesses = (humanGuess, computerGuess, target) => {
    
    // Calculate the absolute differences between each input and the random number
    const diff1 = getAbsoluteDistance(humanGuess, target);
    const diff2 = getAbsoluteDistance(computerGuess, target)

    // Compare the absolute difference to determine the closest
    if (diff1 < diff2) {
        return true
    } else if (diff2 < diff1) {
        return false
    } else {
        return true
    }
}

const updateScore = (winner) => {
    
    switch(winner) {
        case 'human':
            humanScore++;
            break;
        
            case 'computer':
                computerScore++;
                break;
    }
}

const advanceRound = () => currentRoundNumber++;

const checkHumanGuess = (humanGuess) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert("Please enter a number between 0 and 9.");
    } 
}
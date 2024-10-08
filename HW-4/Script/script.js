let playerChoice = '';
let wins = 0;
let losses = 0;
let ties = 0;


const choices = document.querySelectorAll('.choice');
choices.forEach(choice => {
    choice.addEventListener('click', function() {
        choices.forEach(c => c.classList.remove('selected')); 
        this.classList.add('selected'); 
        playerChoice = this.id;
        startComputerTurn();
    });
});


function startComputerTurn() {
    const computerImg = document.getElementById('computer-image');
    
    
    let shuffleInterval = setInterval(() => {
        computerImg.src = ['images/rock.PNG', 'images/paper.PNG', 'images/scissors.PNG'][Math.floor(Math.random() * 3)];
        computerImg.classList.remove('computer-choice'); 
    }, 500);

    
    setTimeout(() => {
        clearInterval(shuffleInterval);
        const computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        computerImg.src = `images/${computerChoice}.png`; 
        computerImg.classList.add('computer-choice'); 
        determineWinner(computerChoice);
    }, 3000);
}


function determineWinner(computerChoice) {
    const result = document.getElementById('result');

    if (playerChoice === computerChoice) {
        result.textContent = 'It\'s a tie!';
        ties++;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result.textContent = 'You win!';
        wins++;
    } else {
        result.textContent = 'You lose!';
        losses++;
    }
    updateScore();
}


function updateScore() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = ties;
}


document.getElementById('reset').addEventListener('click', () => {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScore();
    document.getElementById('result').textContent = 'Make your move!';
    document.getElementById('computer-image').src = 'images/question-mark.PNG';  

    
    choices.forEach(c => c.classList.remove('selected'));
    document.getElementById('computer-image').classList.remove('computer-choice');
});

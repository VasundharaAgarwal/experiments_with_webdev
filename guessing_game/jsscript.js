
const guessField = document.getElementById("guessInput");
const guesses = document.getElementById("guesses");
const lastGuess = document.getElementById("lastGuess");
const guessesLeft = document.getElementById("guessesLeft");
const submitButton = document.getElementById("submitButton");
var random = Math.floor(Math.random()*100)+1;
var num_guesses = 10;
var resetButton;
var para;
function update()
{
    
    guessesLeft.textContent = "Guesses Left :"+ --num_guesses;
    currentGuess = Number(guessField.value);
    if(currentGuess === random)
    {
        lastGuess.textContent = "Congratulations! You did it.";
        lastGuess.style.backgroundColor = 'green';
        setGameOver();
    }
    else
    {
        if(num_guesses === 0)
            setGameOver();
        else
        {
            guesses.textContent+=' '+currentGuess;
            if(currentGuess<random)
                lastGuess.textContent = "Oopsie, too small";
            else   
            lastGuess.textContent = "Oopsie, too big";
            lastGuess.style.backgroundColor = "red";
        }
        
    }
    
}
function setGameOver()
{
    submitButton.disabled = true;
    guessField.disabled =true;
    para = document.createElement('p');
    para.textContent = "Do you wanna try again? :D "
    document.body.appendChild(para);
    resetButton = document.createElement('button');
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", resetGame);
    document.body.appendChild(resetButton);
}
function resetGame()
{
    paras = document.querySelectorAll("div p");
    for(let i = 0; i<paras.length; i++)
    {
        paras[i].textContent='';
    }
    guessesLeft.textContent = "Guesses left : 10";
    num_guesses = 10;
    submitButton.disabled = false;
    guessField.disabled = false;
    resetButton.parentNode.removeChild(resetButton);
    para.parentNode.removeChild(para);
    guessField.value = '';
    guessField.focus();
    random = Math.floor(Math.random()*100)+1;
}
submitButton.addEventListener("click", update);


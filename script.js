let btn = document.getElementById("btn");
let input = document.getElementById("input");
let guesses = document.getElementById("guesses");
let wrong = document.querySelector(".wrong");

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer)
let newGuesses = 0;


btn.addEventListener("click", () => {
    guessesNumber();

})

function guessesNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        wrong.innerHTML = "Enter the number between 1 to 100"
    }
    else {
        newGuesses++;
        guesses.innerHTML = "No of Guesses :" + newGuesses;
        if (input.value > answer) {
            wrong.innerHTML = "you guessesd too high";
            input.value = " "
        }
        else if (input.value < answer) {
            wrong.innerHTML = "you guessed too low";
            input.value = " "
        }
        else {
            wrong.innerHTML = "congratulations : you guessed the correct answer"
            setTimeout(() => {
                resetGame()
            }, 3000)
        }

    }
}

function resetGame() {
    wrong.innerHTML = " "
    newGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = " ";
    guesses.innerHTML = "No of Guesses : 0"


}


const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes perfect.",
    "A journey of a thousand miles begins with a single step.",
    "Coding is like poetry in motion.",
    "The only way to learn a new programming language is by writing code.",
    "Debugging is twice as hard as writing the code in the first place."
  ];
  
  let currentQuote = "";
  let startTime;
  let timerInterval;
  let completedGames = 0;
  
  const quoteDisplay = document.getElementById("quote");
  const inputField = document.getElementById("input");
  const startButton = document.getElementById("startButton");
  const resetButton = document.getElementById("resetButton");
  const timerDisplay = document.getElementById("timer");
  const resultDisplay = document.getElementById("result");
  
  startButton.addEventListener("click", startGame);
  inputField.addEventListener("input", checkInput);
  resetButton.addEventListener("click", resetGame);
  
  function startGame() {
    // Select a random quote and reset everything
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = currentQuote;
    inputField.value = "";
    inputField.disabled = false;
    inputField.focus();
    resultDisplay.textContent = "";
  
    // Reset timer and start
    clearInterval(timerInterval);
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 100);
  
    // Show reset button to allow game exit
    resetButton.style.display = "inline-block";
  }
  
  function updateTimer() {
    const elapsedTime = ((new Date() - startTime) / 1000).toFixed(2);
    timerDisplay.textContent = `Time: ${elapsedTime}s`;
  }
  
  function checkInput() {
    const userInput = inputField.value;
    
    // If input matches the quote, stop the timer and show success message
    if (userInput === currentQuote) {
      clearInterval(timerInterval);
      inputField.disabled = true;
      completedGames++;
  
      resultDisplay.textContent = `Great job! Completed in ${timerDisplay.textContent.slice(6)} seconds.`;
  
      // Change quote after a short delay
      setTimeout(startGame, 2000);
    }
  }
  
  function resetGame() {
    // Stop the timer, reset UI, and disable input field
    clearInterval(timerInterval);
    inputField.disabled = true;
    inputField.value = "";
    quoteDisplay.textContent = "Click Start to begin typing!";
    resultDisplay.textContent = `You've completed ${completedGames} game(s).`;
  
    // Hide reset button
    resetButton.style.display = "none";
  }
  
// Function to increment the counter from 0 to a desired number
function incrementCounter(targetNumber) {
    var counterElement = document.getElementById('counter');
    var currentNumber = 0;
    var increment = Math.ceil(targetNumber / 100); // Divide the increment into smaller steps for smoother animation
  
    var interval = setInterval(function() {
      currentNumber += increment;
      counterElement.innerHTML = currentNumber;
  
      // When the counter reaches the target number, clear the interval
      if (currentNumber >= targetNumber) {
        clearInterval(interval);
        counterElement.innerHTML = targetNumber; // Ensure the counter displays the exact target number
      }
    }, 20); // Adjust the interval time for smoother animation
  }
  
  // Call the function with the desired number
  incrementCounter(1000); // Change 1000 to any desired number
  
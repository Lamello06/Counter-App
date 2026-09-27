// State variable to store the current count
let count = 0;

// Grab DOM elements from the HTML
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Function to update the display
function updateDisplay() {
    counterDisplay.textContent = count;
}

// Add click event listeners
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

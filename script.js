// Function to calculate and display total
function calculateTotal() {
    // Select all elements with class "prices"
    const priceElements = document.querySelectorAll('.prices');
    
    // Calculate the sum
    let total = 0;
    priceElements.forEach(priceElement => {
        const price = parseFloat(priceElement.textContent);
        if (!isNaN(price)) {
            total += price;
        }
    });
    
    // Display the total in the element with id "ans"
    const ansElement = document.getElementById('ans');
    ansElement.textContent = total;
    
    return total;
}

// Add click event listener to button
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', calculateTotal);
}

// Optional: Calculate total on page load
// calculateTotal();
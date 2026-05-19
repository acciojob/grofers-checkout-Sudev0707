const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceElements = document.querySelectorAll('.price');
    
    // Calculate the sum of all prices
    let total = 0;
    priceElements.forEach(priceElement => {
        const price = parseFloat(priceElement.textContent);
        if (!isNaN(price)) {
            total += price;
        }
    });
    
    const table = document.querySelector('table');
    const totalRow = table.insertRow();
    
    const totalCell = totalRow.insertCell(0);
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: Rs ${total}`;
    totalCell.style.textAlign = 'center';
    totalCell.style.fontWeight = 'bold';
    totalCell.style.backgroundColor = '#f0f0f0';
};
getSum();

getSumBtn.addEventListener("click", getSum);



import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js'; // Import asset data and functions for portfolio value and allocation
import { Transaction } from './transaction.js'; // Import the Transaction class for handling buy/sell operations
import { getAssetById } from './asset.js'; // Import getAssetById function from asset.js

// Select HTML elements where portfolio details, transaction logs, and total value will be displayed
const portfolioDetailsTable = document.getElementById('portfolio-tbody'); 
const transactionLogTable = document.getElementById('transaction-tbody');
const totalValueElement = document.getElementById('total-value');

// Function to display each asset's details (name, type, price, quantity, value, allocation) in a table
function updatePortfolioDetails() { 
    const allocation = getPortfolioAllocation(); // Get portfolio allocation percentages for each asset
    portfolioDetailsTable.innerHTML = ""; // Clear previous table rows before updating

    // Loop through each asset to create a table row with its details
    allocation.forEach(asset => {
        const row = document.createElement('tr'); // Create a new table row
        row.innerHTML = `
        <td>${asset.name}</td> 
        <td>${asset.type}</td>
        <td>${asset.price}</td>
        <td>${asset.quantity}</td>
        <td>${(asset.price * asset.quantity).toFixed(2)}</td> 
        <td>${asset.allocation.toFixed(2)}%</td>
    `;
    portfolioDetailsTable.appendChild(row); // Add row to the table
    });
}

// Function to calculate and display the total value of the portfolio
function updateTotalPortfolioValue() { 
    const totalValue = calculatePortfolioValue(); // Calculate the total portfolio value
    totalValueElement.textContent = `$${totalValue.toFixed(2)}`;// Display the formatted total value in the designated element
}

// Function to log transaction details (type, asset name, quantity) in a table for tracking purposes
function logTransaction(type, assetName, quantity) { 
    const row = document.createElement('tr'); // Create a new table row
    row.innerHTML = `
    <td>${type}</td>
    <td>${assetName}</td>
    <td>${quantity}</td>
`;
    transactionLogTable.appendChild(row); // Add row to the transaction log table
}

// Initial console log of total portfolio value before transactions
console.log('Total Portfolio Value:', calculatePortfolioValue());

// Initial update of the portfolio details and total value on the webpage
updatePortfolioDetails(); 
updateTotalPortfolioValue();

try {
    // Create a new 'buy' transaction for asset with ID 1 
    const transaction1 = new Transaction(1, 'buy', 30); 
    logTransaction('buy', getAssetById(1).name, 30); // Log the transaction details with dynamic asset name

    // Create a new 'sell' transaction for asset with ID 2 
    const transaction2 = new Transaction(2, 'sell', 10); 
    logTransaction('sell', getAssetById(2).name, 10); // Log the transaction details with dynamic asset name

    // Another 'sell' transaction for asset with ID 2 
    const transaction3 = new Transaction(2, 'sell', 30); 
    logTransaction('sell', getAssetById(2).name, 30); // Log the transaction details with dynamic asset name

    // Update the portfolio details and total value on the webpage after transactions
    updatePortfolioDetails();
    updateTotalPortfolioValue();

    // Console log to display the updated total portfolio value after transactions
    console.log('Updated Portfolio Value:', calculatePortfolioValue());
} catch (error) {
    console.error(error.message); // Catch and log any errors encountered during transactions
}


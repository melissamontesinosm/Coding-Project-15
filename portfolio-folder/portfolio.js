import { assetList, getAssetById } from "./asset.js"; // Call assets from assets.js file

export function calculatePortfolioValue() { // Calculate total value of the portfolio
    return assetList.reduce((total, asset) => total + (asset.price * asset.quantity), 0); // Sum of multiplication of asset's price and quantity
};

export function getPortfolioAllocation() { // Calculate percentage of each asset in the portfolio
    const totalValue = calculatePortfolioValue(); 
    return assetList.map(asset => ({ 
      ...asset,
      allocation: ((asset.price * asset.quantity) / totalValue) * 100 // Define percentage
    }));
}
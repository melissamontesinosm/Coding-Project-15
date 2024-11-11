
import { assetList, getAssetById } from "./asset.js"; // Import assets and getAssetById from assets.js file

export class Transaction {
    constructor(assetId, type, quantity) {
        this.asset = getAssetById(assetId);
        if (!this.asset) {
          throw new Error('Asset not found'); // Display error message
        }
        this.type = type;
        this.quantity = quantity;
        this.processTransaction();
    }

    processTransaction() { // Process transaction details
        if (this.type === 'buy') { // If type is 'buy', add asset's quantity
            this.asset.quantity += this.quantity;  
        } else if (this.type === 'sell') { // If type is 'sell', check if quantity is sufficient before subtracting
            if (this.asset.quantity < this.quantity) { 
                throw new Error(`Insufficient amount for sale of ${this.asset.name}`); 
            }
            this.asset.quantity -= this.quantity; 
        } else { // If neither 'buy' nor 'sell', display error
            throw new Error('Invalid transaction type'); 
        }
    }
}



export const assetList = [ //Example data
    { id: 1, name: "Alphabet Inc", type: "stock", price: 179.86, quantity: 25 },
    { id: 2, name: "10Y US Treasury Bond", type: "bond", price: 100, quantity: 80 },
    { id: 3, name: "Amazon Inc", type: "stock", price: 102.33, quantity: 40 },
    { id: 4, name: "Corporate Bond ABC", type: "bond", price: 96.0, quantity: 132 }
  ];
  
  export function getAssetById(id) { //Used to return  asset details based on the provided ID
    return assetList.find(asset => asset.id === id);
  }
  

  
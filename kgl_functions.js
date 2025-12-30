// Coursework 2: KGL Inventory Processing System


// Part A: Function Implementation

// Step 1. Function: calculateProcurementCost
function calculateProcurementCost(tonnageInKg, pricePerKg) {
  // validate inputs
  if (typeof tonnageInKg !== 'number' || typeof pricePerKg !== 'number' || tonnageInKg < 0 || pricePerKg < 0) {
    return "Invalid input";
  }
  //  return total cost
  return tonnageInKg * pricePerKg;
}
console.log(calculateProcurementCost(1000, 500));

// Step 2. Arrow Function: validateBuyerName
const validateBuyerName = (buyerName) => {
// work on this later
}
// console.log(validateBuyerName);

// Step 3. Function: checkUserAuthorization
function checkUserAuthorization(role) {
  switch (role) {
    case 'Manager':
      return "procurement_and_sales";
    case 'Sales Agent':
      return "sales_only";
    case 'Director':
      return "view_aggregations";
    default:
      return "unauthorized";
  }
}
console.log(checkUserAuthorization('Manager'));
/** ---------------------------------------------------- */


// Part B: Object Creation and Manipulation

// Step 4: function: crestSalesRecord
function createSalesRecord(tonnage, buyerName, produceName, amountPaid) {
  return {
    id: 4567,
    produceName: produceName,
    tonnageInKgs: tonnage,
    buyerName: buyerName,
    amountPaid: amountPaid,
    saleDate: new Date(),
    isCreditSale: false
  }
}

// step 5. create a sales record object with test data
let salesRecord = createSalesRecord(1000, 'kevin', 'cow peas', 500000);

// add new property using dot notation
salesRecord.branch = "Maganjo";

// modify isCreditSale property
salesRecord.isCreditSale = true;

// add dueDate property using bracket notation
salesRecord["dueDate"] = "2026-01-25";

console.log(salesRecord);
// Use Object.keys() to get all property names and log them
console.log("Property names:", Object.keys(salesRecord));

// 6. for...in loop to log each property name and value
for (let prop in salesRecord) {
  console.log(`Property: ${prop}, Value: ${salesRecord[prop]}`);
}
/** ---------------------------------------------------- */


// Part C: Loop Implementation and Data Processing

// 7. Weekly procurement tonnage calculations
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

let totalTonnage = 0;
for (let i = 0; i < weeklyTonnage.length; i++) {
  totalTonnage += weeklyTonnage[i];
}
let averageTonnage = totalTonnage / weeklyTonnage.length;

console.log("Total weekly tonnage:", totalTonnage);
console.log("Average daily tonnage:", averageTonnage);

// 8. Array of sales records using createSalesRecord
let salesRecords = [
  createSalesRecord(500, "Alice", "Beans", 250000),
  createSalesRecord(300, "Bob", "Maize", 150000),
  createSalesRecord(450, "Charlie", "Rice", 300000),
  createSalesRecord(200, "Diana", "G-nuts", 120000),
  createSalesRecord(600, "Edward", "Grain Maize", 400000)
];

// Mark some as credit sales
salesRecords[1].isCreditSale = true;
salesRecords[3].isCreditSale = true;

let creditCount = 0;
for (let record of salesRecords) {
  if (record.isCreditSale !== true) {
    continue; // skip non-credit sales
  }
  creditCount++;
}
console.log("Total credit sales:", creditCount);

// 9. Stock check with break statement
let inventory = [
    { name: 'Beans', tonnage: 500 },
    { name: 'Maize', tonnage: 0 },
    { name: 'G-nuts', tonnage: 300 }
];

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].tonnage === 0) {
    console.log(`Manager Alert: ${inventory[i].name} is out of stock`);
    break; // exit loop immediatly
  }
}
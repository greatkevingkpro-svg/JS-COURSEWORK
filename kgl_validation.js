// COURSEWORK 1: KGL DATA VALIDATION SYSTEM


// Part A: VARIABLE DECLARATION AND TYPE CHECKING

// step 1: declare variables using let or const
// step 3: comment
// Using const because companyName will not change
const companyName = "Karibu Groceries LTD";  

/*
  step 3: comment
  Using const because minimum tonnage is a fixed
  tonnage quantity
*/
const minimumTonnage = 1000;  

// step 3: comment
// Using const because operational status is a fixed boolean value
const isOperational = true;  

// step 3: comment
// Using let because managerName may be assigned later
let managerName;  

/*  
  step 3: comment
  Using let because closedBranches is explicitly 
  set to null (no branches closed yet) but later
  there can be some closed branches
*/
let closedBranches = null; 

// step 2: use typeof to check types of variables
console.log(typeof companyName);
console.log(typeof minimumTonnage);
console.log(typeof isOperational);
console.log(typeof managerName);
console.log(typeof closedBranches);
/* ------------------------------------------------- */


// Part B: STRING MANUPILATION AND VALIDATION

// Step 4: Declare variable with extra spaces and inconsistent capitalization
let dealerNameInput = " james BOND ";

// Step 5: Clean and format the name
// Remove leading/trailing whitespace
let trimmedName = dealerNameInput.trim();

// Convert to proper title case
let cleanDealerName = trimmedName
.split(" ") //split into substrings
.filter(word => word.length > 0) // remove any accidental empty strings
.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()) // capitalize first letter
.join(" "); // join back into a single string

// Log the result using template literal
console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

// Step 6: Validation check
if (cleanDealerName.length >= 2 && cleanDealerName !== "") {
  console.log("Valid dealer name");
} else {
  console.log("Invalid dealer name");
}

/** ------------------------------------------------------- */


// Part C: CONDITONAL LOGIC AND BUSINESS RULES

// Step 7: Create variables for procurement record
let userRole = 'Sales Agent';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';

// Step 8: Implement KGL business rules
if (userRole === 'Sales Agent') {
  console.log("Error: Sales Agents are not allowed to record produce entries."); // Rule 1
} else if (procurementTonnage < 1000) {
  console.log("Error: Tonnage must not be less than 1000kg for individual dealers."); // Rule 2
} else {
  // Rule 3
  let costNumber = Number(costInUgx); // convert to number
  /**
   * Alternate codes
   * let costNumber = parseInt(costInUgx);
   * let costNumber = parseFloat(costInUgx);
  */

  if (costNumber < 10000) {
    console.log("Error: Cost must be not less than 5 digits (>= 10000).");
  } else {
    console.log("Cost check passed.");
  }

  // Step 9: Combined validation using logical AND
  if (procurementTonnage >= 1000 && costNumber >= 10000) {
    console.log("Procurement record valid");
  } else {
    console.log("Procurement record invalid");
  }
}

/** ------------------------------------------------------- */


// Part D: Arrays and Produce Management

// Step 10: Create the kglProduce array
let kglProduce = ['Beans', 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'];

// Step 11: Array operations
// Add "Green Peas" to the end
kglProduce.push("Green Peas");

// Remove the first item (simulate oldest stock sold)
kglProduce.shift();

// Check if "G-nuts" exists in the array
let hasGnuts = kglProduce.includes("G-nuts");
console.log("Contains G-nuts?", hasGnuts);

// Log the final array and its length
console.log("Final kglProduce array:", kglProduce);
console.log("Array length:", kglProduce.length);

// Step 12: Create branch2Produce and merge
let branch2Produce = ['Maize', 'Beans'];
let allProduce = kglProduce.concat(branch2Produce);

console.log("All Produce (merged):", allProduce);
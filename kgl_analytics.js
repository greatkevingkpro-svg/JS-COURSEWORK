// Coursework 3: KGL Analytics and Reporting System


// Part A: Higher Order Functions - Data Transformation

// 1. Procurement data
let procurementsRecords = [
  {
    id: 1001,
    dealerName: "James",
    produceType: "Beans",
    tonnageInKgs: 1200,
    costInUgx: 6600000,
    procurementDate: new Date("2025-01-05")
  },
  {
    id: 1002,
    dealerName: "Sarah",
    produceType: "Grain Maize",
    tonnageInKgs: 800,
    costInUgx: 3840000,
    procurementDate: new Date("2025-01-06")
  },
  {
    id: 1003,
    dealerName: "Peter",
    produceType: "G-nuts",
    tonnageInKgs: 1500,
    costInUgx: 10800000,
    procurementDate: new Date("2025-01-06")
  },
  {
    id: 1004,
    dealerName: "Mary",
    produceType: "Cow peas",
    tonnageInKgs: 950,
    costInUgx: 5700000,
    procurementDate: new Date("2025-01-07")
  },
  {
    id: 1005,
    dealerName: "Paul",
    produceType: "Soybeans",
    tonnageInKgs: 1100,
    costInUgx: 6380000,
    procurementDate: new Date("2025-01-08")
  },
  {
    id: 1006,
    dealerName: "James",
    produceType: "Beans",
    tonnageInKgs: 1000,
    costInUgx: 5500000,
    procurementDate: new Date("2025-01-09")
  }
];

// 2. map() — add costPerKg
let recordsWithCostPerKg = procurementsRecords.map(record => {
  return {
    ...record,
    costPerKg: record.costInUgx / record.tonnageInKgs
  };
});

console.log("Records with costPerKg:", recordsWithCostPerKg);

// 3. filter() — tonnage >= 1000
let validProcurements = procurementsRecords.filter(
  rec => rec.tonnageInKgs >= 1000
);

console.log("Valid procurement records:", validProcurements);
console.log("Count:", validProcurements.length);

// 4. reduce() — totals
let totals = procurementsRecords.reduce(
  (acc, rec) => {
    acc.totalTonnage += rec.tonnageInKgs;
    acc.totalCost += rec.costInUgx;
    return acc;
  },
  { totalTonnage: 0, totalCost: 0 }
);

console.log(`Total Tonnage: ${totals.totalTonnage} Kgs`);
console.log(`Total Cost: ${totals.totalCost} Ugx`);
/** ---------------------------------------------------- */


// Part B: Sets for Unique Data Management

// 5. Unique dealers
function getUniqueDealers(records) {
  const dealerSet = new Set();

  records.forEach(r => dealerSet.add(r.dealerName));

  return Array.from(dealerSet);
}

console.log("Unique dealers:", getUniqueDealers(procurementsRecords));

// 6. Authorization Set
const authorizedRoles = new Set(["Manager", "Director"]);

function isAuthorizedForProcurement(userRole) {
  return authorizedRoles.has(userRole);
}

console.log(isAuthorizedForProcurement("Manager"));   // true
console.log(isAuthorizedForProcurement("Director"));  // true
console.log(isAuthorizedForProcurement("Sales Agent")); // false
console.log(isAuthorizedForProcurement("Intern"));      // false);
/** ---------------------------------------------------- */


// Part C: Maps for Price Management

// 7. Price list Map
const kglPriceList = new Map([
  ["Beans", 5500],
  ["Grain Maize", 4800],
  ["Cow peas", 6000],
  ["G-nuts", 7200],
  ["Soybeans", 5800]
]);

// 8. calculateSaleTotal()
function calculateSaleTotal(produceName, tonnageInKgs) {
  const price = kglPriceList.get(produceName);

  if (!price) {
    return "Price not found";
  }

  return price * tonnageInKgs;
}

console.log(calculateSaleTotal("Beans", 1000));
console.log(calculateSaleTotal("G-nuts", 500));
console.log(calculateSaleTotal("Cassava", 300)); // Price not found

// 9. Loop Map + highest price
let highestPrice = 0;

for (let [produce, price] of kglPriceList) {
  console.log(`Produce: ${produce}, Price per Kg: ${price} Ugx`);

  if (price > highestPrice) highestPrice = price;
}

console.log("Highest price:", highestPrice);
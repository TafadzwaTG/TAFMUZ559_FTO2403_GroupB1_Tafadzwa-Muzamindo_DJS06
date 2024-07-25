// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// Log each province
provinces.forEach(console.log);

//Log each name
names.forEach(console.log);

//Log each name with its matching province
names.forEach((name, i) => console.log(`${name} (${provinces[i]})`));

//Create a new array with province in uppercase
console.log(provinces.map((p) => p.toUpperCase()));

//Create a new array with the length of each name
console.log(names.map((n) => n.length));

//Sort and log provinces alphabetically
console.log([...provinces].sort());

//Filter out provinces containing "Cape" and log othe count
const noCapeProvinces = provinces.filter((p) => !p.includes("Cape"));
console.log(`Count of remaining provinces: ${noCapeProvinces.length}`);
console.log(noCapeProvinces);

//Create a boolean array inicating if a name contains "S"
console.log(names.map((n) => n.toLowerCase().includes("s")));

//Create an object mapping names to their provinces
console.log(
  names.reduce((map, name, i) => ({ ...map, [name]: provinces[i] }), {})
);

//Log each product name
console.log(products.map((p) => p.product));

//Filter and log products with names shorter than or equal to 5 characters
console.log(products.filter((p) => p.product.length <= 5));

//Filter out products without valid prices, then calculate and log the total price
const validPrices = products.filter(
  (p) => p.price !== "" && !isNaN(Number(p.price))
);

//Filter out products without valid prices, then caculate and log the total price
const totalPrice = validPrices.reduce((sum, p) => sum + Number(p.price), 0);
console.log(`Total price: ${totalPrice}`);

// Concatenate and log all product names into a single string
console.log(
  products.reduce(
    (str, p, index) => (index === 0 ? p.product : `${str}, ${p.product}`),
    ""
  )
);
// Find and log the highest and lowest prices
const numericPrices = products
  .map((p) => parseFloat(p.price))
  .filter((price) => !isNaN(price));
console.log(
  `Highest: ${Math.max(...numericPrices)}. Lowest: ${Math.min(...numericPrices)}`
);

// Transform and log products into a new format
console.log(
  products.map(({ product, price }) => ({ name: product, cost: price }))
);

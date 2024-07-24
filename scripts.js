// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

provinces.forEach(console.log);
names.forEach(console.log);
names.forEach((name,i) => console.log(`${name} (${provinces[i]})`));

console.log(provinces.map(p => p.toUpperCase()));

console.log(names.map(n => n.length));

console.log([...provinces].sort());

const noCapeProvinces = provinces.filter(p => !p.includes("Cape"));
console.log(`Count of remaining provinces: ${noCapeProvinces.length}`);
console.log(noCapeProvinces);

console.log(names.map(n => n.toLowerCase().includes("s")));

console.log(names.reduce((map, name, i) => ({...map, [name]: provinces[i]}), {}));


console.log(products.map(p => p.product));

console.log(products.filter(p => p.product.length <= 5));

const validPrices = products.filter(p => p.price !== '' && !isNaN(Number(p.price)));
const totalPrice =  validPrices.reduce((sum, p) => sum + Number(p.price), 0);
console.log(`Total price: ${totalPrice}`);

console.log(products.reduce((str, p, index) => index === 0 ? p.product: `${str}, ${p.product}`, ""));

const numericPrices = products
.map(p => parseFloat(p.price))
.filter(price => !isNaN(price));
console.log(`Highest: ${Math.max(...numericPrices)}. Lowest: ${Math.min(...numericPrices)}`);

console.log(products.map(({product, price}) => ({name: product, cost: price})));
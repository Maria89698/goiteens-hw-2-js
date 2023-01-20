// #1
console.log(Number.parseInt("5px"));
console.log(Number.parseInt("12djd334"));
console.log(Number.parseInt("12.45asdwe12"));
console.log(Number.parseInt("qwqweeewq"));

// #2
console.log(Number.parseFloat("5px"));
console.log(Number.parseFloat("12djd334"));
console.log(Number.parseFloat("12.45asdwe12"));
console.log(Number.parseFloat("qwqweeewq"));

// #3
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

// #4
const random = Math.random(3) * (20 - 1) + 1;

// #5
const result = 5+5+'5';
console.log(typeof result);

// #6
const email = 'maria9parhomova@gmail.com';
console.log(productName.includes("@"));
console.log(email.length);

// #7
const w1 = 'My';
const w2 = 'name';
const w3 = 'is';
const fullName = w1 + w2 + w3 + 'Viktor';
console.log(fullName);

// #8
const username = 'Olexander';
const payment = 300;
alert('Дякуємо, ', username, 'до сплати', payment, 'гривень')
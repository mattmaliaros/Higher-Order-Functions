const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Regular For Loop Print Companies
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach Print Companies
// companies.forEach(function(company) {
//   console.log(company);
// });

// FILTER WORK

// Regular For Loop
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// Filter -- Get 21 and Older
// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// Filter -- ES6 Get 21 and Older
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// Filter -- Retail Companies
// const retailCompanies = companies.filter(function(company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

// Filter -- Retail Companies ES6
// const retailCompanies = companies.filter((company) => company.category === 'Retail');
// console.log(retailCompanies);

// Filter -- 80's Companies  ES6
// const eightiesCompanies = companies.filter(company => company.start < 1990);
// console.log(eightiesCompanies);

// Filter -- Ten Years Or More Companies ES6
// const lengthyCompanies = companies.filter(
//   company => company.end - company.start >= 10
// );
// console.log(lengthyCompanies);

// MAP WORK

// Map -- Create Array of Company Names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });
// console.log(companyNames);

// Map -- Return 1 for Each Company
// const testMap = companies.map(function(company) {
//   return 1;
// });
// console.log(testMap);

// Map -- Return Using ES6 Template Strings
// const testMap = companies.map(function(company) {
//   return `${company.name} ${company.category}  [${company.start}  ${company.end}]`;
// });
// console.log(testMap);

// Map -- Return Using ES6 Template Strings and Destructuring
// const testMap = companies.map(function(company) {
//   const { name, category, start, end } = company;
//   return `${name} ${category}  [${start}  ${end}]`;
// });
// console.log(testMap);

// Return -- Ages Square Root ES6
// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// Return -- Ages Squared ES6
// const agesSquared = ages.map(age => Math.pow(age, 2));
// console.log(agesSquared);

// SORT WORK

// Sort -- Companies by Start Year
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedCompanies);

// Sort -- Companies by Start Year ES6
// const sortedCompanies = companies.sort((c1, c2) =>
//   c1.start > c2.start ? 1 : -1
// );
// console.log(sortedCompanies);

// Sort Ages *Important* This will sort based off first number... Not based off value
// const sortAges = ages.sort();

// console.log(sortAges);

// Sort -- Ages by Value
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

// REDUCE WORK

// For Loop Add Ages
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// console.log(ageSum);

// Reduce -- Add Ages *Important* You can either declare total in the parameters or set it after the return statement
// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce(function(total = 0, age) {
//   return total + age;
// });

// console.log(ageSum);

// Reduce -- Add Ages ES6
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// const ageSum = ages.reduce((total = 0, age) => total + age);
// console.log(ageSum);

// Reduce -- Get Total Range in Years for All Companies ES6
// const yearsSum = companies.reduce(
//   (total, company) => total + (company.end - company.start), 0
// );
// console.log(yearsSum);

// Combine Methods --- This will Multiply Ages by 2, Filter Out Any Ages Less than 40, Sort by Lowest to Highest, and Add Them All Up
// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0);

// console.log(combined);

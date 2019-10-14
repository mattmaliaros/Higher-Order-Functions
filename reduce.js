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

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

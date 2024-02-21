// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log(
  ` %c
Testing some basics 
`,
  'color: red'
);

const manVal = 232;
//Ternary Operator testing
manVal === 23 ? console.log('yes') : console.log('no');

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));
console.log('booty');
console.log(manVal);

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

console.log('Testing sentences ');
console.log('Testing sentences ');
console.log('Testing sentences ');
console.log(`booty dance again , where and hen `);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // value: Number(prompt('Degrees celcius:')),
    value: 10,
  };

  console.table(measurement);

  // console.log(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A Identfy bug
console.log(measureKelvin());

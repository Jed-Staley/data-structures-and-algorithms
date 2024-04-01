'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function that iterates over an array of people objects
and creates a new list of each person's full name using the array method 'map'.
Each object will have the shape {firstName:string, lastName:string}
E.g. [ { firstName:"Jane", lastName:"Doe" }, { firstName:"James", lastName:"Bond"}]
should convert to ["Jane Doe", "James Bond"]
Note the space in between first and last names.
You can assume that neither firstName nor lastName will be blank
------------------------------------------------------------------------------------------------ */
const toLastNames = people => people.map((obj) => `${obj.firstName} ${obj.lastName}`);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named addValues that, given an array of numbers as input, uses reduce to add the values in the array.

------------------------------------------------------------------------------------------------ */

const addValues = arr => arr.reduce((runningSum, num) => runningSum + num, 0);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named addPurchases that, given an array of objects as input, uses reduce to find the total amount purchased. Each object contains the keys `item` and `purchasePrice` like the example.

{
  item: 'switch'
  purchasePrice: 399
}

------------------------------------------------------------------------------------------------ */

const addPurchases = arr => arr.reduce((runningSum, obj) => runningSum + obj.purchasePrice, 0);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

const countNumberOfElements = arr => arr.reduce((runningSum) => runningSum + 1);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named returnNames that, given the Star Wars data, below, uses reduce to return an array containing the names of the characters.
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

const returnNames = arr => arr.reduce((runningArr, obj) => {
  runningArr.push(obj.name);
  return runningArr;
}, []);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
------------------------------------------------------------------------------------------------ */

const reversedString = str => {
  // MDN web docs says that Array.prototype.reduce is a generic method and therefore works on array-like values such as strings, but when I tried that it said that str.reduce isn't a function, hence lines 120-123.
  let strToArr = [];
  for (let i = 0; i < str.length; i++) {
    strToArr.push(str[i]);
  }
  return strToArr.reduce((runningStr, char) => char + runningStr, '');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named countNumberOfChildren that, given the array of characters, below, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const countNumberOfChildren = arr => arr.reduce((runningSum, obj) => runningSum + (obj.children !== undefined ? obj.children.length : 0), 0);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

const calculateAverage = arr => arr.reduce((runningSum, num) => ((runningSum * arr.length) + num) / arr.length, 0);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const findHighestNum = (arr) => {
  let highestNumSoFar = 0;
  arr.forEach((num) => {
    if (num > highestNumSoFar) {
      highestNumSoFar = num;
    }
  });
  return highestNumSoFar;
};

const buildPrimeArray = (upTo) => {
  let primesArr = [2,3];
  let increment = 4;
  for (let i = 5; i <= upTo; i+= increment) {
    let stillPrime = true;
    for (let j = 0; (primesArr[j] <= Math.sqrt(i)) && stillPrime; j++) {
      if ((i % primesArr[j]) === 0) {
        stillPrime = false;
      }
    }
    if (stillPrime) {
      primesArr.push(i);
    }
    if (increment === 2) {
      increment = 4;
    } else {
      increment = 2;
    }
  }
  return primesArr;
};

/* I rewrote the isPrime to be much less computationally expensive. It now:
Only checks for division by prime numbers, not composite numbers.
Has an array of primes that persists between checks instead of having to rebuild the primes array for every check.
Only checks divisors that are 1 more or one less than a multiple of 6, which increases the efficiency by 66% percent.
Only checks divisors that are less than or equal to the square root of the dividend, which brings the O notation down by an exponent of 2.

The inputs and outputs of isPrime are unchanged.
*/

const countPrimeNumbers = (arr) => {
  const primesArr = buildPrimeArray(findHighestNum(arr));
  const isPrime = (num) => primesArr.includes(num);

  return arr.reduce((runningSum, num) => runningSum + (isPrime(num) ? 1 : 0), 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named extractStats that, given the snorlaxData below, uses reduce to build an object that holds the 'name' and 'baseStat' of each stat, where the key is the 'name', and the value is 'baseStat'. Return the object.

------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStats = snorlaxData => snorlaxData.stats.reduce((obj, stat) => Object.assign(obj, { [stat.stat.name]: stat.baseStat }), {});

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */

const extractChildren = arr => arr.filter((name) => /a/i.test(name)).reduce((runningSum, value) => runningSum + 1, 0);
// I have no idea what this is asking for. First off, there is no array of characters in challenge 4 like it says. Also step 2 is completely redundant. I thought maybe it meant to return the number of names, but that failed. So I took it literally, and that failed too. Upon inspection of the test, I found that the expected output contains 4 names that don't even contain the letter 'a'.

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-09.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should convert object to full name string', () => {

    const people = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }];

    expect(toLastNames(people)).toStrictEqual(['Jane Doe', 'James Bond']);

  });
});

describe('Testing challenge 2', () => {
  test('It should add the values of an array', () => {
    expect(addValues([1, 2, 3, 4, 5])).toStrictEqual(15);
    expect(addValues([])).toStrictEqual(0);
    expect(addValues([1, 2, 3, 4, -5])).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  test('It should add the purchase price', () => {
    expect(addPurchases([{item: 'switch', purchasePrice: 399}, {item: 'toothpaste', purchasePrice: 2}])).toStrictEqual(401);
    expect(addPurchases([])).toStrictEqual(0);
  });
});

describe('Testing challenge 4', () => {
  test('It should return the length of the array', () => {
    expect(countNumberOfElements([1, 2, 3, 4, 5])).toStrictEqual(5);
  });
});

describe('Testing challenge 5', () => {
  test('It should return an array continaing the names of the characters', () => {
    expect(returnNames(starWarsData)).toStrictEqual([ 'Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa' ]);
    expect(returnNames(starWarsData).length).toStrictEqual(5);
  });
});

describe('Testing challenge 6', () => {
  test('It should return the string with the characters in reverse order', () => {
    expect(reversedString('Code 301')).toStrictEqual('103 edoC');
  });
});

describe('Testing challenge 7', () => {
  test('It should return the total number of children', () => {
    expect(countNumberOfChildren(characters)).toStrictEqual(14);
  });
});

describe('Testing challenge 8', () => {
  test('It should return the average of the numbers in the array', () => {
    expect(calculateAverage([18, 290, 37, 4, 55, 16, 7, 85 ])).toStrictEqual(64);
  });
});

describe('Testing challenge 9', () => {
  test('It should return a count of the prime numbers in the array', () => {
    expect(countPrimeNumbers([1, 2, 13, 64, 45, 56, 17, 8])).toStrictEqual(3);
  });
});

describe('Testing challenge 10', () => {
  test('It should return an object that contains the names of each stat as individual keys and the respective baseStats as values to those keys.', () => {
    expect(extractStats(snorlaxData)).toStrictEqual({'speed': 30, 'special-defense': 110, 'special-attack': 65});
  });
});

xdescribe('Testing challenge 11', () => {
  test('It should return an array containing the names of the children', () => {
    expect(extractChildren(characters)).toStrictEqual([ 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras' ]);
    expect(extractChildren(characters).length).toStrictEqual(10);
  });
});

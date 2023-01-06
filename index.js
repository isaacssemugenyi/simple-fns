const splitText = (text, delimeter, result = 0) => {
  if (typeof text !== 'string')
    throw new Error('Only strings are supported as a first argument');

  if (typeof result !== 'number')
    throw new Error('Only numbers from 0, 1, 2 are supported, 0 is default');

  if (result < 0 || result > 2)
    throw new Error('Only numbers from 0, 1, 2 are supported, 0 is default');

  const output = text.split(delimeter);
  const options = {
    0: { total: output.length, list: output },
    1: { total: output.length },
    2: { list: output },
  };
  return options[result];
};

// console.log(splitText('Isaac Home Work', ',', 2));

const countOccurance = (text, result = 0, delimeter = ' ') => {
  if (typeof text !== 'string')
    throw new Error('Only strings are supported as a first argument');

  if (typeof result !== 'number')
    throw new Error(
      'Only numbers from 0, 1, 2, 3, 4 are supported, 0 is default'
    );

  if (result < 0 || result > 4)
    throw new Error(
      'Only numbers from 0, 1, 2, 3, 4 are supported, 0 is default'
    );

  const options = {
    0: text.match(/[A-Z]/g) ?? [],
    1: text.match(/[a-z]/g) ?? [],
    2: text.match(/[0-9]/g) ?? [],
    3: text.match(/[ ]/g) ?? [],
    4: text.match(new RegExp(`[${delimeter}]`, 'g')) ?? [],
  };

  return options[result].length;
};

console.log(countOccurance('Home-work-Space-', 0));
console.log(countOccurance('-work', 1));
console.log(countOccurance('234home', 2, '-'));
console.log(countOccurance('home-work space', 3));
console.log(countOccurance('home-work-space-', 4, '-'));

module.exports = {
  splitText,
  countOccurance,
};

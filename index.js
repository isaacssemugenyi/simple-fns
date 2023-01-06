/**
 * @function splitText
 * @param {String, String, number}
 * @argument {text, delimeter, result}
 * @example splitText('test test test', ' ', 2);
 * @summary text is a string, delimeter any identifier, result is a number between 0, 1, 2 and determines the output
 * @description function to split a string based on a given delimiter
 * @returns an object
 * @example 0 -> { total: 3, list: ['test', 'test', 'test']}, 1 -> { total: 3}, 2 -> {list: ['test', 'test', 'test']}
 */
const splitText = (text, delimeter, result = 0) => {
  if (typeof text !== 'string')
    throw new Error('Only strings are supported as a first argument');

  if (text.trim() === '')
    throw new Error('At least a single character is required in a string');

  if (typeof result !== 'number')
    throw new Error('Only numbers from 0, 1, 2 are supported, 0 is default');

  if (result < 0 || result > 2)
    throw new Error('Only numbers from 0, 1, 2 are supported, 0 is default');

  let output =
    delimeter !== ' '
      ? text.replace(/\s/g, '').split(delimeter)
      : text.split(delimeter);

  const options = {
    0: { total: output.length, list: output },
    1: { total: output.length },
    2: { list: output },
  };
  return options[result];
};

/**
 * @function countOccurance
 * @param {String, number, String}
 * @argument {text, result, delimeter}
 * @example countOccurance('boy , girl , kid , child', 4, ',');
 * @description function to return the count of elements based on the delimeter that has split the sentence
 * @returns number
 * @example 3
 */
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

  if (text.trim() === '')
    throw new Error('At least a single character is required in a string');

  if (delimeter !== ' ') {
    delimeter = delimeter.replace(/\s/g, '');
  }

  const options = {
    0: text.match(/[A-Z]/g) ?? [],
    1: text.match(/[a-z]/g) ?? [],
    2: text.match(/[0-9]/g) ?? [],
    3: text.match(/[ ]/g) ?? [],
    4: text.match(new RegExp(`[${delimeter}]`, 'g')) ?? [],
  };

  return options[result].length;
};

module.exports = {
  splitText,
  countOccurance,
};

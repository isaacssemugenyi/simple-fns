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

/**
 * @function mergeObjects
 * @param {Array, Array, String, String, String}
 * @description takes in two arrays, an identifier from array one objects, an optional identifier from array two objects, and an optional deleteFlag ('d') to delete identifier two when returning a combined array
 * @example mergeObjects([{id: 1, name: 'Isaac', age: 20}], [{my_id: 1, address: 'Kampala'}], 'id', 'my_id', 'd')
 * @example mergeObjects([{id: 1, name: 'Isaac', age: 20}], [{my_id: 1, address: 'Kampala'}], 'id', 'my_id')
 * @example mergeObjects([{id: 1, name: 'Isaac', age: 20}], [{id: 1, address: 'Kampala'}], 'id', 'id')
 * @returns {Array}
 * @example [{id: 1, name: 'Isaac', age: 20, my_id: 1, address: 'Kampala'}]
 * @example [{id: 1, name: 'Isaac', age: 20, address: 'Kampala'}]
 */

function mergeObjects(
  firstArray,
  secondArray,
  firstIdentifier,
  secondIdentifier,
  deleteFlag
) {
  let obj1 = {};
  let obj2 = {};
  let result = [];

  if (!Array.isArray(firstArray)) {
    throw new Error('First argument should be an array');
  }
  if (typeof firstArray[0] !== 'object' || Array.isArray(firstArray[0])) {
    throw new Error('First argument elements should be objects');
  }
  if (JSON.stringify(firstArray[0]) === '{}') {
    throw new Error('First argument elements objects should not be empty');
  }
  if (!Array.isArray(secondArray)) {
    throw new Error('Second argument should be an array');
  }
  if (typeof secondArray[0] !== 'object' || Array.isArray(secondArray[0])) {
    throw new Error('Second argument elements should be objects');
  }
  if (JSON.stringify(secondArray[0]) === '{}') {
    throw new Error('Second argument elements objects should not be empty');
  }

  if (!firstIdentifier) {
    throw new Error('First identifier (argument 3) is required');
  }
  if (typeof firstIdentifier !== 'string') {
    throw new Error('First identifier (argument 3) should be a string');
  }

  if (typeof secondIdentifier !== 'string') {
    throw new Error('Second identifier (argument 4) should be a string');
  }
  if (deleteFlag && deleteFlag !== 'd') {
    throw new Error("The delete flag should only be a lower case 'd'");
  }

  // loop through the firstArray and add all its elements to obj1 one
  for (let item of firstArray) {
    obj1 = { ...obj1, [item[firstIdentifier]]: item };
  }

  // loop through the secondArray and add all its elements to obj2 one
  for (let item of secondArray) {
    obj2 = { ...obj2, [item[secondIdentifier]]: item };
  }

  // loop through obj1 and combine its properties with a corresponding elements in obj2
  Object.entries(obj1).map((item) => {
    let newObj = Object.assign({}, item[1], obj2[item[0]]);

    // if secondIdentifier is added and deleteFlag of 'd' given, then delete the second identifier in the combined objects
    if (deleteFlag && deleteFlag === 'd') {
      delete newObj[secondIdentifier];
    }

    // push each combined object into the result array
    result.push(newObj);
  });

  // Reset the objects
  obj1 = Object.assign({}, {});
  obj2 = Object.assign({}, {});

  // return the result an array of combined object
  return result;
}

/**
 * @function injectDupObj
 * @argument {Array, Array, String, String, String}
 * @description First array is the main array, Second array is the duplicate array, Third element is the identifier in the first array, Forth element is the duplicate identifier in the second array, Firth input is an optional string for the returned nested array of Second Array elements
 * @example injectDupObj([
 * {id: 1, name: 'john1', age: 30},
 * {id: 2, name: 'john2', age: 30},
 * {id: 3, name: 'john3', age: 30},
 * {id: 4, name: 'john4', age: 30},
 * {id: 5, name: 'john5', age: 30},
 * ], [
 *  {id: 1, user_id: 1,  course: 'SST'},
 *  {id: 2, user_id: 2, course: 'English'},
 *  {id: 3, user_id: 1, course: 'Science'},
 *  {id: 8, user_id: 1, course: 'Christianity'},
 *  {id: 4, user_id: 2, course: 'Luganda'},
 *  {id: 5, user_id: 3, course: 'Runyankole'},
 *  {id: 6, user_id: 4, course: 'Swahili'},
 *  {id: 7, user_id: 7, course: 'Luo'}
 *  ], "id", "user_id", "courses")
 * @returns {Array}
 * @example [
 *  {
 *    id: 1,
 *    name: 'john1',
 *    age: 30,
 *    courses: [
 *      { id: 1, user_id: 1, course: 'SST' },
 *      { id: 3, user_id: 1, course: 'Science' },
 *     { id: 8, user_id: 1, course: 'Christianity' }
 *   ]
 *  },
 *  {
 *    id: 2,
 *    name: 'john2',
 *    age: 30,
 *    courses: [
 *      { id: 2, user_id: 2, course: 'English' },
 *      { id: 4, user_id: 2, course: 'Luganda' }
 *    ]
 *  },
 *  {
 *    id: 3,
 *    name: 'john3',
 *    age: 30,
 *    courses: [ { id: 5, user_id: 3, course: 'Runyankole' } ]
 *  },
 *  {
 *    id: 4,
 *    name: 'john4',
 *    age: 30,
 *    courses: [ { id: 6, user_id: 4, course: 'Swahili' } ]
 *  },
 *  { id: 5, name: 'john5', age: 30 }
 *  ]
 */
function injectDupObj(
  mainArray,
  dupArray,
  mainIdentifier,
  dupIdentifier,
  lookupKey = 'lookup'
) {
  // Objects to store the mainArray and duplArray elements
  let mainHashTable = {};
  let uniqueHashTable = {};

  if (!Array.isArray(mainArray)) {
    throw new Error('First argument should be an array');
  }

  if (typeof mainArray[0] !== 'object' || Array.isArray(mainArray[0])) {
    throw new Error('First argument elements should be objects');
  }
  if (JSON.stringify(mainArray[0]) === '{}') {
    throw new Error('First argument elements objects should not be empty');
  }

  if (!Array.isArray(dupArray)) {
    throw new Error('Second argument should be an array');
  }

  if (typeof dupArray[0] !== 'object' || Array.isArray(dupArray[0])) {
    throw new Error('Second argument elements should be objects');
  }

  if (JSON.stringify(dupArray[0]) === '{}') {
    throw new Error('Second argument elements objects should not be empty');
  }

  if (!mainIdentifier) {
    throw new Error('Main identifier (argument 3) is required');
  }

  if (typeof mainIdentifier !== 'string') {
    throw new Error('Main identifier should be a string');
  }

  if (!dupIdentifier) {
    throw new Error('Duplicate identifier (argument 4) is required');
  }

  if (typeof dupIdentifier !== 'string') {
    throw new Error('Duplicate identifier should be a string');
  }

  if (lookupKey && typeof lookupKey !== 'string') {
    throw new Error('lookupKey should be a string');
  }

  // Loop to add all mainArray element to the object
  for (let item of mainArray) {
    mainHashTable = { ...mainHashTable, [item[mainIdentifier]]: item };
  }

  // Loop to iterate through the duplicate elements in the dupArray
  for (let item of dupArray) {
    // Check if an item's identifier exists in the uniqueHashTable object
    if (
      uniqueHashTable &&
      uniqueHashTable.hasOwnProperty(item[dupIdentifier])
    ) {
      // Get the element in the mainHashTable and spread it back in, while adding a new item to the lookup table
      mainHashTable[item[dupIdentifier]] = {
        ...mainHashTable[item[dupIdentifier]],
        [lookupKey]: [...mainHashTable[item[dupIdentifier]][lookupKey], item],
      };
    } else {
      // Add this item's duplicate id into the uniqueHashTable
      uniqueHashTable[item[dupIdentifier]] = item[dupIdentifier];
      // If this item unique id exits in the mainHashTable
      if (mainHashTable[item[dupIdentifier]]) {
        // Add the next duplicate item in the the lookup array
        mainHashTable[item[dupIdentifier]] = {
          ...mainHashTable[item[dupIdentifier]],
          [lookupKey]: [item],
        };
      }
    }
  }

  // Empty the uniqueHashTable
  uniqueHashTable = Object.assign({}, {});

  // Return the values of the mainHashTable in form of an array
  return Object.values(mainHashTable);
}

module.exports = {
  splitText,
  countOccurance,
  mergeObjects,
  injectDupObj,
};

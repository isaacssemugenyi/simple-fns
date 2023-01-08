type IDelimeter =
  | ' '
  | ','
  | '; '
  | '/'
  | '|'
  | '\\'
  | '^'
  | '&'
  | '*'
  | '>'
  | '<'
  | '+'
  | '-'
  | '='
  | '~'
  | '#'
  | '$'
  | '@'
  | '%'
  | ':'
  | '_'
  | string;

interface ISplitTextReturn {
  total?: number;
  list?: string[];
}

type ISplitTextResult = 0 | 1 | 2;
type ICountOccuranceResult = ISplitTextResult | 4;

/**
 * @method splitText
 * @argument {String, IDelimeter, ISplitTextResult} -> {'home work', '-', 0}
 * @returns {ISplitTextReturn} -> {total: 0, list: ['home', 'work']}
 */
export declare function splitText(
  text: string,
  delimeter: IDelimeter,
  result?: ISplitTextResult
): ISplitTextReturn;

/**
 * @method countOccurance
 * @argument {String, ICountOccuranceResult, IDelimeter} -> {'home work', 2, ' '}
 * @returns {number} -> 2
 */
export declare function countOccurance(
  text: string,
  result: ICountOccuranceResult,
  delimeter: IDelimeter
): number;

type TArrayType = string[] | boolean[] | number[] | object[];

interface IElement {
  [key: string]: string | number | boolean | TArrayType | TArrayType[];
}

type TArrayType = IElement[];

/**
 * @method mergeObjects
 * @argument {Array, Array, String, String, String}
 * @description takes in two arrays, an identifier from array one objects, an optional identifier from array two objects, and an optional deleteFlag ('d') to delete identifier two when returning a combined array
 * @example mergeObjects([{id: 1, name: 'Isaac', age: 20}], [{my_id: 1, address: 'Kampala'}], 'id', 'my_id', 'd')
 * @example mergeObjects([{id: 1, name: 'Isaac', age: 20}], [{my_id: 1, address: 'Kampala'}], 'id', 'my_id')
 * @example mergeObjects([{id: 1, name: 'Isaac', age: 20}], [{id: 1, address: 'Kampala'}], 'id')
 * @returns {Array}
 * @example [{id: 1, name: 'Isaac', age: 20, my_id: 1, address: 'Kampala'}]
 * @example [{id: 1, name: 'Isaac', age: 20, address: 'Kampala'}]
 * */

export declare function mergeObjects(
  firstArray: TArrayType,
  secondArray: TArrayType,
  firstIdentifier: string,
  secondIdentifier?: string,
  deleteFlag?: 'd'
): TArrayType;

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
export declare function injectDupObj(
  mainArray: TArrayType,
  dupArray: TArrayType,
  mainIdentifier: string,
  dupIdentifier: string,
  lookupKey?: string
): TArrayType;

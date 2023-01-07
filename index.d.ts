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

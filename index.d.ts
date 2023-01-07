// declare module 'simple-fns' {
type IText = string;
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
  | IText;

type IResult = 0 | 1 | 2;
type ICountResult = IResult | 4;

interface ISplitTextReturn {
  total?: number;
  list?: string[];
}

export declare function splitText(
  text: IText,
  delimeter: IDelimeter,
  result: IResult
): ISplitTextReturn;

export declare function countOccurance(
  text: IText,
  result: ICountResult,
  delimeter: IDelimeter
): number;
// }

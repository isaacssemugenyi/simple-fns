Manupilate strings of all types to get desired output

![npm](https://img.shields.io/npm/v/simple-fns)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/simple-fns/0.1.2)
![licence (MIT)](https://img.shields.io/npm/l/simple-fns)

- Usage
  - [splitText](#splittext)
  - [countOccurance](#countoccurance)

## Usage

import the js-fns library

```js
const { splitText, countOccurance } = require('simple-fns');

// or

const jsFns = require('simple-fns');
```

### splitText

Split a string into an array as well as the count for the length using a specified delimiter

- options

  1. With option 0 (optional)

  ```js
  const result = splitText('test test test', ' ');

  // result -> { total: 3, list: ['test', 'test', 'test']}

  // or
  const result = splitText('test test test', ' ', 0);

  // result -> {total: 3,list: ['test', 'test', 'test']}
  ```

  2. With option 1

  ```js
  const result = splitText('test test test', ' ', 1);

  // result -> { total: 3}

  // or
  const result = splitText('test , test , test', ',', 1);

  // result -> { total: 3}
  ```

  3. With option 2

  ```js
  const result = splitText('test test test', ' ', 2);

  // result -> {list: ['test', 'test', 'test']}

  // or
  const result = splitText('test , test , test', ',', 2);

  //result -> {list: ['test', 'test', 'test']}
  // Note: if the delimeter is other than ' ' (space), then all whitespaces will be trimmed from the string before the array is returned.
  ```

### countOccurance

Count the number of times a character occurs in a string

- options

  1. With option 0 (optional) -> count Uppercases

  ```js
  const result1 = countOccurance('Home-work-Space-');
  // result1 -> 2

  const result2 = countOccurance('homeworkspace');
  // result2 -> 0

  const result3 = countOccurance('homeworkSpace', 0);
  // result3 -> 1

  const result4 = countOccurance('homeworkSpace', 0, '');
  // result4 -> 1

  const result5 = countOccurance('homeworkSpace', 0, ' ');
  // result5 -> 1

  const result6 = countOccurance('homeworkSpace', 0, ',');
  // result6 -> 1
  ```

  2.  With option 1 -> count Lowercases

  ```js
  const result1 = countOccurance('Home-work-Space-', 1);
  // result1 -> 11

  const result2 = countOccurance('Home work Space', 1);
  // result2 -> 11

  const result3 = countOccurance('Home work Space ', 1);
  // result3 -> 11

  const result4 = countOccurance('Home, work , Space ', 1);
  // result4 -> 11

  const result5 = countOccurance('homeworkspace', 1, ',');
  // result5 -> 13
  ```

  3.  With option 2 -> digits/ numbers

  ```js
  const result1 = countOccurance('1ome-2ork-3pace-', 2);
  // result1 -> 3

  const result2 = countOccurance('1234', 2);
  // result2 -> 4

  const result3 = countOccurance('-1', 2);
  // result3 -> 1

  const result4 = countOccurance('1,2,3,4,5', 2);
  // result4 -> 5

  const result5 = countOccurance('4  6  . 7', 2);
  // result5 -> 3
  ```

  4.  With option 3 -> whitespaces in a string

  ```js
  const result1 = countOccurance('1ome-2ork-3pace-', 3, ' ');
  // result1 -> 0

  const result2 = countOccurance('1 2 3 4', 3);
  // result2 -> 3

  const result3 = countOccurance(' 1 2 3 4 ', 3);
  // result3 -> 5

  const result4 = countOccurance(' 0 ', 3);
  // result4 -> 2

  const result5 = countOccurance('Home Work  Space ', 3, ' ');
  // result5 -> 4
  ```

  5.  With option 4 -> delimiter in a string

  ```js
  const result1 = countOccurance('1ome-2ork-3pace-', 4, '-');
  // result1 -> 3

  const result2 = countOccurance('1ome-2ork-3pace-', 4, '- ');
  // result2 -> 3

  const result3 = countOccurance('1ome-2ork-3pace-', 4, ' - ');
  // result3 -> 3

  const result4 = countOccurance('1ome/2ork/3pace/', 4, '/');
  // result4 -> 3

  const result5 = countOccurance('boy , girl , kid , child', 4, ',');
  // result5 -> 3

  const result5 = countOccurance('boy , girl , kid , child', 4, '/');
  // result5 -> 0
  ```

  #### Note

  - Added type definitions on version `0.1.0`, if you experience any issue, run`npm i simple-fns@0.0.1` to install a previous version without types
  - As well raise an issue [here](https://github.com/isaacssemugenyi/simple-fns/issues)

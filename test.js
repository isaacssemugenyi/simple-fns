const {
  splitText,
  countOccurance,
  mergeObjects,
  injectDupObj,
} = require('./index');

describe('splitText', () => {
  test('Only strings are supported as a first argument', () => {
    expect(() => splitText()).toThrow(
      'Only strings are supported as a first argument'
    );
    expect(() => splitText([])).toThrow(
      'Only strings are supported as a first argument'
    );
    expect(() => splitText({})).toThrow(
      'Only strings are supported as a first argument'
    );
    expect(() => splitText(123)).toThrow(
      'Only strings are supported as a first argument'
    );
    expect(() => splitText(true)).toThrow(
      'Only strings are supported as a first argument'
    );
  });

  test('At least a single character is required in a string', () => {
    expect(() => splitText('')).toThrow(
      'At least a single character is required in a string'
    );
    expect(() => splitText(' ')).toThrow(
      'At least a single character is required in a string'
    );
    expect(() => splitText('  ')).toThrow(
      'At least a single character is required in a string'
    );
    expect(() => splitText('  ')).toThrow(
      'At least a single character is required in a string'
    );
  });

  test('Only numbers from 0, 1, 2 are supported, 0 is default', () => {
    expect(() => splitText('test', ',', '1')).toThrow(
      'Only numbers from 0, 1, 2 are supported, 0 is default'
    );

    expect(() => splitText('test', ',', 'test')).toThrow(
      'Only numbers from 0, 1, 2 are supported, 0 is default'
    );

    expect(() => splitText('test', ',', true)).toThrow(
      'Only numbers from 0, 1, 2 are supported, 0 is default'
    );

    expect(() => splitText('test', ',', -1)).toThrow(
      'Only numbers from 0, 1, 2 are supported, 0 is default'
    );

    expect(() => splitText('test', ',', 4)).toThrow(
      'Only numbers from 0, 1, 2 are supported, 0 is default'
    );
  });

  test("to returns {total: 3, list: ['test', 'test', 'test']}", () => {
    expect(splitText('test test test', ' ')).toEqual({
      total: 3,
      list: ['test', 'test', 'test'],
    });

    expect(splitText('test test test', ' ', 0)).toEqual({
      total: 3,
      list: ['test', 'test', 'test'],
    });
  });

  test('to returns {total: 3}', () => {
    expect(splitText('test test test', ' ', 1)).toEqual({
      total: 3,
    });

    expect(splitText('test , test , test', ',', 1)).toEqual({
      total: 3,
    });
  });

  test("to returns {list: ['test', 'test', 'test']}", () => {
    expect(splitText('test test test', ' ', 2)).toEqual({
      list: ['test', 'test', 'test'],
    });

    expect(splitText('test , test , test', ',', 2)).toEqual({
      list: ['test', 'test', 'test'],
    });
  });
});

describe('countOccurance', () => {
  test('Only strings are supported as a first argument', () => {
    expect(() => countOccurance()).toThrow(
      'Only strings are supported as a first argument'
    );
    expect(() => countOccurance([])).toThrow(
      'Only strings are supported as a first argument'
    );
    expect(() => countOccurance({})).toThrow(
      'Only strings are supported as a first argument'
    );
    expect(() => countOccurance(123)).toThrow(
      'Only strings are supported as a first argument'
    );
    expect(() => countOccurance(true)).toThrow(
      'Only strings are supported as a first argument'
    );
  });

  test('Only numbers from 0, 1, 2, 3, 4 are supported, 0 is default', () => {
    expect(() => countOccurance('test', '1')).toThrow(
      'Only numbers from 0, 1, 2, 3, 4 are supported, 0 is default'
    );

    expect(() => countOccurance('test', true)).toThrow(
      'Only numbers from 0, 1, 2, 3, 4 are supported, 0 is default'
    );

    expect(() => countOccurance('test', [])).toThrow(
      'Only numbers from 0, 1, 2, 3, 4 are supported, 0 is default'
    );

    expect(() => countOccurance('test', {})).toThrow(
      'Only numbers from 0, 1, 2, 3, 4 are supported, 0 is default'
    );

    expect(() => countOccurance('test', -1)).toThrow(
      'Only numbers from 0, 1, 2, 3, 4 are supported, 0 is default'
    );

    expect(() => countOccurance('test', 5)).toThrow(
      'Only numbers from 0, 1, 2, 3, 4 are supported, 0 is default'
    );
  });

  test('At least a single character is required in a string', () => {
    expect(() => countOccurance('')).toThrow(
      'At least a single character is required in a string'
    );
    expect(() => countOccurance(' ')).toThrow(
      'At least a single character is required in a string'
    );
    expect(() => countOccurance('  ')).toThrow(
      'At least a single character is required in a string'
    );
    expect(() => countOccurance('  ')).toThrow(
      'At least a single character is required in a string'
    );
  });

  test('to return count of Uppercase letters', () => {
    expect(countOccurance('Home-work-Space-')).toEqual(2);
    expect(countOccurance('Home work Space')).toEqual(2);
    expect(countOccurance('Home work Space ')).toEqual(2);
    expect(countOccurance('HomeworkSpace ')).toEqual(2);
    expect(countOccurance('HomeworkSpace')).toEqual(2);
    expect(countOccurance('homeworkspace')).toEqual(0);
    expect(countOccurance('homeworkSpace', 0)).toEqual(1);
    expect(countOccurance('homeworkSpace', 0, '')).toEqual(1);
    expect(countOccurance('homeworkSpace', 0, ' ')).toEqual(1);
    expect(countOccurance('homeworkSpace', 0, ',')).toEqual(1);
  });

  test('to return count of Lowercase letters', () => {
    expect(countOccurance('Home-work-Space-', 1)).toEqual(11);
    expect(countOccurance('Home work Space', 1)).toEqual(11);
    expect(countOccurance('Home work Space ', 1)).toEqual(11);
    expect(countOccurance('Home, work , Space ', 1)).toEqual(11);
    expect(countOccurance('HomeworkSpace ', 1)).toEqual(11);
    expect(countOccurance('HomeworkSpace', 1)).toEqual(11);
    expect(countOccurance('homeworkspace', 1)).toEqual(13);
    expect(countOccurance('homeworkspace', 1, ',')).toEqual(13);
  });

  test('to return count of digits numbers', () => {
    expect(countOccurance('1ome-2ork-3pace-', 2)).toEqual(3);
    expect(countOccurance('1234', 2)).toEqual(4);
    expect(countOccurance('0', 2)).toEqual(1);
    expect(countOccurance('-1', 2)).toEqual(1);
    expect(countOccurance('-10', 2)).toEqual(2);
    expect(countOccurance('1, 2, 4, 5', 2)).toEqual(4);
    expect(countOccurance('1,2,3,4,5', 2)).toEqual(5);
    expect(countOccurance('4  6  . 7', 2)).toEqual(3);
  });

  test('to return count of spaces in a string', () => {
    expect(countOccurance('1ome-2ork-3pace-', 3, ' ')).toEqual(0);
    expect(countOccurance('1 2 3 4', 3)).toEqual(3);
    expect(countOccurance(' 1 2 3 4', 3)).toEqual(4);
    expect(countOccurance(' 1 2 3 4 ', 3)).toEqual(5);
    expect(countOccurance(' 0 ', 3)).toEqual(2);
    expect(countOccurance('-1', 3)).toEqual(0);
    expect(countOccurance('1, 2, 4, 5', 3)).toEqual(3);
    expect(countOccurance('Home Work Space', 3, ' ')).toEqual(2);
    expect(countOccurance('Home Work  Space', 3, ' ')).toEqual(3);
    expect(countOccurance('Home Work  Space ', 3, ' ')).toEqual(4);
  });

  test('to return count of delimeter in a string', () => {
    expect(countOccurance('1ome-2ork-3pace-', 4, '-')).toEqual(3);
    expect(countOccurance('1ome-2ork-3pace-', 4, '- ')).toEqual(3);
    expect(countOccurance('1ome-2ork-3pace-', 4, ' - ')).toEqual(3);
    expect(countOccurance('1ome-2ork-3pace-', 4, ' -')).toEqual(3);
    expect(countOccurance('1ome-2ork-3pace-', 4, ' --')).toEqual(3);
    expect(countOccurance('1ome-2ork-3pace-', 4, '-- ')).toEqual(3);
    expect(countOccurance('1ome-2ork-3pace-', 4, '--')).toEqual(3);
    expect(countOccurance('1ome 2ork 3pace', 4, ' ')).toEqual(2);
    expect(countOccurance('1ome/2ork/3pace/', 4, '/')).toEqual(3);
    expect(countOccurance('boy , girl , kid , child', 4, '/')).toEqual(0);
    expect(countOccurance('boy , girl , kid , child', 4, ',')).toEqual(3);
  });
});

describe('mergeObjects', () => {
  test('First argument should be an array', () => {
    expect(() => mergeObjects()).toThrow('First argument should be an array');
    expect(() => mergeObjects({})).toThrow('First argument should be an array');
    expect(() => mergeObjects('')).toThrow('First argument should be an array');
    expect(() => mergeObjects(1)).toThrow('First argument should be an array');
    expect(() => mergeObjects(' ')).toThrow(
      'First argument should be an array'
    );
    expect(() => mergeObjects(true)).toThrow(
      'First argument should be an array'
    );
  });

  test('First argument elements should be objects', () => {
    expect(() => mergeObjects([])).toThrow(
      'First argument elements should be objects'
    );
    expect(() => mergeObjects([1])).toThrow(
      'First argument elements should be objects'
    );
    expect(() => mergeObjects([''])).toThrow(
      'First argument elements should be objects'
    );
    expect(() => mergeObjects(['test'])).toThrow(
      'First argument elements should be objects'
    );
    expect(() => mergeObjects([true])).toThrow(
      'First argument elements should be objects'
    );
    expect(() => mergeObjects([[]])).toThrow(
      'First argument elements should be objects'
    );
  });

  test('First argument elements objects should not be empty', () => {
    expect(() => mergeObjects([{}])).toThrow(
      'First argument elements objects should not be empty'
    );
  });

  test('Second argument should be an array', () => {
    expect(() => mergeObjects([{ id: 1 }])).toThrow(
      'Second argument should be an array'
    );
    expect(() => mergeObjects([{ id: 1 }], {})).toThrow(
      'Second argument should be an array'
    );
    expect(() => mergeObjects([{ id: 1 }], 1)).toThrow(
      'Second argument should be an array'
    );
    expect(() => mergeObjects([{ id: 1 }], 'test')).toThrow(
      'Second argument should be an array'
    );
    expect(() => mergeObjects([{ id: 1 }], true)).toThrow(
      'Second argument should be an array'
    );
  });

  test('Second argument elements should be objects', () => {
    expect(() => mergeObjects([{ id: 1 }], [])).toThrow(
      'Second argument elements should be objects'
    );
    expect(() => mergeObjects([{ id: 1 }], [1])).toThrow(
      'Second argument elements should be objects'
    );
    expect(() => mergeObjects([{ id: 1 }], [true])).toThrow(
      'Second argument elements should be objects'
    );
    expect(() => mergeObjects([{ id: 1 }], [[]])).toThrow(
      'Second argument elements should be objects'
    );
    expect(() => mergeObjects([{ id: 1 }], ['test'])).toThrow(
      'Second argument elements should be objects'
    );
    expect(() => mergeObjects([[]])).toThrow(
      'First argument elements should be objects'
    );
  });

  test('Second argument elements objects should not be empty', () => {
    expect(() => mergeObjects([{ id: 1 }], [{}])).toThrow(
      'Second argument elements objects should not be empty'
    );
  });

  test('First identifier (argument 3) is required', () => {
    expect(() => mergeObjects([{ id: 1 }], [{ id: 5 }])).toThrow(
      'First identifier (argument 3) is required'
    );
  });

  test('First identifier (argument 3) should be a string', () => {
    expect(() => mergeObjects([{ id: 1 }], [{ id: 5 }], 4)).toThrow(
      'First identifier (argument 3) should be a string'
    );
    expect(() => mergeObjects([{ id: 1 }], [{ id: 5 }], true)).toThrow(
      'First identifier (argument 3) should be a string'
    );
    expect(() => mergeObjects([{ id: 1 }], [{ id: 5 }], {})).toThrow(
      'First identifier (argument 3) should be a string'
    );
    expect(() => mergeObjects([{ id: 1 }], [{ id: 5 }], [])).toThrow(
      'First identifier (argument 3) should be a string'
    );
  });

  test('Second identifier (argument 4) should be a string', () => {
    expect(() => mergeObjects([{ id: 1 }], [{ id: 5 }], 'id', 5)).toThrow(
      'Second identifier (argument 4) should be a string'
    );

    expect(() => mergeObjects([{ id: 1 }], [{ id: 5 }], 'id', true)).toThrow(
      'Second identifier (argument 4) should be a string'
    );

    expect(() => mergeObjects([{ id: 1 }], [{ id: 5 }], 'id', [])).toThrow(
      'Second identifier (argument 4) should be a string'
    );

    expect(() => mergeObjects([{ id: 1 }], [{ id: 5 }], 'id', {})).toThrow(
      'Second identifier (argument 4) should be a string'
    );
  });

  test("The delete flag should only be a lower case 'd'", () => {
    expect(() => mergeObjects([{ id: 1 }], [{ id: 5 }], 'id', 'id', 1)).toThrow(
      "The delete flag should only be a lower case 'd'"
    );

    expect(() =>
      mergeObjects([{ id: 1 }], [{ id: 5 }], 'id', 'id', true)
    ).toThrow("The delete flag should only be a lower case 'd'");

    expect(() =>
      mergeObjects([{ id: 1 }], [{ id: 5 }], 'id', 'id', [])
    ).toThrow("The delete flag should only be a lower case 'd'");

    expect(() =>
      mergeObjects([{ id: 1 }], [{ id: 5 }], 'id', 'id', {})
    ).toThrow("The delete flag should only be a lower case 'd'");

    expect(() =>
      mergeObjects([{ id: 1 }], [{ id: 5 }], 'id', 'id', 'test')
    ).toThrow("The delete flag should only be a lower case 'd'");

    expect(() =>
      mergeObjects([{ id: 1 }], [{ id: 5 }], 'id', 'id', 'D')
    ).toThrow("The delete flag should only be a lower case 'd'");
  });

  test('Returns a formatted array with my_id in the objects key', () => {
    expect(
      mergeObjects(
        [{ id: 1, name: 'Isaac', age: 20 }],
        [{ my_id: 1, address: 'Kampala' }],
        'id',
        'my_id'
      )
    ).toEqual([
      { id: 1, name: 'Isaac', age: 20, my_id: 1, address: 'Kampala' },
    ]);

    expect(
      mergeObjects(
        [{ id: 1, name: 'Isaac', age: 20 }],
        [{ id: 1, address: 'Kampala' }],
        'id',
        'id'
      )
    ).toEqual([{ id: 1, name: 'Isaac', age: 20, address: 'Kampala' }]);
  });

  test('Returns a formatted array without second objects identifier in the objects key', () => {
    expect(
      mergeObjects(
        [{ id: 1, name: 'Isaac', age: 20 }],
        [{ my_id: 1, address: 'Kampala' }],
        'id',
        'my_id',
        'd'
      )
    ).toEqual([{ id: 1, name: 'Isaac', age: 20, address: 'Kampala' }]);

    // identifier key in the mainArray and identifier key in the dupArray, it is advised not to be the same if 'd' deleteFlag is passed, else both ids will be deleted from the return array
    expect(
      mergeObjects(
        [{ id: 1, name: 'Isaac', age: 20 }],
        [{ id: 1, address: 'Kampala' }],
        'id',
        'id',
        'd'
      )
    ).toEqual([{ name: 'Isaac', age: 20, address: 'Kampala' }]);

    expect(
      mergeObjects(
        [{ id: 1, name: 'Isaac', age: 20 }],
        [{ id: 1, address: 'Kampala' }],
        'id',
        'id'
      )
    ).toEqual([{ id: 1, name: 'Isaac', age: 20, address: 'Kampala' }]);
  });
});

describe('injectDupObj', () => {
  test('First argument should be an array', () => {
    expect(() => injectDupObj()).toThrow('First argument should be an array');
    expect(() => injectDupObj({})).toThrow('First argument should be an array');
    expect(() => injectDupObj('')).toThrow('First argument should be an array');
    expect(() => injectDupObj(1)).toThrow('First argument should be an array');
    expect(() => injectDupObj(' ')).toThrow(
      'First argument should be an array'
    );
    expect(() => injectDupObj(true)).toThrow(
      'First argument should be an array'
    );
  });

  test('First argument elements should be objects', () => {
    expect(() => injectDupObj([])).toThrow(
      'First argument elements should be objects'
    );
    expect(() => injectDupObj([1])).toThrow(
      'First argument elements should be objects'
    );
    expect(() => injectDupObj([''])).toThrow(
      'First argument elements should be objects'
    );
    expect(() => injectDupObj(['test'])).toThrow(
      'First argument elements should be objects'
    );
    expect(() => injectDupObj([true])).toThrow(
      'First argument elements should be objects'
    );
    expect(() => injectDupObj([[]])).toThrow(
      'First argument elements should be objects'
    );
  });

  test('First argument elements objects should not be empty', () => {
    injectDupObj;
    expect(() => injectDupObj([{}])).toThrow(
      'First argument elements objects should not be empty'
    );
  });

  test('Second argument should be an array', () => {
    expect(() => injectDupObj([{ id: 1 }])).toThrow(
      'Second argument should be an array'
    );
    expect(() => injectDupObj([{ id: 1 }], {})).toThrow(
      'Second argument should be an array'
    );
    expect(() => injectDupObj([{ id: 1 }], 1)).toThrow(
      'Second argument should be an array'
    );
    expect(() => injectDupObj([{ id: 1 }], 'test')).toThrow(
      'Second argument should be an array'
    );
    expect(() => injectDupObj([{ id: 1 }], true)).toThrow(
      'Second argument should be an array'
    );
  });

  test('Second argument elements should be objects', () => {
    expect(() => injectDupObj([{ id: 1 }], [])).toThrow(
      'Second argument elements should be objects'
    );
    expect(() => injectDupObj([{ id: 1 }], [1])).toThrow(
      'Second argument elements should be objects'
    );
    expect(() => injectDupObj([{ id: 1 }], [true])).toThrow(
      'Second argument elements should be objects'
    );
    expect(() => injectDupObj([{ id: 1 }], [[]])).toThrow(
      'Second argument elements should be objects'
    );
    expect(() => injectDupObj([{ id: 1 }], ['test'])).toThrow(
      'Second argument elements should be objects'
    );
    expect(() => injectDupObj([[]])).toThrow(
      'First argument elements should be objects'
    );
  });

  test('Second argument elements objects should not be empty', () => {
    expect(() => injectDupObj([{ id: 1 }], [{}])).toThrow(
      'Second argument elements objects should not be empty'
    );
  });

  test('Main identifier (argument 3) is required', () => {
    expect(() => injectDupObj([{ id: 1 }], [{ id: 5 }])).toThrow(
      'Main identifier (argument 3) is required'
    );
  });

  test('Main identifier should be a string', () => {
    expect(() => injectDupObj([{ id: 1 }], [{ id: 5 }], 4)).toThrow(
      'Main identifier should be a string'
    );
    expect(() => injectDupObj([{ id: 1 }], [{ id: 5 }], true)).toThrow(
      'Main identifier should be a string'
    );
    expect(() => injectDupObj([{ id: 1 }], [{ id: 5 }], {})).toThrow(
      'Main identifier should be a string'
    );
    expect(() => injectDupObj([{ id: 1 }], [{ id: 5 }], [])).toThrow(
      'Main identifier should be a string'
    );
  });

  test('Duplicate identifier (argument 4) is required', () => {
    expect(() => injectDupObj([{ id: 1 }], [{ id: 5 }], 'id')).toThrow(
      'Duplicate identifier (argument 4) is required'
    );
  });

  test('Duplicate identifier should be a string', () => {
    expect(() => injectDupObj([{ id: 1 }], [{ id: 5 }], 'id', 4)).toThrow(
      'Duplicate identifier should be a string'
    );
    expect(() => injectDupObj([{ id: 1 }], [{ id: 5 }], 'id', true)).toThrow(
      'Duplicate identifier should be a string'
    );
    expect(() => injectDupObj([{ id: 1 }], [{ id: 5 }], 'id', {})).toThrow(
      'Duplicate identifier should be a string'
    );
    expect(() => injectDupObj([{ id: 1 }], [{ id: 5 }], 'id', [])).toThrow(
      'Duplicate identifier should be a string'
    );
  });

  test('lookupKey should be a string', () => {
    expect(() =>
      injectDupObj([{ id: 1 }], [{ id: 5 }], 'id', 'id', [])
    ).toThrow('lookupKey should be a string');
    expect(() =>
      injectDupObj([{ id: 1 }], [{ id: 5 }], 'id', 'id', true)
    ).toThrow('lookupKey should be a string');
    expect(() =>
      injectDupObj([{ id: 1 }], [{ id: 5 }], 'id', 'id', {})
    ).toThrow('lookupKey should be a string');
    expect(() => injectDupObj([{ id: 1 }], [{ id: 5 }], 'id', 'id', 1)).toThrow(
      'lookupKey should be a string'
    );
  });

  test('Returns a combined object', () => {
    expect(
      injectDupObj(
        [
          { id: 1, name: 'john1', age: 30 },
          { id: 2, name: 'john2', age: 30 },
          { id: 3, name: 'john3', age: 30 },
          { id: 4, name: 'john4', age: 30 },
          { id: 5, name: 'john5', age: 30 },
        ],
        [
          { id: 1, user_id: 1, course: 'SST' },
          { id: 2, user_id: 2, course: 'English' },
          { id: 3, user_id: 1, course: 'Science' },
          { id: 8, user_id: 1, course: 'Christianity' },
          { id: 4, user_id: 2, course: 'Luganda' },
          { id: 5, user_id: 3, course: 'Runyankole' },
          { id: 6, user_id: 4, course: 'Swahili' },
          { id: 7, user_id: 7, course: 'Luo' },
        ],
        'id',
        'user_id',
        'courses'
      )
    ).toEqual([
      {
        id: 1,
        name: 'john1',
        age: 30,
        courses: [
          { id: 1, user_id: 1, course: 'SST' },
          { id: 3, user_id: 1, course: 'Science' },
          { id: 8, user_id: 1, course: 'Christianity' },
        ],
      },
      {
        id: 2,
        name: 'john2',
        age: 30,
        courses: [
          { id: 2, user_id: 2, course: 'English' },
          { id: 4, user_id: 2, course: 'Luganda' },
        ],
      },
      {
        id: 3,
        name: 'john3',
        age: 30,
        courses: [{ id: 5, user_id: 3, course: 'Runyankole' }],
      },
      {
        id: 4,
        name: 'john4',
        age: 30,
        courses: [{ id: 6, user_id: 4, course: 'Swahili' }],
      },
      { id: 5, name: 'john5', age: 30 },
    ]);

    expect(
      injectDupObj(
        [
          { id: 1, name: 'john1', age: 30 },
          { id: 2, name: 'john2', age: 30 },
          { id: 3, name: 'john3', age: 30 },
          { id: 4, name: 'john4', age: 30 },
          { id: 5, name: 'john5', age: 30 },
        ],
        [
          { id: 1, user_id: 1, course: 'SST' },
          { id: 2, user_id: 2, course: 'English' },
          { id: 3, user_id: 1, course: 'Science' },
          { id: 8, user_id: 1, course: 'Christianity' },
          { id: 4, user_id: 2, course: 'Luganda' },
          { id: 5, user_id: 3, course: 'Runyankole' },
          { id: 6, user_id: 4, course: 'Swahili' },
          { id: 7, user_id: 7, course: 'Luo' },
        ],
        'id',
        'user_id'
      )
    ).toEqual([
      {
        id: 1,
        name: 'john1',
        age: 30,
        lookup: [
          { id: 1, user_id: 1, course: 'SST' },
          { id: 3, user_id: 1, course: 'Science' },
          { id: 8, user_id: 1, course: 'Christianity' },
        ],
      },
      {
        id: 2,
        name: 'john2',
        age: 30,
        lookup: [
          { id: 2, user_id: 2, course: 'English' },
          { id: 4, user_id: 2, course: 'Luganda' },
        ],
      },
      {
        id: 3,
        name: 'john3',
        age: 30,
        lookup: [{ id: 5, user_id: 3, course: 'Runyankole' }],
      },
      {
        id: 4,
        name: 'john4',
        age: 30,
        lookup: [{ id: 6, user_id: 4, course: 'Swahili' }],
      },
      { id: 5, name: 'john5', age: 30 },
    ]);
  });
});

const { splitText, countOccurance } = require('./index');

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

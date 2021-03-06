/**
 * Trys to parse the given String into a number
 * and return NaN if value is not a valid number.
 *
 * @format
 * @param {String} value
 * @returns {*}
 */
export function parseNumber(value) {
  if (typeof value === 'number') return value;
  const input = value.replace(/,/g, '.');
  return Number(input);
}

/**
 * Compare function to sort an of numbers in acending order.
 * @param {Number} a
 * @param {Number} b
 */
export function sortAscending(a, b) {
  return a < b ? -1 : 1;
}

/**
 * Map a matrix to a new value, just like the normal array.map function.
 * Callback gets the value, the rowindex and the columnindex.
 * @param {Matrix} arr
 * @param {Function} fn
 * @returns {Matrix}
 */
export function mapMatrix(arr, fn) {
  const length = arr.length;
  const matrix = arr.slice();
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      matrix[i][j] = fn(matrix[i][j], i, j);
    }
  }
  return matrix;
}

/**
 * Takes an a table as input and computes the column and
 * rowtotals as well as the total of values and the overall sum.
 * @param {Array} table
 * @returns {Object} columnTotal, rowTotal, sum, uniquePoints
 */
export function evaluateTable(table) {
  const columnTotal = [];
  const rowTotal = [];
  let sum = 0;
  let uniquePoints = 0;

  if (table.length !== 0) {
    const firstRow = table[0];
    for (let i = 0; i < firstRow.length; i++) {
      for (let j = 0; j < table.length; j++) {
        const value = table[j][i];
        if (typeof value !== 'number') {
          continue;
        }
        columnTotal[i] = (columnTotal[i] || 0) + value;
        rowTotal[j] = (rowTotal[j] || 0) + value;
        sum = sum += value;
        if (value !== 0) {
          uniquePoints++;
        }
      }
    }
  }

  return {
    columnTotal,
    rowTotal,
    sum,
    uniquePoints,
  };
}

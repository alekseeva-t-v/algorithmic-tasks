import { test } from './modules/tester';

/**
 * Возвращает булевое значение, true, если элемент есть в массиве, иначе false
 *
 * @param {Array} array исходный массив.
 * @param {number} element элемент наличие, которого необходимо проверить в массиве.
 * @return {boolean} true, если элемент есть в массиве, иначе false.
 */
function binarySearch(array, element) {
  if (array.length === 0) {
    return false;
  }

  if (array.length === 1) {
    return array[0] === element;
  }

  const center = Math.floor(array.length / 2);

  if (array[center] === element) {
    return true;
  }

  if (array[center] > element) {
    return binarySearch(array.slice(0, center), element)
  }

  if (array[center] < element) {
    return binarySearch(array.slice(center + 1), element)
  }

  return false;
}

test(binarySearch([], 3), false);
test(binarySearch([3], 3), true);
test(binarySearch([1, 2, 3, 4, 5], 4), true);
test(binarySearch([1, 2, 3, 5, 6], 4), false);

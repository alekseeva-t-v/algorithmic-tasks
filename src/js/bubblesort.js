import { logIteration } from './modules/logIteration';

/**
 * Возвращает отсортированный по возрастанию массив цифр
 *
 * @param {Array} array исходный массив.
 * @return {Array} отсортированный по возрастанию массив цифр.
 */
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  logIteration(array);

  return array;
}

bubbleSort([56, 87, 18, 92, 42, 31, 44, 82, 36, 91]);

import { test } from "./modules/tester";

/**
 * Возвращает число, означающее, сколько раз встречается самый частый элемент в объединении двух отсортированных по возрастанию массивов.
 *
 * @param {Array} firstArray первый исходный массив.
 * @param {Array} secondArray второй исходный массив.
 * @return {number} количество повторений самого частого элемента в объединении двух отсортированных по возрастанию массивов.
 */
function countMostFrequent(firstArray, secondArray) {
  const resArr = [...firstArray, ...secondArray].sort((a, b) => a - b);
  const counter = {};
  resArr.forEach((value) => {
    counter[value] ? (counter[value] += 1) : (counter[value] = 1);
  });

  return Math.max(...Object.values(counter));
}

test(countMostFrequent([1, 2, 2, 3], [0, 2, 4, 4]), 3);
test(countMostFrequent([], [0, 0]), 2)


import { test } from "./modules/tester";

/**
 * Вспомогательная функция для сортировки объектов по параметру времени
 *
 * @param {object} left предшествующий объект для сортировки.
 * @param {object} right следующий объект для сортировки.
 * @return {number} числовой параметр на основе которого производится сортировка.
 */
function compareEntries(left, right) {
  if (left.time === right.time) {
    return left.isEntering ? 1 : -1;
  }

  return left.time - right.time;
}

/**
 * Возвращает максимальное количество людей в офисе
 *
 * @param {Array} input массив значений [время входа, время выхода].
 * @return {number} максимальное количество людей в офисе.
 */
function count(input) {
  const entries = [];
  for (const [enteringTime, leavingTime] of input) {
    entries.push({
      time: enteringTime,
      isEntering: true,
    });

    entries.push({
      time: leavingTime,
      isEntering: false,
    });
  }

  entries.sort(compareEntries);

  let currentCount = 0;
  let maximumCount = 0;

  for (const {isEntering} of entries) {
    currentCount += isEntering ? 1 : -1;
    maximumCount = Math.max(currentCount, maximumCount);
  }

  return maximumCount;
}

test(count([]), 0)
test(count([[1, 5], [5, 10]]), 1)
test(count([[1, 5], [0, 1], [4, 5]]), 2)
test(count([[1, 10], [5, 6], [2, 3], [7, 8]]), 2)
test(count([[1, 2], [1, 10], [4, 9], [8, 15], [5, 6], [8, 16]]), 4)
import { test } from "./modules/tester";

/**
 * Возвращает позицию числа, которое отличается от остальных по четности.
 *
 * @param {string} numbers строка исходных чисел.
 * @return {number} номер позиции числа, которое отличается от остальных по четности.
 */
function iqTest(numbers) {
  const resArr = numbers.split(' ').map((value) => value % 2);
  const sum = resArr.reduce((currentValue, acc) => currentValue + acc, 0);
  const turget = sum > 1 ? 0 : 1;

  return resArr.indexOf(turget) + 1
}

test(iqTest("2 4 7 8 10"), 3);
test(iqTest("1 2 1 1"), 2);
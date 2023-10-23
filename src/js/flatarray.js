import { test } from "./modules/test";

/**
 * Возвращает массив с нулевой вложенностью.
 *
 * @param {Array} array исходный массив, элементами которого могут быть другие массивы.
 * @return {Array} преобразованный массив с нулевой вложенностью.
 */
function flat(array) {
  const resArr = [];
  for (const elem of array) {
    if (Array.isArray(elem)) {
      resArr.push(...flat(elem))
    } else {
      resArr.push(elem)
    }
  }
  return resArr;
}

console.log(flat([[1, 5], 5, 10]))

test(flat([]), []);
test(flat([[1, 5], 5, 10]), [1, 5, 5, 10]);
test(flat([1, 2, [3, 4]]), [1, 2, 3, 4]);
test(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
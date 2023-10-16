import { test } from "./modules/tester";

const plants = [
  "Аспарагус",
  "Гвоздика",
  "Жасмин",
  "Калина",
  "Малина",
  "Пион",
  "Тысячелистник",
  "Хризантема",
  "Шафран",
  "Юкка",
]

/**
 * Возвращает позицию элемента в списке, если он там есть
 *
 * @param {Array} list отсортированный в алфавитном порядке массив слов (строк).
 * @param {string} elem искомая строка.
 * @return {number | null} позицию элемента в списке, если он там есть или null, если нет.
 */
function binarySearch(list, elem) {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    const center = Math.floor((right + left) / 2);

    if (list[center] === elem) {
      return center
    }

    if (list[center].localeCompare(elem) === 1) {
      right = center - 1;
    } else {
      left = center + 1;
    }
  }

  return null;
}

test(binarySearch(plants, "Пион"), 5);
test(binarySearch(plants, "Роза"), null);
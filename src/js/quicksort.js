import { logIterationQuick } from './modules/logIteration';

/**
 * Возвращаем отсортированный массив
 *
 * @param {Array} array массив с которым необходимо работать.
 * @param {number} left левый указатель.
 * @param {number} right правый указатель.
 * @return {Array} отсортированный массив.
 */
function quickSort(array, left, right) {
  // если мы работаем с целым массивом и нам не передали края сортировки, определим их сами
  left = left ?? 0;
  right = right ?? array.length - 1;

  // разбиваем наш массив на подмассивы вокруг точки поворота
  const pivotIndex = partition(array, left, right);
  logIterationQuick(array, array[pivotIndex], left, right);

  // если в левом подмассиве больше одного элемента, то сортируем его
  if (left < pivotIndex - 1) {
    quickSort(array, left, pivotIndex - 1);
  }

  // то же и с правым
  if (pivotIndex < right) {
    quickSort(array, pivotIndex, right);
  }

  return array;
}

/**
 * Возвращает рандомное число из заданного диапазона
 *
 * @param {number} min минимальное число диапазона.
 * @param {number} max максимальное число диапазона.
 * @return {number} рандомное число из заданного диапазона.
 */
function random(min, max) {
  const interval = max - min;
  const shift = min;

  return Math.round(Math.random() * interval + shift);
}

/**
 * Возвращаем место, где оказался элемент, равный точке поворота
 *
 * @param {Array} array массив с которым необходимо работать.
 * @param {number} left левый указатель.
 * @param {number} right правый указатель.
 * @return {number} место, где оказался элемент, равный точке поворота.
 */
function partition(array, left, right) {
  const pivot = array[random(left, right)];
  console.log(pivot)

  while (left < right) {
    // Пока слева встречаются только числа меньше поворотного...
    while (array[left] < pivot) {
        // ... просто двигаем левый указатель вправо, ведь с этими числами ничего делать не надо
        left++;
    }

    // Пока справа встречаются только числа больше поворотного...
    while (array[right] > pivot) {
      // ... просто двигаем правый указатель влево, ведь с этими числами ничего делать не надо
      right--;
    }

    // А как только оба указателя показывают на элементы, которые должны быть в противоположных частях И мы всё ещё не сошлись к центру...
    if (left <= right) {
        // ...меняем их местами и не забываем двигать оба указателя, так как теперь оба числа на своём месте
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }
  }
  return left;
}

quickSort([56, 87, 18, 92, 42, 31, 44, 82, 36, 91]);

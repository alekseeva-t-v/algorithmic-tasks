import { test } from './modules/tester';

/**
 * Возвращает число из последовательности Фибоначчи по индексу.
 *
 * @throws выбрасывает ошибку, если индекс меньше 1 или это не целое число
 * @param {number} index исходный индекс.
 * @return {number} число из последовательности Фибоначчи, которое соответствует исходному индексу.
 */
function fibonacci(index) {
  if (index < 1 || !Number.isInteger(index)) {
    throw new Error("Индекс должен быть целым числом больше или равным единице!");
  }

  if (index === 1) {
    return 0;
  }

  if (index === 2) {
    return 1;
  }

  return fibonacci(index - 1) + fibonacci(index - 2);
}

test(fibonacci(1), 0);
test(fibonacci(2), 1);
test(fibonacci(13), 144);

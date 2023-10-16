# Алгоритмические задачи

Алгоритмические задачи курса [**_"Алгоритмы и структуры данных"_**](https://levelup.htmlacademy.ru/algorithms)

---

### **Самый частый элемент**

![frequent-element](./public/frequent-element.jpg)

Задача —  найти, сколько раз встречается самый частый элемент в объединении двух отсортированных по возрастанию массивов. Элементы могут повторяться.

Примеры:

`countMostFrequent([1, 2, 2, 3], [0, 2, 4, 4]) => 3`
`countMostFrequent([], [0, 0]) => 2`

Реализация функции в файле `src/js/frequent.js`.

[DEMO](https://alekseeva-t-v.github.io/algorithmic-tasks/frequent-element.html)

---
### **Задание с числами в тесте IQ**

![frequent-element](./public/testiq.jpg)

Задача —  написать функцию для прохождения типового задания с числами в тесте iq — из списка чисел найти то, которое отличается по чётности от остальных, и вернуть его позицию.

Примеры:

`iqTest("2 4 7 8 10") => 3`

`iqTest("1 2 1 1") => 2`

Реализация функции в файле `src/js/testiq.js`.

[DEMO](https://alekseeva-t-v.github.io/algorithmic-tasks/testiq.html)

---
### **Валидация скобочных выражений**

![frequent-element](./public/validateparenthesis.jpg)

Задача —  в данном нам тексте нужно провалидировать, что все скобки корректно расставлены. Например, (((())())) является корректной расстановкой, а ()( — нет.

Примеры:

`validateparenthesis('(((())()))') => true`

`validateparenthesis('())') => false`

Реализация функции в файле `src/js/validateparenthesis.js`.

[DEMO](https://alekseeva-t-v.github.io/algorithmic-tasks/validateparenthesis.html)

---
### **Аврал в офисе**

![frequent-element](./public/rushhourinoffice.jpg)

Офис X работает по правилам коворкинга: каждый сотрудник может работать из дома или приходить в офис. В спокойные дни в офисе тихо, приходят пара-тройка людей. А ближе к релизам/отчетным периодам/другим завалам людей гораздо больше, но все сотрудники всё равно никогда не выходят. 

Начальство хочет какое-то время понаблюдать, сколько же человек максимум приходят в офис, чтобы сократить количество «посадочных мест» и меньше платить за аренду. Для этого они наладили систему, которая фиксирует время захода и выхода людей из офиса, и планируют из этих данных получить максимальное количество присутствующих сотрудников в день. Система эта сохраняет нужные данные в формате [времяВхода, времяВыхода] для каждого сотрудника. Если люди входят и выходят одновременно, считается, что выход происходит раньше (уходящий человек уже встал с места и освободил его, а входящий ещё не успел занять). 

Задача — написать функцию, получающую из информации в системе максимальное количество одновременно находящихся сотрудников в офисе.

Примеры:

`count([]) // 0`

`count([[1, 5], [5, 10]]) // 1`

`count([[1, 5], [0, 1], [4, 5]]) // 2`

`count([[1, 10], [5, 6], [2, 3], [7, 8]]) // 2`

`count([[1, 2], [1, 10], [4, 9], [8, 15], [5, 6], [8, 16]]) // 4`

Реализация функции в файле `src/js/rushhourinoffice.js`.

[DEMO](https://alekseeva-t-v.github.io/algorithmic-tasks/rushhourinoffice.html)
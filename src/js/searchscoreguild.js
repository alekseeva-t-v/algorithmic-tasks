import { log } from "./modules/loggerguild";

/**
 * Вспомогательная функция. Возвращает объект вида {
        guild: имя гильдии,
        placement: место в гильдии,
      }, если в таблице есть игрок, с таким же количеством очков, как у искомого, либо null, если такого игрока нет
 *
 * @param {Array} table массив состоящий из отдельных массивов гильдий, которые в свою очередь содержат объекты игроков.
 * @param {number} count счет искомого игрока.
 * @param {number} topBorder верхняя граница поиска.
 * @param {number} leftBorder левая граница поиска.
 * @param {number} bottomBorder нижняя граница поиска.
 * @param {number} rightBorder правая граница поиска.
 * @return {object || null} возвращает объект с названием гильдии и позицией в гидьдии, если игрок с необходимым количеством очков найден, иначе null.
 */
function searchSubtask(table, count, topBorder, leftBorder, bottomBorder, rightBorder) {
  // Если границы сошлись — ничего не нашлось
  if (leftBorder > rightBorder || topBorder > bottomBorder) {
    return null;
  }

  // Если границы сошлись до единственного элемента, то проверяем, подходит ли он нам
  if (leftBorder === rightBorder && topBorder === bottomBorder) {
    const candidate = table[topBorder][leftBorder];

    return candidate.leaguePoints === count
      ? {
        guild: candidate.guild,
        placement: table[topBorder].length - leftBorder,
      }
      : null
  }

  const middleY = Math.floor((topBorder + bottomBorder) / 2);
  const middleX = Math.floor((leftBorder + rightBorder) / 2);

  const {leaguePoints: candidateLeaguePoints} = table[middleY][middleX];

  // Если нам нужно найти части, где количество очков больше, чем по середине, то это...
  if (candidateLeaguePoints < count) {
    return searchSubtask(table, count, topBorder, middleX + 1, middleY, rightBorder) // верхняя правая
      || searchSubtask(table, count, middleY + 1, leftBorder, bottomBorder, middleX) // нижняя левая
      || searchSubtask(table, count, middleY + 1, middleX + 1, bottomBorder, rightBorder) // нижняя правая
  // а если меньше, то...
  } else {
    return searchSubtask(table, count, topBorder, middleX + 1, middleY, rightBorder) // верхняя правая
      || searchSubtask(table, count, middleY + 1, leftBorder, bottomBorder, middleX) // нижняя левая
      || searchSubtask(table, count, topBorder, leftBorder, middleY, middleX) // верхняя левая
  }
}

/**
 * Возвращает результат выполнения функции searchSubtask. Это объект вида {
        guild: имя гильдии,
        placement: место в гильдии,
      }, если в таблице есть игрок, с таким же количеством очков, как у искомого, либо null, если такого игрока нет
 *
 * @param {Array} table массив состоящий из отдельных массивов гильдий, которые в свою очередь содержат объекты игроков.
 * @param {number} count счет искомого игрока.
 * @return {object || null} возвращает объект с названием гильдии и позицией в гидьдии, если игрок с необходимым количеством очков найден, иначе null.
 */
function searchScore(table, count) {
  if (!(table.length && table[0].length)) {
    return null;
  }

  const bottomBorder = table.length - 1;
  const rightBorder = table[0].length - 1;

  return searchSubtask(table, count, 0, 0, bottomBorder, rightBorder);
}

const data = [
  [
    {
      "login": "stypeano",
      "leaguePoints": 4,
      "guild": "seabass",
    },
    {
      "login": "rstrazir",
      "leaguePoints": 356,
      "guild": "seabass",
    },
    {
      "login": "cathead",
      "leaguePoints": 930,
      "guild": "seabass",
    },
    {
      "login": "cavernous",
      "leaguePoints": 1056,
      "guild": "seabass",
    }
  ],
  [
    {
      "login": "ConspiracyLil",
      "leaguePoints": 18,
      "guild": "goldfish",
    },
    {
      "login": "CzarStories",
      "leaguePoints": 568,
      "guild": "goldfish",
    },
    {
      "login": "GottaSaiyan",
      "leaguePoints": 931,
      "guild": "goldfish",
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 1130,
      "guild": "goldfish",
    }
  ],
  [
    {
      "login": "Rectionom",
      "leaguePoints": 42,
      "guild": "catfish",
    },
    {
      "login": "JoshChase",
      "leaguePoints": 931,
      "guild": "catfish",
    },
    {
      "login": "DreamLess",
      "leaguePoints": 956,
      "guild": "catfish",
    },
    {
      "login": "BlondiePlanet",
      "leaguePoints": 1045,
      "guild": "catfish",
    }
  ],
  [
    {
      "login": "Breakingbing",
      "leaguePoints": 64,
      "guild": "bream",
    },
    {
      "login": "Goldenelox",
      "leaguePoints": 932,
      "guild": "bream",
    },
    {
      "login": "SaiyanBroadway",
      "leaguePoints": 1432,
      "guild": "bream",
    },
    {
      "login": "BoostScooby",
      "leaguePoints": 1476,
      "guild": "bream",
    }
  ]
]

log(4, searchScore(data, 4));
log(14, searchScore(data, 14));
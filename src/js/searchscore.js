import { log } from "./modules/logger";

const data = [
  [
    {
      "login": "stypeano",
      "leaguePoints": 4
    },
    {
      "login": "rstrazir",
      "leaguePoints": 45
    },
    {
      "login": "cathead",
      "leaguePoints": 143
    },
    {
      "login": "cavernous",
      "leaguePoints": 324
    }
  ],
  [
    {
      "login": "ConspiracyLil",
      "leaguePoints": 356
    },
    {
      "login": "CzarStories",
      "leaguePoints": 568
    },
    {
      "login": "GottaSaiyan",
      "leaguePoints": 598
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 785
    }
  ],
  [
    {
      "login": "Rectionom",
      "leaguePoints": 930
    },
    {
      "login": "JoshChase",
      "leaguePoints": 931
    },
    {
      "login": "DreamLess",
      "leaguePoints": 956
    },
    {
      "login": "BlondiePlanet",
      "leaguePoints": 1045
    }
  ],
  [
    {
      "login": "Breakingbing",
      "leaguePoints": 1056
    },
    {
      "login": "Goldenelox",
      "leaguePoints": 1130
    },
    {
      "login": "SaiyanBroadway",
      "leaguePoints": 1432
    },
    {
      "login": "BoostScooby",
      "leaguePoints": 1476
    }
  ]
];

/**
 * Возвращает индекс лиги,в которойможет находиться искомый игрок
 *
 * @param {number} count количество очков заданного игрока.
 * @param {object} table массив объектов представляющий собой таблицу лидеров.
 * @return {number || null} индекс лиги в массив, если такая лига есть или null, если такой лиги нет
 */
function searchLeagueByScore(count, table) {
  let left = 0;
  let right = table.length - 1;

  const firstPlacePoints = table[0][0]['leaguePoints'];
  const lastPlacePoints = table[right][table[right].length - 1]['leaguePoints'];

  if (count < firstPlacePoints || count > lastPlacePoints) {
    return null;
  }

  while (left <= right) {
    const indexCenter = Math.floor((left + right) / 2);
    const centerElem = table[indexCenter];

    const firstPlayerPoints = centerElem[0]['leaguePoints'];
    const latPlayerPoints = centerElem[centerElem.length - 1]['leaguePoints'];

    if (count >= firstPlayerPoints && count <= latPlayerPoints) {
      return indexCenter;
    }

    if (count <= firstPlayerPoints) {
      right = indexCenter - 1;
    }

    if (count >= latPlayerPoints) {
      left = indexCenter + 1;
    }
  }

  return null;
}

/**
 * Возвращает индекс искомого игрока в заданной лиге
 *
 * @param {object} league массив из объекта игроков в выбранной лиге.
 * @param {number} count количество очков заданного игрока.
 * @return {number || null} индекс игрока, если такой игрок есть или null, если такого игрока нет
 */
function searchInLeague(league, count) {
  let left = 0;
  let right = league.length - 1;

  while (left <= right) {
    const midleIndex = Math.floor((right + left) / 2);
    const { leaguePoints: midleLeaguePoints } = league[midleIndex];

    if (midleLeaguePoints === count) {
      return midleIndex;
    }

    if (count <= midleLeaguePoints) {
      right = midleIndex - 1;
    }

    if (count >= midleLeaguePoints) {
      left = midleIndex + 1;
    }
  }

  return null;
}

/**
 * Возвращает объект вида { "league": 1, "placement": 1, } Где league — это номер лиги, а placement — место в лиге.
 *
 * @param {object} table массив объектов представляющий собой таблицу лидеров.
 * @param {number} count количество очков заданного игрока.
 * @return {object} объект с параметрами "league" (номер лиги) и "placement" место в лиге с конца
 */
function searchScore(table, count) {
  const indexLeague = searchLeagueByScore(count, table);

  if (indexLeague === null) {
    return null;
  }

  const indexPlacement = searchInLeague(table[indexLeague], count);

  if (indexPlacement === null) {
    return null;
  }

  const league = indexLeague + 1;
  const placement = table[indexLeague].length - indexPlacement;

  return { league, placement };
}

log(4, searchScore(data, 4));
log(14, searchScore(data, 14));
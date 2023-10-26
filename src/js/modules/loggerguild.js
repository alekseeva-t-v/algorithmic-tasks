const results = document.getElementById('results')

export function log(points, placement) {
  const result = document.createElement('li');

  if (!placement) {
    result.innerHTML = `Вы — единствнный игрок со счетом ${points}`;
  } else {
    result.innerHTML = `Ваш счет — ${points}. Вы могли бы играть в гильдии ${placement.guild} и занять там ${placement.placement} место`;
  }

  results.appendChild(result);
}
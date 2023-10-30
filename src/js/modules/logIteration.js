const results = document.getElementById('results')

export function logIteration(array) {
  const result = document.createElement('li');

  result.innerHTML = `[${array.join(', ')}]`;

  results.appendChild(result);
}

export function logIterationQuick(array, pivot, start, end) {
  const result = document.createElement('li');

  result.innerHTML = `[${array.join(', ')}], разделение вокруг ${pivot}, с ${start} по ${end} индексы`;

  results.appendChild(result);
}
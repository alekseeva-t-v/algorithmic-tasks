const results = document.getElementById('results')

export function logIteration(array) {
  const result = document.createElement('li');

  result.innerHTML = `[${array.join(', ')}]`;

  results.appendChild(result);
}
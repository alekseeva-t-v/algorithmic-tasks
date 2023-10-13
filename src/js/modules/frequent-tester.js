const results = document.getElementById('results')

export function frequentTest(left, right) {
  const result = document.createElement('li');

  if (left === right) {
    result.innerHTML = "Тест пройден!";
    result.style.color = "green";
  } else {
    result.innerHTML = `Тест не пройден! ${left} не равно ${right}`;
    result.style.color = "red";
  }

  results.appendChild(result);
}
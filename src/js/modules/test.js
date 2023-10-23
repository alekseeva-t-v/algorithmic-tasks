const results = document.getElementById('results')

export function test(rawLeft, rawRight) {
  const result = document.createElement('li');

  // Небольшой хак для сравнения массивов. Не делайте так в production!
  const left = JSON.stringify(rawLeft);
  const right = JSON.stringify(rawRight);

  if (left === right) {
    result.innerHTML = "Тест пройден!";
    result.style.color = "green";
  } else {
    result.innerHTML = `Тест не пройден! ${left} не равно ${right}`;
    result.style.color = "red";
  }

  results.appendChild(result);
}
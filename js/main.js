//Функция возвращающая целое число
// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random and www.htmlacademy.ru

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger (25, 1);

//Функция для проверки максимальной длины строки

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength ('Привет!', 20);

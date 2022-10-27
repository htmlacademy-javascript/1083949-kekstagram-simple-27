//Функция возвращающая целое число
// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random and www.htmlacademy.ru
const RANDOM_POSITIVE_INTEGER = function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция для проверки максимальной длины строки
function checkStringLength (string, length) {
  return string.length <= length;
}

//Функция проверки соответствия клавиши "Escape"
const isEscapeKey = (evt) => evt.key === 'Escape';
//Функция проверки соответствия клавиши "Enter" для загрузки фото с клавиатуры
const isEnterKey = (evt) => evt.key === 'Enter';


export {RANDOM_POSITIVE_INTEGER, checkStringLength, isEscapeKey, isEnterKey};

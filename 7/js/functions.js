function lineLength(name, long) {
  const lengthName = name.length;

  if (lengthName < long || lengthName === long) {
    return true;
  } else {
    return false;
  }
}

lineLength('проверяемая строка', 20);
lineLength('проверяемая строка', 18);
lineLength('проверяемая строка', 10);

function palindrome (string) {
  const stringToLowerCase = string.toLowerCase().replace(/ /g, '');
  const reverseString = stringToLowerCase.split('').reverse().join('');

  if (stringToLowerCase === reverseString) {
    return true;
  } else {
    return false;
  }
}

palindrome('топот');
palindrome('ДовОд');
palindrome('Кекс');
palindrome('Лёша на полке клопа нашёл ');

function getInteger(string) {
  const integer = Number(string.match(/\d+/g).join(''));
  return integer;
}

getInteger('2023 год');
getInteger('ECMAScript 2022');
getInteger('1 кефир, 0.5 батона');
getInteger('агент 007');
getInteger('2023');
getInteger('-1');
getInteger('1.5');

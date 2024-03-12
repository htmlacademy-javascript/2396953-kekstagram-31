function lineLength(name, long) {
  let lengthName = name.length;

  if (lengthName < long || lengthName === long) {
    return true;
  } else {
    return false;
  }
}

const oneLine = "проверяемая строка";

lineLength(oneLine, 20);
lineLength(oneLine, 18);
lineLength(oneLine, 10);

function palindrome (string) {
  let stringToLowerCase = string.toLowerCase().replace(/ /g, '');
  let reverseString = stringToLowerCase.split("").reverse().join("");

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
  const integer = Number(string.match( /\d+/g ).join(''));
  return integer;
}

getInteger('2023 год');
getInteger('ECMAScript 2022');
getInteger('1 кефир, 0.5 батона');
getInteger('агент 007');
getInteger('2023');
getInteger('-1');
getInteger('1.5');

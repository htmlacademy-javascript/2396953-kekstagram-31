function lineLength(name, long) {
  let lengthName = name.length;

  if (lengthName < long || lengthName === long) {
    return true;
  } else {
    return false;
  }

}

const oneLine = "проверяемая строка";

console.log("Строка короче 20 символов");
console.log(lineLength(oneLine, 20));

console.log("Длина строки ровно 18 символов");
console.log(lineLength(oneLine, 18));

console.log("Строка длиннее 10 символов");
console.log(lineLength(oneLine, 10));


function palindrome (string) {
  let stringToLowerCase = string.toLowerCase().replace(/ /g, '');
  let reverseString = stringToLowerCase.split("").reverse().join("");

  if (stringToLowerCase === reverseString) {
    return true;
  } else {
    return false;
  }

}

console.log("Строка является палиндромом");
console.log(palindrome('топот'));

console.log("Несмотря на разный регистр, тоже палиндром");
console.log(palindrome('ДовОд'));

console.log("Это не палиндром");
console.log(palindrome('Кекс'));

console.log("Это палиндром");
console.log(palindrome('Лёша на полке клопа нашёл '));

function getInteger(string) {
  const integer = Number(string.match( /\d+/g ).join(''));
  return integer;
}

console.log("целое положительное число");
console.log(getInteger('2023 год'));
console.log(getInteger('ECMAScript 2022'));
console.log(getInteger('1 кефир, 0.5 батона'));
console.log(getInteger('агент 007'));
console.log(getInteger('2023'));
console.log(getInteger('-1'));
console.log(getInteger('1.5'));

function getRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUniqueRandomNumber(number, usedNumbers) {
  let randomNumber;
  do {
    randomNumber = number;
  } while (usedNumbers.has(randomNumber));
  usedNumbers.add(randomNumber);
  return randomNumber;
}

export {getRandomNumber, getUniqueRandomNumber};

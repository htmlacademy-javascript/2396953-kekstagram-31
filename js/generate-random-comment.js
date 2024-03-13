import {getRandomNumber, getUniqueRandomNumber} from './util.js'
import {nameUser, avatar} from './data.js'

function generateRandomComment() {
  function getRandomContent(array) {
    const count = getRandomNumber(1);
    const shuffled = array.sort(() => 0.5 - Math.random());
    if (count === 1) {
      return shuffled[0];
    } else {
      return shuffled.slice(0, 2);
    }
  }

  const message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const usedNumbersIdComments = new Set();
  const uniqueRandomNumber = getUniqueRandomNumber(getRandomNumber(200), usedNumbersIdComments);

  const comments = {
    id: uniqueRandomNumber,
    avatar: `img/avatar-${avatar}.svg`,
    message: getRandomContent(message),
    name: nameUser[getRandomNumber(25)],
  };

  return comments;
}

export {generateRandomComment}

function getRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUniqueRandomNumber(number, usedNumbers) {
  let randomNumber;
  do {
    randomNumber = number;
  } while (usedNumbers.has(randomNumber));
  usedNumbers.add(randomNumber);
  return randomNumber;
}

const arrDescription = [
  'Прекрасный закат на пляже',
  'Цветущие яблони весной',
  'Горы в облаках',
  'Уютный камин в доме',
  'Радуга после дождя',
  'Макро съемка цветка',
  'Заснеженный лес зимой',
  'Летящие птицы на фоне заката',
  'Абстрактный узор на стекле',
  'Водопад в джунглях',
  'Заброшенный замок на холме',
  'Собака играющая в парке',
  'Городской пейзаж ночью',
  'Парусник на фоне моря',
  'Поля в цвету весной',
  'Интерьер кафе с книгами',
  'Мост через горную реку',
  'Причал с лодками',
  'Полевые цветы на закате',
  'Лампа освещающая темный угол',
  'Детский смех на фоне радуги',
  'Парк с фонтаном летом',
  'Старый фонарь на улице',
  'Домик у озера в лесу'
];

const nameUser = ['Александр', 'Екатерина', 'Иван', 'Мария', 'Дмитрий', 'Анна', 'Сергей', 'Ольга', 'Артем', 'Наталья', 'Михаил', 'Елена', 'Владимир', 'Татьяна', 'Алексей', 'Юлия', 'Павел', 'София', 'Константин', 'Алиса', 'Игорь', 'Виктория', 'Петр', 'Оксана', 'Роман'];

const avatar = getRandomNumber(6);

function generateRandomComment() {
  const message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  function getRandomContent(array) {
    const count = getRandomNumber(1);
    const shuffled = array.sort(() => 0.5 - Math.random());
    if (count === 1) {
      return shuffled[0];
    } else {
      return shuffled.slice(0, 2);
    }
  }

  const usedNumbersIdComments = new Set();
  const uniqueRandomNumber = generateUniqueRandomNumber(getRandomNumber(200), usedNumbersIdComments);

  const comments = {
    id: uniqueRandomNumber,
    avatar: `img/avatar-${avatar}.svg`,
    message: getRandomContent(message),
    name: nameUser[getRandomNumber(25)],
  };

  return comments;
}

const photoArray = [];

for (let i = 1; i <= 25; i++) {
  const photo = {
    id: i,
    url: `photos/${i}.jpg`,
    description: arrDescription[i],
    likes: getRandomNumber(200),
    comments: []
  };

  const numComments = getRandomNumber(29);
  for (let j = 0; j < numComments; j++) {
    const comment = generateRandomComment();
    photo.comments.push(comment);
  }

  photoArray.push(photo);
}



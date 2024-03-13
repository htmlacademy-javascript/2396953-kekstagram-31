import {getRandomNumber} from './util.js'
import {arrDescription} from './data.js'
import {generateRandomComment} from './generate-random-comment.js'

const arrayPhoto = [];

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

  arrayPhoto.push(photo);
}

export {arrayPhoto}

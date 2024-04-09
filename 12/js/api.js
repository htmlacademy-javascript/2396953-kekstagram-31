import { BASE_URL } from './const.js';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные. Попробуйте еще раз',
  [Method.POST]: 'Не удалось отправить данные формы'
};

const load = async (route, metod = Method.GET, body = null) => {
  const response = await fetch(`${BASE_URL}${route}`, { metod, body });
  return response.ok ? response.json() : Promise.reject(ErrorText[metod]);
};

const getData = async () => await load(Route.GET_DATA);
const sendData = async (body) => await load(Route.SEND_DATA, Method.POST, body);

export { getData, sendData };

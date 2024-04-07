import { REMOVE_MESSAGE_TIMEOUT } from './const.js';

const errorLoadDataTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

export const showErrorMessage = () => {
  const dataErrorMessage = errorLoadDataTemplate.cloneNode(true);
  document.body.append(dataErrorMessage);
  setTimeout(() => {
    dataErrorMessage.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

const successLoadDataTemplate = document.querySelector('#success').content.querySelector('.success');
export const showSuccessMessage = () => {
  const dataSuccessMessage = successLoadDataTemplate.cloneNode(true);
  document.body.append(dataSuccessMessage);
  setTimeout(() => {
    dataSuccessMessage.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};


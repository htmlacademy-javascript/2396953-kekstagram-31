function createEl (element, wrapper) {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(element);
  wrapper.appendChild(fragment);
}

export {createEl};

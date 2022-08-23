function modal() {
  const modalBtn = document.querySelector('.more');
  const modal = document.querySelector('.modal');

  modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('modal__close')) {
      modal.classList.add('hidden');
    }
  });
}
modal();

const fname = document.getElementById('name');
let emptyField = false;
const validateName = (name) => {
  let re = /^(?:[a-zA-Z\s]{3,10})|(?:[а-яА-Я\s]{3,10})$/;
  return re.test(name);
};
fname.addEventListener('change', () => {
  if (!validateName(fname.value)) {
    fname.style.border = '1px solid red';
    fname.style.color = 'red';
    emptyField = true;
  } else {
    fname.style.border = '';
    fname.style.color = 'black';
    emptyField = false;
  }
});

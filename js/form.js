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

const form = document.querySelector('.form');
const checkbox = document.querySelector('.checkbox');
const formUrl =
  'https://form-77ae3-default-rtdb.europe-west1.firebasedatabase.app/people.json';
form.addEventListener('submit', (event) => {
  const formData = {};

  event.preventDefault();

  if (!checkbox.checked) {
    alert('Cогласитесь с условиями !');
  } else {
    fetch(formUrl, {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((formData) => {
        console.log(formData);
        alert('Данные успешно сохранены!');
        form.reset();
      })
      .catch((error) => {
        alert('произошла ошибка, статус' + error.message);
      });
  }
});

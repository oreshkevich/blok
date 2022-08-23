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

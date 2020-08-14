const card = document.querySelectorAll('.card');
const form = document.querySelector('.form');
const closeForm = document.querySelector('.close-form');
let titleForm = document.querySelector('.title-form')

for (let i = 0; i < card.length; i++) {
  card[i].onclick = function (){
    showForm(this.firstElementChild.innerText)
  }
}

function showForm(title) {
  titleForm.innerText = title;
  closeForm.classList.add('close-form-show');
  setTimeout(function () {
    form.classList.add('form-show');
  },50);
}

document.onclick = function (event) {
  if (event.target.classList.contains('close-form')) {
    form.classList.remove('form-show');
    setTimeout(function () {
      closeForm.classList.remove('close-form-show');
    }, 500)
  }
}
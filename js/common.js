const card = document.querySelectorAll('.card');
const form = document.querySelector('.form');
const closeForm = document.querySelector('.close-form');
let outputCity = document.querySelector('.input-form_city');
let btnCitys = document.querySelectorAll('.btn-city');
let titleForm = document.querySelector('.title-form');
let inpTel = document.getElementById('tel');
let counter = 1;

for (let i = 0; i < card.length; i++) {
  card[i].onclick = function (){
    showForm(this.firstElementChild.innerText);
  }
}

function showForm(title) {
  titleForm.innerText = title;
  closeForm.classList.add('close-form-show');
  setTimeout(function () {
    form.style.top = '50%';
  },50);
}

document.querySelector('.btn-close-form').addEventListener('click', closeFormShow);
document.querySelector('.cross').addEventListener('click', closeFormShow);

outputCity.onclick = function (){
  counter++;
  console.log(counter)
  form.classList.add('form-show-citys');
  document.querySelector('.form-cities-container').classList.add('show-form-cities-container');
  for (let i = 0; i < btnCitys.length; i++) {
      btnCitys[i].classList.add('btn-city-show');
      btnCitys[i].onclick = function(){
        if(this.innerText == 'Другое'){
          alert('Извините, но мы работаем только с городами указанными в списке');
        }else{
          outputCity.value = this.innerText;
          closeBtnCity();
        }
      }
  }
}

function closeBtnCity(){
    for (let i = 0; i < btnCitys.length; i++) {
      btnCitys[i].classList.remove('btn-city-show');
    }
    form.classList.remove('form-show-citys');
    document.querySelector('.form-cities-container').classList.remove('show-form-cities-container');
}

function closeFormShow (){
  closeBtnCity();
  form.style.top = '-50%';
  setTimeout(function () {
    closeForm.classList.remove('close-form-show');
  }, 500)
}


inpTel.addEventListener('focus', _ => {
  if(!/^\+\d*$/.test(inpTel.value))
    inpTel.value = '+7';
});

inpTel.addEventListener('keypress', e => {
  if(!/\d/.test(e.key))
    e.preventDefault();
});
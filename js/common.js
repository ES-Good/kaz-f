const card = document.querySelectorAll('.card');
const form = document.querySelector('.form');
const closeForm = document.querySelector('.close-form');
let outputCity = document.querySelector('.input-form_city');
let btnCitys = document.querySelectorAll('.btn-city');
let titleForm = document.querySelector('.title-form');
let inpTel = document.getElementById('tel');
let counter = 1;


if (window.innerWidth <= 576) {
  for (let i = 0; i < card.length; i++) {
    card[i].onclick = function (){
      showMobileForm(i, this.firstElementChild.innerText);
    }
  }
}else if(window.innerWidth > 576){
  for (let i = 0; i < card.length; i++) {
    card[i].onclick = function (){
      showForm(this.firstElementChild.innerText);
    }
  }
}

function showMobileForm(num, title){
  closeForm.classList.add('close-form-show');
  titleForm.innerText = title;
  if(num >= 0 && num < 3){
    setTimeout(function(){
      form.style.top = '23%';
    }, 50);
  }else if(num >= 3 && num <= 5){
    setTimeout(function(){
      form.style.top = '33%';
    }, 50);
  }else if(num >= 6){
    setTimeout(function(){
      form.style.top = '50%';
    }, 50);
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
          alert('Пошёл нахуй')
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
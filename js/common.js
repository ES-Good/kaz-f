const card = document.querySelectorAll('.card');
const form = document.querySelector('.form');
const closeForm = document.querySelector('.close-form');
let radioCity = document.querySelectorAll('.radio-city');
let radioTextCity = document.querySelectorAll('.redio-text')
let titleForm = document.querySelector('.title-form')

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

document.querySelector('.btn-close-form').onclick = function(){
     form.style.top = '-50%';
     setTimeout(function () {
       closeForm.classList.remove('close-form-show');
     }, 500)
}

document.querySelector('.btn-form-cities').onclick = function (){
  form.classList.add('form-show-citys');
  document.querySelector('.form-cities-container').classList.add('show-form-cities-container');
  for (let i = 0; i < radioCity.length; i++) {
      radioCity[i].classList.add('show-city-radio');
      radioTextCity[i].classList.add('show-city-text');
  }
}

// document.onclick = function (event) {
//   if (event.target.classList.contains('btn-close-form')) {
//     form.style.top = '-50%';
//     setTimeout(function () {
//       closeForm.classList.remove('close-form-show');
//     }, 500)
//   }
// }
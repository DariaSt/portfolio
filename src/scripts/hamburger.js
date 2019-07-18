const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');
const social = document.querySelector('.social__list');

function showMenu(){
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  social.classList.toggle('active');
  menu.append(social);
  document.body.classList.toggle('hidden');
}

hamburger.addEventListener('click', function(){
  showMenu();
});
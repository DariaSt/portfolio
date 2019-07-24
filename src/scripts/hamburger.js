const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');
const social = document.querySelector('.social__list');
const about = document.querySelector('.about__wrap');

function showMenu(){
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  social.classList.toggle('active');
  menu.append(social);
  document.body.classList.toggle('hidden');
  if(about.style.display=='none')
    about.style.display = 'flex';
  else
    about.style.display = 'none';
}

hamburger.addEventListener('click', function(){
  showMenu();
});
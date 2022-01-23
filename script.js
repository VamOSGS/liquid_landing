const li = document.querySelectorAll('li');
const button = document.querySelector('#GET_BUTTON');
const popup = document.querySelector('.popup');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigation');
li.forEach(item => {
  item.setAttribute('data-hover', item.textContent);
});

button.onclick = () => {
  popup.classList.add('active');
};

popup.onclick = item => {
  if (
    item.target.classList[0] === 'popup' ||
    item.target.classList[0] === 'close'
  )
    popup.classList.remove('active');
};

menuBtn.onclick = () => {
  menuBtn.classList.toggle('menuOpen');
  nav.classList.toggle('mobileNav');
};

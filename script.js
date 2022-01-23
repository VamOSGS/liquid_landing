const li = document.querySelectorAll('li');

li.forEach(item => {
  item.setAttribute('data-hover', item.textContent);
});

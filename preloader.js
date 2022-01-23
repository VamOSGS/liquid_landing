const preloader = document.querySelector('.preloader');
const imgs = document.querySelectorAll('img');
console.log(imgs);



document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    preloader.classList.add('closing');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }
};

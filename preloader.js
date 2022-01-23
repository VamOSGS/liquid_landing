const preloader = document.querySelector('.preloader');

document.onreadystatechange = () => {
  if (document.readyState == 'complete') preloader.classList.add('closing');
};

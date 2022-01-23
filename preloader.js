const preloader = document.querySelector('.preloader');

document.onreadystatechange = () => {
  preloader.classList.add('closing');
  if (document.readyState == 'complete') {
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  }
};

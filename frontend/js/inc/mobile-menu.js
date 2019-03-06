(function(){
  const hamburger = document.getElementsByClassName('header__hamburger')[0];
  const nav = document.getElementsByClassName('header__navigation')[0];
  const main = document.getElementsByClassName('main')[0];
  hamburger.addEventListener('click', function(){
    this.classList.toggle('active')
    nav.classList.toggle('active')
    main.classList.toggle('active')
  })
}());

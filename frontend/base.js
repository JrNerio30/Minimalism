window.addEventListener('scroll', function(){
  const fanIcon = document.querySelector('.fan-icon')
  let scrollAmount = window.scrollY;
  fanIcon.style.transform  = "rotate(" + -scrollAmount + "deg)";
});
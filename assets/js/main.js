
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
   this.classList.toggle('bi-moon');
   if(this.classList.toggle('bi-brightness-high-fill')){
      body.style.background = 'white';
       body.style.color = 'black';
       body.style.transition = '1s';
    }else{
       body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.scroll-down a').addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.getElementById('note');
      var targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

  function toggleMenu() {
    var overlay = document.getElementById('menuOverlay');
    overlay.classList.toggle('active');
}
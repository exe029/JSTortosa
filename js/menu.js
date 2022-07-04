// menuNav toggle
const btnToggle = document.querySelector('.menu-btn');

btnToggle.addEventListener('click', function () {
    console.log('clik')
    document.getElementById('menuNav').classList.toggle('active');
    console.log(document.getElementById('menuNav'))
  });
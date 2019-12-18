const header = document.querySelector('.header')
let newValue = 0

const detectScrollDirection = target => {
  let oldValue = 0

  document.addEventListener('scroll', _ => {
    newValue = window.pageYOffset;

    (oldValue - newValue) < 0
      ? target.classList.add('hidden')
      : target.classList.remove('hidden');

    oldValue = newValue;
  })
}

detectScrollDirection(header)

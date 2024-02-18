// click outside

// pokud uživatel klikne mimo ul - vykonzolovat 'clicked outside'

const ul = document.querySelector('ul')

document.addEventListener('click', (e) => {
  if (!ul.contains(e.target)) { // bylo kliknuto někam mimo ul
    console.log('clicked outside')
  }
})

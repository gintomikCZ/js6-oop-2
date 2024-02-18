const square = document.querySelector('.square')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  square.classList.toggle('bg-pink')
  // if (btn.textContent === 'paint white') {
  //   btn.textContent = 'paint pink'
  // } else {
  //   btn.textContent = 'paint white'
  // }
  // btn.textContent = 'paint ' + (btn.textContent === 'paint white' ? 'pink' : 'white')
  btn.textContent = `paint ${btn.textContent === 'paint white' ? 'pink' : 'white'}`
})


// ternary operator
// condition ? value1 : value2
/*

if (condition) {
  do something
} else {
  do something else
}

if (condition) {
  do myVar přiřaď something
} else {
  do myVar přiřaď something else
}  ======= >>>>>>> ternary operator




*/
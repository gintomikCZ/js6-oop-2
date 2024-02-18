const input = document.querySelector('input')

// const events = ['focus', 'blur', 'input', 'change']

// events.forEach(item => {
//   input.addEventListener(item, () => {
//     console.log(item)
//   })
// })

// v případě, že uživatel nezadá text od 3 do 7 znaků včetně - vypsat chybovou hlášku pod inputem

const errorDiv = document.querySelector('.error-message')

input.addEventListener('blur', (e) => {
  const isValid = !(e.target.value.length < 3 || e.target.value.length > 7)
  if(!isValid) {
    errorDiv.textContent = 'the input is not correct'
  }
  errorDiv.classList.remove(isValid ? 'is-visible' : 'is-hidden')
  errorDiv.classList.add(isValid ? 'is-hidden' : 'is-visible')
})

errorDiv.addEventListener('transitionend', () => {
  console.log('transition end')
})
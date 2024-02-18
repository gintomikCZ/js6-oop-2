// console.log('it works')

// const btn = document.getElementsByTagName('button')[0]
const btn = document.querySelector('button')
// .textContent, .classList, .style, .appendChild(), .innerHTML

const btnClicked = () => {
  console.log('btn has been clicked')
  btn.removeEventListener('click', btnClicked)
}

btn.addEventListener('click', btnClicked)

btn.addEventListener('mouseenter', () => {
  console.log('btn has been hovered')
})

btn.addEventListener('mouseleave', () => {
  console.log('the mouse has left from the button')
})

/*
HTMLElement.prototype.addEventListener('event type') // čekání na události
JS Event Driven Language
*/


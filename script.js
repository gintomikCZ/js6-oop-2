const input = document.querySelector('input')

const re = /[^0-9]/

input.addEventListener('input', (e) => {
  // if (!re.test(e.target.value)) {
  //   // tady něco řešit
  // }
  // e.target.value = e.target.value.replace(re, '')
  console.log('input')
})

// e.preventDefault()

// const a = document.querySelector('a')
// a.addEventListener('click', (e) => {
//   e.preventDefault()
// })

// keyboard events

// keydown - když uživatel zmáčkne klávesu
// keyup - když uživatel uvolní klávesu

input.addEventListener('keydown', (e) => {
  if (/^\w$/.test(e.key)) {
    e.preventDefault()
  }
})
input.addEventListener('keyup', () => {
  console.log('keyup')
})

const obj = {
  first: 'Karel',
  last: 'Houska'
}
 // const keys = Object.keys(obj)
 // for in cyklus
for (let key in obj) {
  console.log(obj[key])
}

// operátor in vrací true pokud obj má danou vlastnost .... syntaxe je vlastnost in object

if ('first' in obj) {
  console.log('obj má vlastnost first')
}

delete obj.last
console.log(obj)

console.log(obj.hasOwnProperty('first'))
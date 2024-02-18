// const li1 = document.querySelector('li')
// const li2 = document.querySelector('li:nth-child(2)')
// const li3 = document.querySelector('li:nth-child(3)')
// const lis = Array.from(document.querySelectorAll('li'))

const ul = document.querySelector('ul')

const p = document.querySelector('p')

// lis.forEach(li => {
//   li.addEventListener('click', (eventObject) => {
//     console.log(eventObject)
//     p.textContent = `my favourite fruit is: ${li.textContent}`
//   })
// })

// document.querySelector('ul').addEventListener('click', (e) => {
//   console.log(e)
//   console.log('ul has been clicked')
// })

// document.body.addEventListener('click', (e) => {
//   console.log(e)
//   console.log('body has been clicked')
// })

// document.addEventListener('click', (e) => {
//   console.log(e)
//   console.log('document has been clicked')
// })

// EVENT BUBBLING - PROBUBLÁVÁNÍ UDÁLOSTÍ

// ul.addEventListener('click', (e) => {
//   p.textContent = `my favourite fruit is: ${e.target.textContent}`
// })

document.addEventListener('click', (e) => {
  // if (e.target.nodeName !== 'LI') {
  //   return
  // }
  if(ul.contains(e.target)) {
    console.log(e)
    p.textContent = `my favourite fruit is: ${e.target.textContent}`
  }
})

console.log(ul.contains(ul)) // true

// EVENT DELEGATION

// HTMLELEMENT.prototype.contains(el) //

/*
je prvek v poli obsažen ????
ar.includes('ahoj') // true nebo false
ar.indexOf('ahoj') > -1 // true nebo false

*/
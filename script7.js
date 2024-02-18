const isNumeric = /^[0-9]{5}$/

// console.log(isNumeric.test('12345'))

// "555-555-5555"

// const phoneNumber = /^[0-9]{3}\\\([0-9]{3}\)\\[0-9]{4}$/
// console.log(phoneNumber.test('555\\(454)\\9099'))


// let str = 'I am Tomik'
// str = "I'm Tomik"
// str = `I'm Tomik`
// str = 'I\'m Tomik'

// 'YYYY/MM/DD'

const myDateRe = /^[0-9]{1,4}\/[0-9]{1,2}\/[0-3][0-9]$/
console.log(myDateRe.test('24/65/37'))

const isNotNumeric = /^[a-záčěšž\/]+$/i // projde text psaný malými písmeny
console.log(isNotNumeric.test('sdhfgaksfhg/člASdkfhl'))

// flags:
// -i vypínáme case sensitivity
// -g globální výskyt

let str = 'lAlAla'
str = str.replace(/a/gi, 'o')
console.log(str)
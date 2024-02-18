// const myRe = new RegExp('hello')
// const myRe1 = /hello/

// console.log(myRe1.test('hello tomik')) // true
// console.log(myRe1.test('tomikhelloasdhjsakdh')) // true

// console.log('tomikhelloasdhjsakdhhello'.match(myRe1)) //

const re = /^hello/

console.log(re.test('hello tomik'))
console.log(re.test('123 hello tomik'))

const re1 = /^hello$/

console.log(re1.test('hello tomik'))
console.log(re1.test('123 hello tomik'))
console.log(re1.test('hello'))

const re2 = /p+/
console.log(re2.test('faaa'))
const re3 = /p*/
console.log(re3.test('faaa'))

const re4 = /p{1}/
console.log(re4.test('aaapaap')) // true

const re5 = /^[asd]$/ // jednopísmenný string, který je buď 'a' nebo 's' nebo 'd'
console.log(re5.test('aa'))

const re6 = /^[asd]+$/ // string, který se skládá jen z písmen a, s, d
console.log(re6.test('asdaasdsxdsaaa'))

const re7 = /^[asd]{5}$/ // string, který se skládá jen z písmen a, s, d a má pět znaků
console.log(re7.test('asdsd'))

const re8 = /^[asd]{5,7}$/ // string, který se skládá jen z písmen a, s, d a má od pěti do 7 znaků
console.log(re8.test('asds1ds'))
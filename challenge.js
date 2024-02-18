import fromSettings from './formSettings.js'

// 1) vykresli formulář - nějak hezky

const formData = {
  firstname: '',
  lastname: '',
  dateofbirth: '',
  comment:''
}

// při bluru každé kontrolky zapište hodnotu do formData[kontrolka],
// pokud splňuje všechna předepsaná valRules
// pokud je nesplňuje, zobrazte chybovou hlášku
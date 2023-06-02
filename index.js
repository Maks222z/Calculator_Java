class Main {
  oprators = ['+', '-', '/', '*']

  functionsOperations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => Math.floor(a / b),
    '*': (a, b) => a * b,
  }

  romanNumbers = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
  }

  selectedOperator = ''

  searchOperator(str) {
    for (let index = 0; index < this.oprators.length; index++) {
      const operator = this.oprators[index]

      if (!str.includes(operator)) continue

      this.selectedOperator = operator
      break
    }
  }

  calc(str) {
    if (
      !/^(([1-9]|10) ?([\+\-\/\*]) ?([1-9]|10)|([IVX]+) ?([\+\-\/\*]) ?([IVX]+))$/.test(str)
    ) return 'Не верный формат строки'

    this.searchOperator(str)
    if (!this.selectedOperator) return 'Не верный формат строки'

    let [firstOperant, secondOperant] = str.split(this.selectedOperator)

    if (!isNaN(+firstOperant) && !isNaN(+secondOperant)) {
      return this.functionsOperations[this.selectedOperator](+firstOperant, +secondOperant)
    }

    firstOperant = this.romanNumbers[firstOperant.trim()]
    secondOperant = this.romanNumbers[secondOperant.trim()]

    if (!firstOperant || !secondOperant) return 'Не верный формат строки'

    return this.functionsOperations[this.selectedOperator](+firstOperant, +secondOperant)
  }
}

window.calculator = new Main()
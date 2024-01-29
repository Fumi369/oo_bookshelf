function sumNumbers(numbers) {
  let size = 0

  for (let i = 0; i < numbers.length; i++) {
    size += numbers[i]
  }

  return size
}

let numbers = []
numbers.push(520)
numbers.push(454)
numbers.push(876)
console.log(sumNumbers(numbers))

numbers.push(11)
console.log(sumNumbers(numbers))

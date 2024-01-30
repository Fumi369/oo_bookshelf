// 課題 a
class Counter {
  #value

  constructor() {
    this.#value = 0
  }

  countUp() {
    this.#value += 1
  }

  getCount() {
    return this.#value
  }
}

let counter = new Counter()
counter.countUp()
console.log(counter.getCount()) // => 1
counter.countUp()
console.log(counter.getCount()) // => 2

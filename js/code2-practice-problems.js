class Counter {
  constructor() {
    this.count = 0
  }

  up() {
    this.count += 1
  }

  down() {
    this.count -= 1
  }

  getValue() {
    return this.count
  }

  resetValue() {
    return (this.count = 0)
  }
}

class EvenCounter {
  constructor() {
    this.count = 0
    this.callCount = 0
  }

  up() {
    this.callCount += 1
    if (this.callCount % 2 === 0) {
      this.count += 1
    }
    return this.count
  }

  getValue() {
    return this.count
  }
}

let counter = new Counter()
counter.up()
console.log("counter: ", counter.getValue())
counter.up()
console.log("counter: ", counter.getValue())
counter.down()
console.log("counter: ", counter.getValue())
counter.resetValue()
console.log("counter: ", counter.getValue())
// 実行結果
// counter: 1
// counter: 2
// counter: 1
// counter: 0

let counter2 = new Counter()
counter2.up()
console.log("counter2: ", counter2.getValue())
counter2.resetValue()
console.log("counter2: ", counter2.getValue())
counter2.up()
console.log("counter2: ", counter2.getValue())
counter2.up()
console.log("counter2: ", counter2.getValue())
counter2.down()
console.log("counter2: ", counter2.getValue())
// 実行結果
// counter2: 1
// counter2: 0
// counter2: 1
// counter2: 2
// counter2: 1

let evenCounter = new EvenCounter()
evenCounter.up()
console.log("evenCounter: ", evenCounter.getValue())
evenCounter.up()
console.log("evenCounter: ", evenCounter.getValue())
evenCounter.up()
console.log("evenCounter: ", evenCounter.getValue())
evenCounter.up()
console.log("evenCounter: ", evenCounter.getValue())
evenCounter.up()
console.log("evenCounter: ", evenCounter.getValue())
evenCounter.up()
console.log("evenCounter: ", evenCounter.getValue())
evenCounter.up()
console.log("evenCounter: ", evenCounter.getValue())
// 実行結果
// evenCounter: 0
// evenCounter: 1
// evenCounter: 1
// evenCounter: 2
// evenCounter: 2
// evenCounter: 3
// evenCounter: 3

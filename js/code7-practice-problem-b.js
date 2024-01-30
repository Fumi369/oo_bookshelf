// 課題 b
class PointCalculator {
  #results

  constructor() {
    this.#results = results
  }

  sumPoints() {
    let sum = 0

    for (const result of this.#results) {
      sum += result.point
    }

    return sum
  }

  averagePoints() {
    return this.sumPoints() / this.#results.length
  }

  findMostPointsHolder() {
    // 最高得点を見つける
    const points = this.#results.map((result) => {
      return result.point
    })
    const max = Math.max(...points)

    // 最高得点者の名前を見つける
    const foundMostPointsHolder = this.#results.find((result) => result.point === max)
    return foundMostPointsHolder.name
  }
}

let results = [
  { name: "鈴木", point: 80 },
  { name: "田中", point: 92 },
  { name: "佐藤", point: 75 },
]

let pointCalculator = new PointCalculator(results)

// 全員のpointの合計を求める
console.log(pointCalculator.sumPoints()) // => 247

// 全員のpointの平均を求める
console.log(pointCalculator.averagePoints()) // => 82.33333333333333

// 最高得点の人を検索してnameを得る
console.log(pointCalculator.findMostPointsHolder()) // 田中

// 新たな結果 {name: '阿部', point: 95}を後から追加して上記を改めて計算する
results.push({ name: "阿部", point: 95 })
console.log(pointCalculator.sumPoints()) // => 342
console.log(pointCalculator.averagePoints()) // => 85.5
console.log(pointCalculator.findMostPointsHolder()) // 阿部

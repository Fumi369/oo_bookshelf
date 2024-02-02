// 課題 c

// Resultクラスでデータ（name & point）をカプセル化し、同データには同クラスのゲッターメソッドでしかアクセスできないようにする
class Result {
  #name
  #point

  constructor(name, point) {
    // コンストラクタに渡される値のバリデーション
    if (name === null) {
      throw new Error("name は null ではいけません")
    } else if (typeof name !== "string") {
      throw new Error("name の型は string でないといけません")
    }

    if (point === null) {
      throw new Error("point は null ではいけません")
    } else if (typeof point !== "number") {
      throw new Error("point の型は number でないといけません")
    }

    this.#name = name
    this.#point = point
  }

  getName() {
    return this.#name
  }

  getPoint() {
    return this.#point
  }
}

class PointCalculator {
  #results

  constructor() {
    this.#results = []
  }

  // Resultインスタンスはこのメソッドでのみresults配列に追加可能
  addResult(result) {
    this.#results.push(result)
  }

  sumPoints() {
    let sum = 0

    for (const result of this.#results) {
      sum += result.getPoint() // 各ResultインスタンスのpointプロパティはgetPoint()で取得
    }

    return sum
  }

  averagePoints() {
    return this.sumPoints() / this.#results.length
  }

  findMostPointsHolder() {
    // 最高得点を見つける
    const points = this.#results.map((result) => {
      return result.getPoint()
    })
    const max = Math.max(...points)

    // 最高得点者の名前を見つける
    const foundMostPointsHolder = this.#results.find((result) => result.getPoint() === max)
    return foundMostPointsHolder.getName() // 各ResultインスタンスのnameプロパティはgetName()で取得
  }
}

let results = []
let pointCalculator = new PointCalculator(results)
pointCalculator.addResult(new Result("鈴木", 80))
pointCalculator.addResult(new Result("田中", 92))
pointCalculator.addResult(new Result("佐藤", 75))

// コンストラクタバリデーションのエラー集
// pointCalculator.addResult(new Result(null, 75)) // => Error: name は null ではいけません
// pointCalculator.addResult(new Result(undefined, 75)) // => Error: name の型は string でないといけません
// pointCalculator.addResult(new Result("高橋", null)) // => Error: point は null ではいけません
// pointCalculator.addResult(new Result("高橋", "75")) // => Error: point の型は number でないといけません

// 全員のpointの合計を求める
console.log(pointCalculator.sumPoints()) // => 247

// 全員のpointの平均を求める
console.log(pointCalculator.averagePoints()) // => 82.33333333333333

// 最高得点の人を検索してnameを得る
console.log(pointCalculator.findMostPointsHolder()) // 田中

// 新たな結果 {name: '阿部', point: 95}を後から追加して上記を改めて計算する
pointCalculator.addResult(new Result("阿部", 95))
console.log(pointCalculator.sumPoints()) // => 342
console.log(pointCalculator.averagePoints()) // => 85.5
console.log(pointCalculator.findMostPointsHolder()) // 阿部

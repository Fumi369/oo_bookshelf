class Item {
  constructor(productName, price) {
    this.productName = productName
    this.price = price
  }

  getProductName() {
    return this.productName
  }

  setProductName(value) {
    this.productName = value
  }

  getPrice() {
    return `${this.price}円`
  }

  setPrice(value) {
    this.price = value
  }
}

class VendingMachine {
  constructor() {
    this.items = []
  }

  add(item, quantity = 1) {
    for (let i = 0; i < quantity; i++) {
      this.items.push(item)
    }
  }

  buy(productName, cash) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].productName === productName) {
        if (this.items[i].price <= cash) {
          const boughtItem = this.items[i]
          this.items.splice(i, 1)
          return boughtItem
        } else {
          throw new Error("お金が足りません")
        }
      }
    }
    throw new Error("在庫が0です")
  }

  canBuy(productName) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].productName === productName) {
        return true
      }
      return false
    }
  }
}

let coke = new Item("コーラ", 120)
let oolongTea = new Item("烏龍茶", 100)
let vendingMachine = new VendingMachine()

console.log("在庫：", vendingMachine.items)
// => 在庫： []

vendingMachine.add(coke, 3)
vendingMachine.add(oolongTea, 5)
console.log("在庫：", vendingMachine.items)
// 在庫： [
//   Item { productName: 'コーラ', price: 120 },
//   Item { productName: 'コーラ', price: 120 },
//   Item { productName: 'コーラ', price: 120 },
//   Item { productName: '烏龍茶', price: 100 },
//   Item { productName: '烏龍茶', price: 100 },
//   Item { productName: '烏龍茶', price: 100 },
//   Item { productName: '烏龍茶', price: 100 },
//   Item { productName: '烏龍茶', price: 100 }
// ]

vendingMachine.buy("コーラ", 120)
vendingMachine.buy("烏龍茶", 100)
vendingMachine.buy("烏龍茶", 10000)
console.log("在庫：", vendingMachine.items)
// 在庫： [
//   Item { productName: 'コーラ', price: 120 },
//   Item { productName: 'コーラ', price: 120 },
//   Item { productName: '烏龍茶', price: 100 },
//   Item { productName: '烏龍茶', price: 100 },
//   Item { productName: '烏龍茶', price: 100 }
// ]

// コーラの購入可否確認
if (vendingMachine.canBuy("コーラ")) {
  console.log("コーラは購入できます")
} else {
  console.log("コーラは購入できません")
} // => コーラは購入できます

// コーラの在庫を0にしたあとに、購入可否の確認
vendingMachine.buy("コーラ", 120)
vendingMachine.buy("コーラ", 120)
if (vendingMachine.canBuy("コーラ")) {
  console.log("コーラは購入できます")
} else {
  console.log("コーラは購入できません")
} // => コーラは購入できません

// 一度も補充したことのない商品の購入可否確認
if (vendingMachine.canBuy("スプライト")) {
  console.log("スプライトは購入できます")
} else {
  console.log("スプライトは購入できません")
} // => スプライトは購入できません

// 在庫なしの例外処理
try {
  vendingMachine.buy("コーラ", 120)
} catch (error) {
  console.log(error.message) // => 在庫が0です
}

// 投入額不足の例外処理
try {
  vendingMachine.buy("烏龍茶", 50)
} catch (error) {
  console.log(error.message) // => お金が足りません
}

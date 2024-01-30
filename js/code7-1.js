class ImmutableBook {
  #title
  #pageSize

  constructor(title, pageSize) {
    this.#title = title
    this.#pageSize = pageSize
  }

  getTitle() {
    return this.#title
  }

  getPageSize() {
    return this.#pageSize
  }
}

let book = new ImmutableBook("坊っちゃん", 520)

// 以下の２つはエラーになり、アクセスできない
// console.log(book.#title) // SyntaxError: Private field '#title' must be declared in an enclosing class
// console.log(book.#pageSize) // SyntaxError: Private field '#pageSize' must be declared in an enclosing class

// 以下の２つはアクセスできる
console.log(book.getTitle()) // 坊っちゃん
console.log(book.getPageSize()) // 520

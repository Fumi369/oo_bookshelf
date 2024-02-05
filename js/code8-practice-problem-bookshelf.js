class Book {
  constructor(title, pageSize) {
    this.title = title
    this.pageSize = pageSize
  }

  getTitle() {
    return this.title
  }

  setTitle(value) {
    this.title = value
  }

  getPageSize() {
    return this.pageSize
  }

  setPageSize(value) {
    this.pageSize = value
  }
}

class UIBook extends Book {
  getDecoratedTitle() {
    return `${this.title}(${this.pageSize})`
  }
}

class JsonableBook extends Book {
  constructor(title, pageSize) {
    super(title, pageSize)
    this.created_at = new Date()
  }

  toJsonString() {
    return JSON.stringify({
      title: this.title,
      pageSize: this.pageSize,
      created_at: this.created_at,
    })
  }
}

class Bookshelf {
  constructor() {
    this.books = []
  }

  addBook(book) {
    this.books.push(book)
  }

  findBookByTitle(title) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].getTitle() === title) return this.books[i]
    }
    return null
  }

  sumPageSize() {
    let size = 0
    for (let i = 0; i < this.books.length; i++) {
      size += this.books[i].getPageSize()
    }
    return size
  }

  size() {
    return this.books.length
  }

  canAddBook(book) {
    return true
  }
}

class LimitedBookshelf extends Bookshelf {
  constructor(maxSize = 3) {
    super()
    this.maxSize = maxSize
  }

  canAddBook(book) {
    return this.books.length < this.maxSize
  }
}

class DebugBookshelf extends Bookshelf {
  addBook(book) {
    console.debug(`addBookの引数：${book.title}, ${book.pageSize}`)
    super.addBook(book)
  }

  canAddBook(book) {
    console.debug(`canAddBookの引数：${book.title}, ${book.pageSize}`)
    console.debug(`canAddBookの戻り値：${super.canAddBook(book)}`)
    return super.canAddBook(book)
  }

  findBookByTitle(title) {
    console.debug(`findBookByTitleの引数：${title}`)
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].getTitle() === title) {
        console.debug(`findBookByTitleの戻り値：${this.books[i].getTitle()}`)
        return this.books[i]
      }
    }
    console.debug("findBookByTitleの戻り値：null")
    return null
  }
}

function createBookshelf() {
  if (process.env.NODE_ENV == "development") {
    return new DebugBookshelf()
  }
  return new Bookshelf()
}

// NODE_ENV=development node code8-practice-problem-bookshelf.js
console.log(process.env.NODE_ENV)

// createBookshelf 関数経由で DebugBookshelf または Bookshelf をインスタンス化
let bookshelf = createBookshelf()

// 本を2冊追加
bookshelf.addBook(new Book("坊っちゃん", 520)) // => addBookの引数：坊っちゃん, 520
bookshelf.addBook(new Book("吾輩は猫である", 300)) // => addBookの引数：吾輩は猫である, 300

// 本の追加可否確認
console.log(bookshelf.canAddBook(new Book("こころ", 400)))
// => canAddBookの引数：こころ, 400
// => canAddBookの戻り値：true

// 本の検索
let foundBook = bookshelf.findBookByTitle("坊っちゃん")
// => findBookByTitleの引数：坊っちゃん
// => findBookByTitleの戻り値：坊っちゃん
let foundBook2 = bookshelf.findBookByTitle("こころ")
// => findBookByTitleの引数：こころ
// => findBookByTitleの戻り値：null

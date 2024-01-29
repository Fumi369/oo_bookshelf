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

let bookshelf = new LimitedBookshelf()

bookshelf.addBook(new Book("坊っちゃん", 520))
bookshelf.addBook(new Book("吾輩は猫である", 454))
bookshelf.addBook(new Book("こころ", 876))

if (!bookshelf.addBook(new Book("門", 345))) {
  console.log(`新しい本を追加できませんでした。今の本の数：${bookshelf.size()}`)
}

console.log(bookshelf.findBookByTitle("こころ"))
console.log(bookshelf.sumPageSize())

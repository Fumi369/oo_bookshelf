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

class Bookshelf {
  static valueOf(arrayOfHash) {
    let bookshelf = new this()

    for (let i = 0; i < arrayOfHash.length; i++) {
      let hash = arrayOfHash[i]
      let book = new Book(hash.title, hash.pageSize)
      bookshelf.addBook(book)
    }
    return bookshelf
  }

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

let books = [
  { title: "坊っちゃん", pageSize: 520 },
  { title: "吾輩は猫である", pageSize: 454 },
  { title: "こころ", pageSize: 876 },
]

let bookshelf = LimitedBookshelf.valueOf(books)

if (!bookshelf.addBook(new Book("門", 345))) {
  console.log(`新しい本を追加できませんでした。今の本の数：${bookshelf.size()}`)
}

console.log(bookshelf.findBookByTitle("こころ"))
console.log(bookshelf.sumPageSize())

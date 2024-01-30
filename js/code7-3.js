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

  toJSON() {
    return { title: this.#title, pageSize: this.#pageSize }
  }
}

class Bookshelf {
  #books

  constructor(books) {
    this.#books = books
  }

  addBook(book) {
    this.#books.push(book)
  }

  findBookByTitle(title) {
    for (let i = 0; i < this.#books.length; i++) {
      if (this.#books[i].getTitle() === title) return this.#books[i]
    }
    return null
  }

  sumPagesize() {
    let size = 0
    for (let i = 0; i < this.#books.length; i++) {
      size += this.#books[i].getPageSize()
    }
    return size
  }

  getBooks() {
    return this.#books
  }
}

let books = []
let bookshelf = new Bookshelf(books)
bookshelf.addBook(new ImmutableBook("坊っちゃん", 520))
bookshelf.addBook(new ImmutableBook("吾輩は猫である", 454))
bookshelf.addBook(new ImmutableBook("こころ", 876))

// 1. Bookshelfに渡したbooksを直接操作
books.splice(0, books.length - 1)
console.log(JSON.stringify(bookshelf.getBooks())) // => [{"title":"こころ","pageSize":876}]

// 2. Bookshelfから取り出したbooksを直接操作
let innerBooks = bookshelf.getBooks()
innerBooks.splice(0, books.length)
console.log(JSON.stringify(bookshelf.getBooks())) // => []

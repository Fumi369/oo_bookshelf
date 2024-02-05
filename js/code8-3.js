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

function findBookByTitle(books, title) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === title) return books[i]
  }
  return null
}

function sumPageSize(books) {
  let size = 0
  for (let i = 0; i < books.length; i++) {
    size += books[i].pageSize
  }
  return size
}

class DebugBook extends Book {
  getTitle() {
    console.debug(`getTitle(): ${super.getTitle()}`)
    return super.getTitle()
  }
  setTitle(value) {
    console.debug(`setTitle(${value})`)
    super.setTitle(value)
  }
  getPageSize() {
    console.debug(`getPageSize(): ${super.getPageSize()}`)
    return super.getPageSize()
  }
  setPageSize(value) {
    console.debug(`setPageSize(${value})`)
    super.setPageSize(value)
  }
}

function createBook(title, pageSize) {
  if (process.env.NODE_ENV == "development") {
    return new DebugBook(title, pageSize)
  } else {
    return new Book(title, pageSize)
  }
}

// NODE_ENV=development node code8-3.js
console.log(process.env.NODE_ENV)

let books = []
let bocchan = createBook("坊っちゃん", 520)
books.push(bocchan)

let nekoden = createBook("吾輩は猫である", 0)
nekoden.setPageSize(454)
console.log(nekoden.getPageSize())
books.push(nekoden)

books.push(createBook("こころ", 876))

console.log(findBookByTitle(books, "こころ"))
console.log(sumPageSize(books))

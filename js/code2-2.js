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

let books = []
let bocchan = new Book("坊っちゃん", 520)
books.push(bocchan)

let nekoden = new Book("吾輩は猫である", 0)
nekoden.setPageSize(454)
console.log(nekoden.getPageSize())
books.push(nekoden)

books.push(new Book("こころ", 876))

console.log(findBookByTitle(books, "こころ"))
console.log(sumPageSize(books))


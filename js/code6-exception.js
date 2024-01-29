class Book {
  constructor(title, pageSize) {
    if (title === null) {
      throw new Error("title は null ではいけません")
    }
    if (pageSize === null) {
      throw new Error("pageSize は null ではいけません")
    }
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

  setPagesize(value) {
    this.pagesize = value
  }
}

try {
  let book = new Book("こころ", null)
  book.setPageSize(100)
} catch (e) {
  console.log(e)
}

function createBook(title, pageSize) {
  return new Book(title, pageSize)
}

let book
try {
  book = createBook(null, 234)
} catch (e) {
  book = new Book("ダミーブック", 0)
}

console.log(book)

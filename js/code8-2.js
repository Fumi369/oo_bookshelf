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
  getExtensionString() {
    return `${this.title}(${this.pageSize})`
  }
}

class JsonableBook extends Book {
  constructor(title, pageSize) {
    super(title, pageSize)
    this.created_at = new Date()
  }

  getExtensionString() {
    return JSON.stringify({
      title: this.title,
      pageSize: this.pageSize,
      created_at: this.created_at,
    })
  }
}

let books = []

let uibook = new UIBook()
uibook.setTitle("友情")
uibook.setPageSize(489)
books.push(uibook)

let jbook = new JsonableBook("みだれ髪", 290)
books.push(jbook)

console.log("books: ", books)

let csvData = []
csvData.push(["タイトル", "ページ数", "拡張情報"])

for (let i = 0; i < books.length; i++) {
  let book = books[i]
  let record = [book.getTitle(), book.getPageSize()]
  record.push(book.getExtensionString())
  csvData.push(record)
}

console.log("csvData: ", csvData)

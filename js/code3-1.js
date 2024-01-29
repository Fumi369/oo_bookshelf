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

let uibook = new UIBook()
uibook.setTitle("友情")
uibook.setPageSize(489)
console.log(uibook.getDecoratedTitle())

let jbook = new JsonableBook("みだれ髪", 290)
console.log(jbook.getTitle())
console.log(jbook.toJsonString())


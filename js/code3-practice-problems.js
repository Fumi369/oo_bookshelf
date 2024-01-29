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

class RejectedBocchanBookshelf extends Bookshelf {
  constructor() {
    super()
  }

  addBook(book) {
    if (book.getTitle() === "坊っちゃん") {
      return
    }
    super.addBook(book)
  }
}

class ThinBookshelf extends Bookshelf {
  constructor() {
    super()
  }

  addBook(book) {
    if (book.getPageSize() > 19) {
      return
    }
    super.addBook(book)
  }
}

class LimitedBookshelf extends Bookshelf {
  constructor(maxSize = 3) {
    super()
    this.maxSize = maxSize
    this.rejectionCount = 0
  }

  addBook(book) {
    if (this.canAddBook(book)) {
      super.addBook(book)
    } else {
      this.countRejection()
    }
  }

  countRejection() {
    this.rejectionCount += 1
  }

  canAddBook(book) {
    return this.books.length < this.maxSize
  }

  getRejectionCount() {
    return this.rejectionCount
  }
}

let noBocchanBookshelf = new RejectedBocchanBookshelf()
noBocchanBookshelf.addBook(new Book("坊っちゃん", 520))
console.log(noBocchanBookshelf.findBookByTitle("坊っちゃん")) // 「坊っちゃん」なので、addBook()で本棚に追加されなかった

let smallBookshelf = new ThinBookshelf()
smallBookshelf.addBook(new Book("厚い本", 20))
console.log(smallBookshelf.findBookByTitle("厚い本")) // 20ページ以上の本なので、addBook()で本棚に追加されなかった
smallBookshelf.addBook(new Book("薄い本", 19))
console.log(smallBookshelf.findBookByTitle("薄い本")) // 20ページ未満の本なので、addBook()で本棚に追加された

let limitedBookshelf = new LimitedBookshelf()
limitedBookshelf.addBook(new Book("吾輩は猫である", 454))
limitedBookshelf.addBook(new Book("こころ", 876))
limitedBookshelf.addBook(new Book("門", 345))
console.log(limitedBookshelf.getRejectionCount()) // ３冊入る本棚なので、ここまでの拒否回数は０
limitedBookshelf.addBook(new Book("三四郎", 358))
limitedBookshelf.addBook(new Book("それから", 888))
console.log(limitedBookshelf.getRejectionCount()) // ２冊拒否されたので今日費回数は２

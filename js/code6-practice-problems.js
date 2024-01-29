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

class RentalBookshelf extends Bookshelf {
  constructor() {
    super()
    this.rentedBooks = new Set()
  }

  rentBook(book) {
    const rentalBook = this.findBookByTitle(book)
    if (rentalBook && !this.isRented(book)) {
      this.rentedBooks.add(book)
      console.log(`${book}が貸し出されました`)
    } else {
      console.log(`${book}は貸し出しできません`)
    }
  }

  returnBook(book) {
    if (this.isRented(book)) {
      this.rentedBooks.delete(book)
      console.log(`${book}が返却されました`)
    } else {
      console.log(`${book}は返却できません`)
    }
  }

  listRentedBooks() {
    return [...this.rentedBooks]
  }

  isRented(book) {
    return this.rentedBooks.has(book)
  }
}

// 本の準備
let book1 = new Book("坊っちゃん", 520)
let book2 = new Book("吾輩は猫である", 454)
let book3 = new Book("こころ", 876)

// RentalBookshelf クラスのインスタンス化
let rentalBookshelf = new RentalBookshelf()

// 本の追加
rentalBookshelf.addBook(book1)
rentalBookshelf.addBook(book2)
rentalBookshelf.addBook(book3)

// 本の貸し出し
rentalBookshelf.rentBook("こころ") // こころが貸し出されました
rentalBookshelf.rentBook("三四郎") // 三四郎は貸し出しできません

// 本の返却
rentalBookshelf.returnBook("こころ") // こころが返却されました
rentalBookshelf.returnBook("三四郎") // 三四郎は返却できません

// 貸し出し中の本の一覧
rentalBookshelf.rentBook("坊っちゃん") // 坊っちゃんが貸し出されました
rentalBookshelf.rentBook("吾輩は猫である") // 吾輩は猫であるが貸し出されました
console.log("貸し出し中の本：", rentalBookshelf.listRentedBooks()) // Set(2) { '坊っちゃん', '吾輩は猫である' }

// 本の貸し出し状況
console.log("坊っちゃんの貸し出し状況：", rentalBookshelf.isRented("坊っちゃん")) // true
console.log("こころの貸し出し状況：", rentalBookshelf.isRented("こころ")) // false

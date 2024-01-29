function sumPageSize(books) {
  let size = 0
  for (let i = 0; i < books.length; i++) {
    size += books[i].pageSize
  }
  return size
}

let books = []
books.push({ title: "坊っちゃん", pageSize: 520 })
books.push({ title: "我輩は猫である", pageSize: 454 })
books.push({ title: "こころ", pageSize: 876 })

console.log(sumPageSize(books))

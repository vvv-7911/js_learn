let a = {
  name: 'wn',
  book: {
    title: "You dont know Js",
    price: '45'
  }
}
let b = JSON.parse(JSON.stringify(a))
a.name = '蜗牛'
a.book.price = '55'
console.log(b);

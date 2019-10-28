const http = require('http');

http.createServer((res, req) => {
  if (req.url === './api/books') {
    let list = [{book: 'bkk1', book: 'bkk2'}];
    res.end( `getBook(${JSON.stringify(list)})`);
  }
})
.listen(3002, () => {
  console.log('server is running http://localhost:3002');
})
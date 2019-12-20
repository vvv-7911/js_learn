const fs = require('fs')
const md5 = require('md5')

fs.stat('./README.MD', (err, stat) => {
  console.log(stat.mtime)
})
const readme = fs.readFileSync('./README.MD', 'utf8')
console.log(md5(readme))
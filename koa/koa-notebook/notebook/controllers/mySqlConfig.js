var mysql = require('mysql')
var config = require('./defaultConfig')

var pooll = mysql.createPool({
    host: config.datebase.HOST,
    user: config.datebase.USERNAME,
    password: config.datebase.PASSWORD,
    database: config.datebase.DATABASE,
    port: config.datebase.PORT
  })

  // 同一连接数据库的方法
  let allServies = {
    query: function (sql, values) {
      return new Promise((resolve, reject) => {
        pooll.getConnection(function (err, connection) {
          if (err) {
            return reject(err)
          } else {
            connection.query(sql, values, (err, rows) => {
              if (err) {
                return reject(err)
              }
              resolve(rows)
              connection.release() //释放连接池
            })
          }
        })
      })
    }
  }

  // 读取所有user表数据，测试数据连接
  let getAllUsers = function() {
    let _sql = `select * from users`
    return allServies.query(_sql)
  }

  // 注册用户
  let insertUser = function(value) {
    let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
    return allServies.query(_sql, value)
  }
  // 查找用户
  let findUser = function(username) {
    let _sql = `select * from users where username="${username}";`
    return allServies.query(_sql)
  }
  // 用户登录
  let userLogin = function(username, userpwd) {
    let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
    return allServies.query(_sql)
  }

  module.exports = {
    getAllUsers
  }
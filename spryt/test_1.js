// const superagent= require('superagent');
// const split = require('./split')
const request = require('request')
const fs = require('fs')
const axios = require('axios')
const save = require('./save')
// const rp = require('request-promise')

// superagent
//     .get('www.baidu.com')
//     .set("X-Forwarded-For" , "10.111.198.90")
//     .then((res,err)=>{
//         if(err){
//             console.log(err);
            
//         }else{
//             console.log(res.text);
            
//         }
//     });

// request.get('https://nodei.co/npm/request.png?downloads=true&downloadRank=true&stars=true')
// .on('error', function(err) {
//   console.log(err)
// })
// .pipe(fs.createWriteStream('doodle.png'))

var r = request.defaults({'proxy':'http://111.231.140.109:8888'})
r
    .get('https://fs.xicidaili.com/images/logo.png')
    .on('error', function(err) {
          console.log('err')
        })
    .pipe(fs.createWriteStream('logo.png'))

// split
//     .gethtml('https://www.baidu.com','')
//     .then(v=>{ 
//         console.log(v);
//     })

// rp('http://www.baidu.com')
// .then(data=>{
//     console.log(data);
// })


// axios({
//         methods: 'get',
//         url : 'https://fs.xicidaili.com/images/logo.png',
//         responseType : 'stream',
//         proxy: {
//             host: "http://111.231.140.109",
//             port: 8888
//           }
//     })
//     .then(res=>{
//         console.log('success');
//         res.data.pipe(fs.createWriteStream('test.txt'))
//         // save.clearFileContent('test.txt')
//         // save.appendFileBuffer('test.txt',res.data)
//     })
//     .catch(err=>{
//         console.log(err);
        
//     })
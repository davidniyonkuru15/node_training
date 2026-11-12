// console.log(__dirname)
// setInterval(() =>{
//     console.log("hello world")
// }, 2)
// const names = require ('./names')
// const greeting = require ('./utilis')
// const info = require ('./6-alternative')
// const addnum = require ('./7-mind-grena')
// console.log(info)
// // console.log(info.singlePerson)
// // const utils = require ('./utilis')
// // names(names.john)
// greeting(names.john)
// addnum()
// const os = require ('os')
// const user = os.userInfo()
// console.log(user)
// // method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} hours`)

// access server 
// const http = require('http')
// const server = http.createServer((req, res) => {
//     // console.log(req)
//     if(req.url === '/'){
//         res.end("Welcome to my home page")
//     }
//     if(req.url === '/about'){
//         res.end("her is our short history ")
//     }
//     res.end(`
//     <h1>Oops!</h1>
//     <p>we couldn't find the page you are looking for</p>
//     <a href = "/">back home </a>
//     `)

//     // res.write("Welcome to my first server")
//     // res.end()
// })
// server.listen(5000)
// NPM manage 


// const http  = require('http');
// const server = http.createServer((req, res) =>{
// res.write('Welcome to our home page')
// })

// server.listen(5000)

const _ = require('lodash') ;
const items = [1, [2, [3, [4]]]]
const newItemes = _.flattenDeep(items)
console.log(newItemes)


const url = require('url')
const str = 'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'


console.log(url.parse(str))

console.log(url.resolve('/one/two/three', 'four') )        // '/one/two/four'
console.log(url.resolve('http://example.com/', '/one') )   // 'http://example.com/one'
console.log(url.resolve('http://example.com/one', '/two')) // 'http://example.com/two'
const fs = require('fs')
const file = './package.json'

// 普通读取 
// 同步
const data = fs.readFileSync(file, 'utf8')
console.log('readFileSync: ', data)
// 异步
fs.readFile(file, 'utf8', (err, data) => {
    console.log('readFile: ', data)
})

// 文件流
const readStream = fs.createReadStream(file)
readStream
    .on('data', function(chunk) {
        console.log('读取数据: ' + chunk)
    })
    .on('error', function(err) {
        console.log('出错: ' + err.message)
    })
    .on('end', function(){  // 没有数据了
        console.log('没有数据了')
    })
    .on('close', function(){  // 已经关闭，不会再有事件抛出
        console.log('已经关闭')
    });

//  文件写入
// 同步
fs.writeFileSync('./text.json', '{"name": "Hello"}', 'utf8')
console.log('text文件写入成功');
// 异步
fs.writeFile('./text1.json', '{"name": "Hello"}', 'utf8', (err) => {
    if(err) throw err;
    console.log('text1文件写入成功');
})

// 通过文件流写入
const writeStream = fs.createWriteStream('./text2.json', 'utf8')
writeStream.on('close', function() {
    console.log('已经关闭')
})
writeStream.write('hello')
writeStream.write(' world')
writeStream.end('')

// 是否存在
fs.access(file, function(err){
    if(err) throw err;
    console.log('fileForRead.txt存在');
});

// 创建
// 异步版本（如果目录已存在，会报错）
// fs.mkdir('./hello', () => {})
// fs.mkdirSync('./hello1');

//  删除、
fs.unlinkSync('./text2.json');


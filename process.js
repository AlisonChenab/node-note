// process.env
if(process.env.NODE_ENV === 'production'){
    console.log('生产环境');
}else{
    console.log('非生产环境');
}

// process.nextTick
console.log('海贼王');
process.nextTick(function(){
    console.log('火影忍者');
});
console.log('死神');

process.argv.forEach(function(val, index, array) {
    console.log('argv' + index + ': ' + val);
});

process.execArgv.forEach(function(val, index, array) {
    console.log('execArgv' + index + ': ' + val);
});

console.log('Starting directory: ' + process.cwd());
try {
  process.chdir('/tmp');
  console.log('New directory: ' + process.cwd());
}
catch (err) {
  console.log('chdir: ' + err);
}

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
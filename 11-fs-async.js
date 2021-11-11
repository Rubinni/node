const { readFile, writeFile } = require('fs')

console.log('Starting');
readFile('./content/first.txt', 'utf8',(err,result) => {  
    if(err){
        console.log(err)
        return
    }
    const first = result

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result

        writeFile('./content/result-Async.txt',
         `Here is the Async result ${first}, ${second}`,
         {flag:'a'},
         (err,result) => {
             if(err){
                 console.log(err)
                 return
             }
             console.log('Done with this task');
         }
         )
    })
})

console.log('Starting the next task');

const {readFile} = require('fs')
const util = require('util')


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

// getText('../content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

const start = async () => {
    try{
        const first = await getText('../content/first.txt')
        const second = await getText('../content/second.txt')
        console.log(first, second)
    }catch(error){
        console.log(error);
    }
}

start()


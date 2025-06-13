const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {encoding: 'utf8'});

stream.on('data', (result) => {
    console.log(result)
})
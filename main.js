const fs = require('fs')
const { Transform } = require('stream')

//читати файл і перекинути дані в трансформ щоб підняти всі симовли

function upp(){
    const data = fs.createReadStream('./text.txt','utf8')
  const upTransform = new Transform({
        transform(chunk, encoding,done){
            //const up = chunk.toString().toUpperCase()
            const up = chunk.toString().split(' ')
            done(null, up)
        }
    })

    upTransform.on('data', (chunk)=>{
        console.log(chunk.toString())
    })
    const writer = fs.createWriteStream('./textToUp.txt') 

    data.pipe(upTransform).pipe(writer)
}
upp()

//let a = 'some text aa ss'
//a.split(/\s/gm)
// першу букву підняти в аперкейс
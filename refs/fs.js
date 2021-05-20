const fs = require('fs')
const path = require('path')
/// file sistem

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) throw new Error(err)
//     console.log('Папка была создана')
// })
// fs.mkdir(path.join(__dirname, 'test2'), err => {
//     if (err) throw new Error(err)
//     console.log("Папка была создана")
// })

/// создание файла

// fs.writeFile(path.join(__dirname, 'test', 'newtest.txt'),
//     'Hello world',
//     err => {
//         if (err) throw err
//         console.log('файл был создан')
//         fs.appendFile(path.join(__dirname, 'test', 'newtest.txt'),
//             ' From Belarus',
//             err => {
//                 if (err) throw err
//                 console.log('Файл был изменен')
//             }
//         )
//     }
// )
// ///чтение из файла
// fs.readFile(
//     path.join(__dirname, 'test', 'newtest.txt'),
//     (err, data) => {
//         if (err) throw err
//         console.log(Buffer.from(data).toString())
//     }
// )
/// переименование

fs.rename(
    path.join(__dirname, 'test', 'newtest.txt'),
    path.join(__dirname, 'test', 'newTest.txt'),
    err => {
       if(err) throw err
        console.log('фаил был переименован')
    }
)
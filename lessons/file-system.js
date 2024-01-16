 const fs = require('fs')
 const path = require('path')

// console.log('START')

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('Папка создана')
// })

// console.log('END')





/* ----------- удаление-------------*/

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err;
//     }
    
// })




/*   ----------------добавление файла с данными (данные перезаписываются поверх)----------------*/


// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'file created', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Файл записан')
//     /* -------------дозаписать в конец файла -----------*/
//     fs.appendFile(path.resolve(__dirname, 'text.txt'), 'new text added to this file', (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log('Текс добавлен')
//     })
// })





/*--------создаём файл и записываем в него данные через promise-----------*/



 const writeFileAsync = async (path, data) => {
     return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
         if (err) {
             return reject(err.message)
         }
         resolve()
     }))
 }

 const appendFileAsync = async (path, data) => {
     return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
         if (err) {
             return reject(err.message)
         }
         resolve()
     }))
 }

 const readFileAsync = async (path) => {
     return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
         if (err) {
             return reject(err.message)
         }
         resolve(data)
     }))
 }

//  const removeFileAsync = async (path) => {
//      return new Promise((resolve, reject) => fs.rm(path, {encoding: 'utf-8'}, (err) => {
//          if (err) {
//              return reject(err.message)
//          }
//          resolve()
//      }))
//  }

// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '456'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '789'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log('err'))

// removeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')
//     .then(() => console.log('file was removed'))

// const text = process.env.TEXT || '';

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Количество слов ${count}`))
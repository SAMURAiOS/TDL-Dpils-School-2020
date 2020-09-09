// // console.log('Hello, node');

// // let array = [1,2,3];

// // console.log(array);

// // //Global objects

// // setTimeout(() => 
// // {
// //     console.log('Stop interval');
// //     clearInterval(interval);
// // }, 5000);

// // const interval = setInterval(() => 
// // {
// //     console.log('in the interval');
// // }, 2000);

// // console.log('Im out of sync');

// // console.log(__dirname);
// // console.log(__filename);
// // console.log(__dirname, __filename);

// // const {people,ages} = require('./people');

// // console.log(ages.length, people.length);

// // const os = require('os');

// // console.log(os);

// const fs = require('fs');

// // //reading files
// // fs.readFile('./docs/blog1.txt',(err, data) => 
// // {
// //     if (err)
// //     {
// //         console.log(err);
// //     }
// //     else
// //     {
// //         console.log(data.toString());
// //     }
// // });

// // console.log('last line');

// //writing files
// // fs.writeFile('./docs/blog1.txt','hello, world!', () => 
// // {
// //     console.log('done');
// // });

// // fs.writeFile('./docs/blog2.txt','hello, again!', () => 
// // {
// //     console.log('done');
// // });

// // //directories
// // if (!fs.existsSync('./assets')) //if it exist then it not exists. Will work if statement is true. (if it does not exist)
// // {
// //     fs.mkdir('./assets',(error) => 
// //     {
// //         if (error)
// //         {
// //             console.log(error);
// //         }
// //         else
// //         {
// //             console.log('folder is created');
// //         }
// //     });
// // }
// // else
// // {
// //     fs.rmdir('./assets',(error) => 
// //     {
// //         if (error)
// //         {
// //             console.log(error);
// //         }
// //         else
// //         {
// //             console.log('folder removed');
// //         }
// //     });
// // }

// // //delete files

// // // if (fs.existsSync('./docs/deleteme.txt'))
// // // {
// // //     fs.unlink('./docs/deleteme.txt',(error) => 
// // //     {
// // //         if (error)
// // //         {
// // //             console.log(error);
// // //         }
// // //         else
// // //         {
// // //             console.log('File deleted');
// // //         }
// // //     })
// // // };
// // fs.writeFile('./docs/tmpPassword.txt','hello, world!', () => 
// // {
// //     console.log('done');
// // });
// // if (!fs.existsSync('./docs/tmpPassword.txt'))
// // {
// //     fs.writeFile('./docs/tmpPassword.txt','hey',() =>
// //     {
// //         console.log('tmpPassword.txt written');
// //     })
// // }
// // else
// // {
// //     fs.unlink('./docs/tmpPassword.txt',(error) => 
// //     {
// //         if (error)
// //         {
// //             console.log(error);
// //         }
// //         else
// //         {
// //             console.log('tmpPassword.txt removed');
// //         }
// //     })
// // }


const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt')

readStream.on('data', (buffer) => 
{
    //console.log('__________ new chunk _________');
    writeStream.write('\nNEWWWW CHUNK\n');
    writeStream.write(buffer);
})
const fsPromises=require('node:fs/promises');
const path=require('node:path');
const fs = require("node:fs");


const foo= async ()=>{

  // Створити папку “baseFolder”.
// В ній створити 5 папок
// в кожній з яких створити по 5 файлів з розширенням txt.
//     Вивести в консоль шляхи до кожного файлу чи папки, також вивести поряд інформацію про те, чи є це файл чи папка.

  await fsPromises.mkdir(path.join(__dirname,'baseFolder'),{recursive:true});

  for (i=1;i<6;i++){
    await fsPromises.mkdir(path.join(__dirname,'baseFolder',`directory-${i}`));

    const pathFileOne=path.join(__dirname,'baseFolder',`directory-${i}`,`file-${i}-1.txt`);
    const pathFileTwo=path.join(__dirname,'baseFolder',`directory-${i}`,`file-${i}-2.txt`);
    const pathFileThree=path.join(__dirname,'baseFolder',`directory-${i}`, `file-${i}-3.txt`);
    const pathFileFour=path.join(__dirname,'baseFolder',`directory-${i}`,`file-${i}-4.txt`);
    const pathFileFive=path.join(__dirname,'baseFolder',`directory-${i}`,`file-${i}-5.txt`);

    await fsPromises.writeFile(pathFileOne,`Content-file-${i}-1`);
    await fsPromises.writeFile(pathFileTwo,`Content-file-${i}-2`);
    await fsPromises.writeFile(pathFileThree,`Content-file-${i}-3`);
    await fsPromises.writeFile(pathFileFour,`Content-file-${i}-4`);
    await fsPromises.writeFile(pathFileFive,`Content-file-${i}-5`);

    console.log(pathFileOne);
    console.log(pathFileTwo);
    console.log(pathFileThree);
    console.log(pathFileFour);
    console.log(pathFileFive);

    console.log(path.join(__dirname, 'baseFolder',`directory-${i}`));

    console.log((await fsPromises.stat(pathFileOne)).isFile())
    console.log(((await fsPromises.stat(pathFileOne)).isDirectory()))

    console.log((await fsPromises.stat(pathFileTwo)).isFile());
    console.log((await fsPromises.stat(pathFileTwo)).isDirectory());

    console.log((await fsPromises.stat(pathFileThree)).isFile());
    console.log((await fsPromises.stat(pathFileThree)).isDirectory());

    console.log((await fsPromises.stat(pathFileFour)).isFile());
    console.log((await fsPromises.stat(pathFileFour)).isDirectory());

    console.log((await fsPromises.stat(pathFileFive)).isFile());
    console.log((await fsPromises.stat(pathFileFive)).isDirectory());

  }
}

void foo()


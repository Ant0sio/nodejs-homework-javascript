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
    console.log(path.join(__dirname, 'baseFolder',`directory-${i}`));
    for (j=1;j<6;j++){
      const pathFile=path.join(__dirname,'baseFolder',`directory-${i}`,`file-${i}-${j}.txt`);
      await fsPromises.writeFile(pathFile,`Content-file-${i}-${j}`);
      console.log(pathFile);
      console.log((await fsPromises.stat(pathFile)).isFile())
      console.log(((await fsPromises.stat(pathFile)).isDirectory()))
    }











  }
}

void foo()


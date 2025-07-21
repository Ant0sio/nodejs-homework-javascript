const fsPromises=require('node:fs/promises');
const path=require('node:path');
const fs = require("node:fs");


const foo= async ()=>{

  // Створити папку “baseFolder”.
//
// В ній створити 5 папок
//
// в кожній з яких створити по 5 файлів з розширенням txt.
//
//     Вивести в консоль шляхи до кожного файлу чи папки, також вивести поряд інформацію про те, чи є це файл чи папка.

  await fsPromises.mkdir(path.join(__dirname,'baseFolder'),{recursive:true});

  await fsPromises.mkdir(path.join(__dirname,'baseFolder','directory-1'),{recursive:true});
  await fsPromises.mkdir(path.join(__dirname,'baseFolder','directory-2'),{recursive:true});
  await fsPromises.mkdir(path.join(__dirname,'baseFolder','directory-3'),{recursive:true});
  await fsPromises.mkdir(path.join(__dirname,'baseFolder','directory-4'),{recursive:true});
  await fsPromises.mkdir(path.join(__dirname,'baseFolder','directory-5'),{recursive:true});

//directory-1
  const pathFileOneOne=path.join(__dirname,'baseFolder','directory-1','file-1-1.txt');
  const pathFileOneTwo=path.join(__dirname,'baseFolder','directory-1','file-1-2.txt');
  const pathFileOneThree=path.join(__dirname,'baseFolder','directory-1','file-1-3.txt');
  const pathFileOneFour=path.join(__dirname,'baseFolder','directory-1','file-1-4.txt');
  const pathFileOneFive=path.join(__dirname,'baseFolder','directory-1','file-1-5.txt');

  await fsPromises.writeFile(pathFileOneOne,'Content-file-1-1');
  await fsPromises.writeFile(pathFileOneTwo,'Content-file-1-2');
  await fsPromises.writeFile(pathFileOneThree,'Content-file-1-3');
  await fsPromises.writeFile(pathFileOneFour,'Content-file-1-4');
  await fsPromises.writeFile(pathFileOneFive,'Content-file-1-5');

  console.log(pathFileOneOne);
  console.log(pathFileOneTwo);
  console.log(pathFileOneThree);
  console.log(pathFileOneFour);
  console.log(pathFileOneFive);

  console.log(path.join(__dirname, 'baseFolder','directory-1'));

  console.log((await fsPromises.stat(pathFileOneOne)).isFile())
  console.log(((await fsPromises.stat(pathFileOneOne)).isDirectory()))

  console.log((await fsPromises.stat(pathFileOneTwo)).isFile());
  console.log((await fsPromises.stat(pathFileOneTwo)).isDirectory());

  console.log((await fsPromises.stat(pathFileOneThree)).isFile());
  console.log((await fsPromises.stat(pathFileOneThree)).isDirectory());

  console.log((await fsPromises.stat(pathFileOneFour)).isFile());
  console.log((await fsPromises.stat(pathFileOneFour)).isDirectory());

  console.log((await fsPromises.stat(pathFileOneFive)).isFile());
  console.log((await fsPromises.stat(pathFileOneFive)).isDirectory());
  ////////////////////////////////////////////////////////////////////////
  //directory 2
  const pathFileTwoOne=path.join(__dirname,'baseFolder','directory-2','file-2-1.txt');
  const pathFileTwoTwo=path.join(__dirname,'baseFolder','directory-2','file-2-2.txt');
  const pathFileTwoThree=path.join(__dirname,'baseFolder','directory-2','file-2-3.txt');
  const pathFileTwoFour=path.join(__dirname,'baseFolder','directory-2','file-2-4.txt');
  const pathFileTwoFive=path.join(__dirname,'baseFolder','directory-2','file-2-5.txt');

  await fsPromises.writeFile(pathFileTwoOne,'Content-file-2-1');
  await fsPromises.writeFile(pathFileTwoTwo,'Content-file-2-2');
  await fsPromises.writeFile(pathFileTwoThree,'Content-file-2-3');
  await fsPromises.writeFile(pathFileTwoFour,'Content-file-2-4');
  await fsPromises.writeFile(pathFileTwoFive,'Content-file-2-5');

  console.log(pathFileTwoOne);
  console.log(pathFileTwoTwo);
  console.log(pathFileTwoThree);
  console.log(pathFileTwoFour);
  console.log(pathFileTwoFive);

  console.log(path.join(__dirname, 'baseFolder','directory-2'));


  console.log((await fsPromises.stat(pathFileTwoOne)).isFile());
  console.log((await fsPromises.stat(pathFileTwoOne)).isDirectory());

  console.log((await fsPromises.stat(pathFileTwoTwo)).isFile());
  console.log((await fsPromises.stat(pathFileTwoTwo)).isDirectory());

  console.log((await fsPromises.stat(pathFileTwoThree)).isFile());
  console.log((await fsPromises.stat(pathFileTwoThree)).isDirectory());

  console.log((await fsPromises.stat(pathFileTwoFour)).isFile());
  console.log((await fsPromises.stat(pathFileTwoFour)).isDirectory());

  console.log((await fsPromises.stat(pathFileTwoFive)).isFile());
  console.log((await fsPromises.stat(pathFileTwoFive)).isDirectory());
/////////////////////////////////////////////////////////////////////////////////////
  //directory-3
  const  pathFileThreeOne=path.join(__dirname,'baseFolder','directory-3','file-3-1.txt');
  const  pathFileThreeTwo=path.join(__dirname,'baseFolder','directory-3','file-3-2.txt');
  const  pathFileThreeThree=path.join(__dirname,'baseFolder','directory-3','file-3-3.txt');
  const  pathFileThreeFour=path.join(__dirname,'baseFolder','directory-3','file-3-4.txt');
  const  pathFileThreeFive=path.join(__dirname,'baseFolder','directory-3','file-3-5.txt');

  await fsPromises.writeFile(pathFileThreeOne,'Content-file-3-1');
  await fsPromises.writeFile(pathFileThreeTwo,'Content-file-3-2');
  await fsPromises.writeFile(pathFileThreeThree,'Content-file-3-3');
  await fsPromises.writeFile(pathFileThreeFour,'Content-file-3-4');
  await fsPromises.writeFile(pathFileThreeFive,'Content-file-3-5');

  console.log(pathFileThreeOne);
  console.log(pathFileThreeTwo);
  console.log(pathFileThreeThree);
  console.log(pathFileThreeFour);
  console.log(pathFileThreeFive);

  console.log(path.join(__dirname, 'baseFolder','directory-3'));

  console.log((await fsPromises.stat(pathFileThreeOne)).isFile());
  console.log((await fsPromises.stat(pathFileThreeOne)).isDirectory());

  console.log((await fsPromises.stat(pathFileThreeTwo)).isFile());
  console.log((await fsPromises.stat(pathFileThreeTwo)).isDirectory());

  console.log((await fsPromises.stat(pathFileThreeThree)).isFile());
  console.log((await fsPromises.stat(pathFileThreeThree)).isDirectory());

  console.log((await fsPromises.stat(pathFileThreeFour)).isFile());
  console.log((await fsPromises.stat(pathFileThreeFour)).isDirectory());

  console.log((await fsPromises.stat(pathFileThreeFive)).isFile());
  console.log((await fsPromises.stat(pathFileThreeFive)).isDirectory());
  ///////////////////////////////////////////////////////////////////////////////////////////
  //directory-4
  const pathFileFourOne=path.join(__dirname,'baseFolder','directory-4','file-4-1.txt');
  const pathFileFourTwo=path.join(__dirname,'baseFolder','directory-4','file-4-2.txt');
  const pathFileFourThree=path.join(__dirname,'baseFolder','directory-4','file-4-3.txt');
  const pathFileFourFour=path.join(__dirname,'baseFolder','directory-4','file-4-4.txt');
  const pathFileFourFive=path.join(__dirname,'baseFolder','directory-4','file-4-5.txt');

  await fsPromises.writeFile(pathFileFourOne,'Content-file-4-1')
  await fsPromises.writeFile(pathFileFourTwo,'Content-file-4-2')
  await fsPromises.writeFile(pathFileFourThree,'Content-file-4-3')
  await fsPromises.writeFile(pathFileFourFour,'Content-file-4-4')
  await fsPromises.writeFile(pathFileFourFive,'Content-file-4-5')

  console.log(pathFileFourOne)
  console.log(pathFileFourTwo)
  console.log(pathFileFourThree)
  console.log(pathFileFourFour)
  console.log(pathFileFourFive)

  console.log(path.join(__dirname, 'baseFolder', 'directory-4'));

  console.log((await fsPromises.stat(pathFileFourOne)).isFile());
  console.log((await fsPromises.stat(pathFileFourOne)).isDirectory());

  console.log((await fsPromises.stat(pathFileFourTwo)).isFile());
  console.log((await fsPromises.stat(pathFileFourTwo)).isDirectory());

  console.log((await fsPromises.stat(pathFileFourThree)).isFile());
  console.log((await fsPromises.stat(pathFileFourThree)).isDirectory());

  console.log((await fsPromises.stat(pathFileFourFive)).isFile());
  console.log((await fsPromises.stat(pathFileFourFive)).isDirectory());
  ////////////////////////////////////////////////////////////////////////////////////
  //directory-5
  const pathFileFiveOne=path.join(__dirname,'baseFolder','directory-5','file-5-1.txt');
  const pathFileFiveTwo=path.join(__dirname,'baseFolder',"directory-5",'file-5-2.txt');
  const pathFileFiveThree=path.join(__dirname,'baseFolder','directory-5','file-5-3.txt');
  const pathFileFiveFour=path.join(__dirname,'baseFolder','directory-5','file-5-4.txt');
  const pathFileFiveFive=path.join(__dirname,'baseFolder','directory-5','file-5-5.txt');

  await fsPromises.writeFile(pathFileFiveOne,'Content-file-5-1');
  await fsPromises.writeFile(pathFileFiveTwo,'Content-file-5-2');
  await fsPromises.writeFile(pathFileFiveThree,'Content-file-5-3');
  await fsPromises.writeFile(pathFileFiveFour,'Content-file-5-4');
  await fsPromises.writeFile(pathFileFiveFive,'Content-file-5-5');

  console.log(pathFileFiveOne);
  console.log(pathFileFiveTwo);
  console.log(pathFileFiveThree);
  console.log(pathFileFiveFour);
  console.log(pathFileFiveFive);

  console.log(path.join(__dirname, 'baseFolder', 'directory-5'));

  console.log((await fsPromises.stat(pathFileFiveOne)).isFile());
  console.log((await fsPromises.stat(pathFileFiveOne)).isDirectory());

  console.log((await fsPromises.stat(pathFileFiveTwo)).isFile());
  console.log((await fsPromises.stat(pathFileFiveTwo)).isDirectory());

  console.log((await fsPromises.stat(pathFileFiveThree)).isFile());
  console.log((await fsPromises.stat(pathFileFiveThree)).isDirectory());

  console.log((await fsPromises.stat(pathFileFiveFour)).isFile());
  console.log((await fsPromises.stat(pathFileFiveFour)).isDirectory());

  console.log((await fsPromises.stat(pathFileFiveFive)).isFile());
  console.log((await fsPromises.stat(pathFileFiveFive)).isDirectory());

}

void foo()


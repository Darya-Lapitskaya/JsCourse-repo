/*
Steps:
1. Initiated project &created main.js file
2. Installed fs-extra using 'npm i fs-extra' command
3. Installed prompt-sync using 'npm install prompt-sync' command
4. Wrote code.
5. Run code using 'node main' command
*/

const fs = require('fs-extra')
const prompt = require('prompt-sync')();
const dir1 = prompt('Please enter a name for the first folder...');
fs.emptyDirSync(dir1) //create the first folder
const fileName = prompt('Please enter a name for the file to be created (with .txt extention)...');
fs.ensureFileSync(dir1+'/'+fileName) // create the file
const dir2 = prompt('Please enter a name for the second folder...');
fs.emptyDirSync(dir2) //create the second folder
fs.moveSync(dir1+'/'+fileName, dir2+'/'+fileName) //move file from the first folder to the second one
fs.emptyDirSync(dir2) //delete the file by deletion of the content of the second folder
fs.removeSync(dir1) //delete the first folder
fs.removeSync(dir2) //delete the second folder
console.log('In the branch2');



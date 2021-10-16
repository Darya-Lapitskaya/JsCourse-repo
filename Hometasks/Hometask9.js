const fs = require('fs-extra')
const prompt = require('prompt-sync')();

function Task() {
    const dir1 = prompt('Please enter a name for the first folder...');
    fs.emptyDir(dir1, () => {
        const fileName = prompt('Please enter a name for the file to be created (with .txt extention)...');
        fs.ensureFile(dir1 + '/' + fileName, () => {
            const dir2 = prompt('Please enter a name for the second folder...');
            fs.emptyDir(dir2, () => {
                fs.move(dir1 + '/' + fileName, dir2 + '/' + fileName, () => {
                    fs.emptyDir(dir2, () => {
                        fs.remove(dir1, () => {
                            fs.remove(dir2, () => {

                            })
                        })
                    })
                })

            })
        })
    });
}

Task();
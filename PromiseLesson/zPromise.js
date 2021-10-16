let condition = false;
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (condition) {
//             resolve('success');
//         } else {

//             reject('failure');
//         }
//     }, 500);
// })

function getResult(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condition) {
                resolve(result);
            } else {
                reject('failure');
            }
        }, 500);
    })
}

getResult(15)
    .then((x) => getResult(x * 3))
    .then((x3) => console.log(x3), (err) => {
        throw new Error(err);
     })
    .then(() => {
        condition = true;
        return getResult(10);
    })
    .then((x) => console.log(x))
    .catch((err) => console.log(err))




//p.then((result) => console.log(result), (reject) => console.log(reject))

// p
//     .then((result) => console.log(result))
//     .then(() =>)
//     .catch((reject) => console.log(reject))

// console.log(p);

// setTimeout(()=>{
//     console.log(p);
// }, 1000)
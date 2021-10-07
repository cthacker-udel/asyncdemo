const p = new Promise((resolve,reject) => {
    // database, timer
    setTimeout(() => {
        //resolve(1);
        reject(new Error('Error occured'));
    },2000);

    //reject(new Error('Error occured'));
});

p
.then(result => console.log('Result ',result))
.catch(err => console.log(err.message));
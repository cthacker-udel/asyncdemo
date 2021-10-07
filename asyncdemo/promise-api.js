const p = Promise.resolve(1);
p.then(result => console.log(result));

const r = Promise.reject(new Error('failed'));
r.catch(e => console.log(e.message));

const p1 = new Promise((resolve,reject) => {

    setTimeout(() => {
        console.log('Async operation 1...');
        reject(new Error('The error happened'));
    },3000);

});

const p2 = new Promise((resolve,reject) => {

    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    },1000);

});

Promise.race([p1,p2])
.then(result => console.log(result))
.catch(err => console.log(err));
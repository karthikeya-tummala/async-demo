const p1 = new Promise((reject) => {
    setTimeout(() => {
        console.log('Async Operation 1');
        reject(new Error('Failed to run'));
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation 2');
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('error', err.message));
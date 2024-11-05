const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1);
        reject(new Error('message'));
    }, 1000);
});

p
    .catch(err => console.log(err.message))
    .then(result => console.log(result));


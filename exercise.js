// Async function
async function notifyCustomer(){
    try{
        const customer = await getCustomer(1);
        console.log('Customer:', customer);
        if(customer.isGold){
            const movies= await getTopMovies();
            console.log('Top Movies:', movies);
            await sendEmail(customer.email, movies);
            console.log(`Mail sent to ${customer.name} successfully!!!`);
        }
    }
    catch(err){
        console.log('Error:', err.message);
    }
}

function  getCustomer(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: 'Karthik',
                isGold: true,
                email: 'email'
            });
        }, 2000);
    });
}

function getTopMovies(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve([
                'Avengers 1',
                'Avengers: Civil War',
                'Avengers: Age of Ultron',
                'Avengers: Infinity War',
                'Avengers: Endgame'
        ]);
        }, 2000);
    });
}

function sendEmail(mailId, movies){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}

notifyCustomer();
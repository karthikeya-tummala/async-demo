getCustomer(1, (customer) => {
    console.log('Customer:', customer);
    if(customer.isGold) {
        getTopMovies((movies) => {
            console.log('Movies:', movies);
            sendEmail(customer.email, movies, () => {
                console.log('Email sent successfully');
            });
        });
    }
});


function  getCustomer(id, callback){
    setTimeout(() => {
    const customer = {
        id: id,
        name: 'Karthik',
        isGold: true,
        email: 'email'
    }
    callback(customer);
    }, 2000);
}

function getTopMovies(callback){
    setTimeout(() => {
    const movies =
        [
            'Avengers 1',
            'Avengers: Civil War',
            'Avengers: Age of Ultron',
            'Avengers: Infinity War',
            'Avengers: Endgame'
        ];
    callback(movies);
    }, 2000);
}

function sendEmail(mailId, movies, callback){
    setTimeout(() => {
        callback();
    }, 1000);
}













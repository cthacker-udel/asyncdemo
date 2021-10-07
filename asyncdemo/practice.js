
async function getCustomerData(){
    const result = await getCustomer(1);
    console.log('Customer : ',result);
    if(result.isGold){
        const topMovies = await getTopMovies();
        console.log('Top movies : ',topMovies);
        const emailRes = await sendEmail(result.email,topMovies);
    }
}

getCustomerData();

  
function getCustomer(id) {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({id: 1, name: "Most Hamedani", isGold: true, "email": 'email'});
        },4000);
    })
}

function getTopMovies() {

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            resolve(['movie1','movie2']);
        },4000);
    });
}
  
function sendEmail(email, movies) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Email sent...');
            resolve();
        }, 4000);
    });
}
/* // async in front of a function makes the return a Promise
async function myFunc() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hey'), 1000);
    });

    const error = false;

    if(!error){
        const res = await promise; // waiting until the promise is resolved
        return res;
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }
}

myFunc()
// res = response
    .then(res => console.log(res))
    .catch(err => console.log(err)); */


// Using a better example w/Fetch
async function getUsers() {
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceed once promise is resolved
    const data = await response.json();

    // only proceed once second pomise is resolved
    return data;
}

getUsers().then(users => console.log(users));

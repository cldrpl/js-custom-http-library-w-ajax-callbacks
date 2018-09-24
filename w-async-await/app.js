const http = new EasyHTTP;

/* // Get Users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(error)); */

// Create User Data
const data = {
    name: 'Alex Smith',
    username: 'asmith',
    email: 'asmith@gmail.com',
}

// Create User, get pulls the first 10, this new post is id # 11
/* http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(error => console.log(error)); */

// Update Post, had to add to users/2 to update or it had a 404 error
/* http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(error => console.log(error)); */

//  Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(error => console.log(error));
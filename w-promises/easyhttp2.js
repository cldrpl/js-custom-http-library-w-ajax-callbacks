// EasyHTTP Library version 2
// more modern w/E6, fetch API, promises

class EasyHTTP {
    // Make an HTTP GET Request
    get(url) {
        return new Promise((resolve, reject) =>  {
            fetch(url)
            .then(response => response.json())
            .then(data =>  resolve(data))
            .catch(error => reject(error));
        });
    }

    // Make an HTTP POST request
    post(url, data) {
        return new Promise((resolve, reject) =>  {
            // Req for Post
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data =>  resolve(data))
            .catch(error => reject(error));
    });

    }

    // Make an HTTP PUT request
    put(url, data) {
        return new Promise((resolve, reject) =>  {
            // Req for Post
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data =>  resolve(data))
            .catch(error => reject(error));
    });

    }

    // Make a HTTP DELETE request, only needs URL
    delete(url) {
        return new Promise((resolve, reject) =>  {
            // Req for Post
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(() =>  resolve('Resource was deleted'))
            .catch(error => reject(error));
    });

    }
}

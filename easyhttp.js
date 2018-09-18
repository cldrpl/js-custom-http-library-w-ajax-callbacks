function easyHTTP() {
    // this instead of xhr
    this.http = new XMLHttpRequest();
}

// make an HTTP GET request
// passing in URL to use library and avoid hard coding it
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    // can work w/an arrow function in place of 
    // function below, not at that point yet
    // below so that it is in scope
    let self = this;
    this.http.onload = function() {
        // self instead of this
        if(self.http.status === 200) {
            // null is checking for an error first
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}

// make an HTTP POST request
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
            // new Post that we are adding
            // ID check to verify value of 101 from API
            callback(null, self.http.responseText);
        }

    this.http.send(JSON.stringify(data));
    }


// make an HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
            callback(null, self.http.responseText);
        }

    this.http.send(JSON.stringify(data));
    }

// make an HTTP DELETE request / similiar to GET
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            // response is empty object since deleting the post
            callback(null, 'Post was deleted');
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}


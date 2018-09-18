const http = new easyHTTP;

// GET Posts - from JSON placeholder example page
// change to async w/ easyHTTP's new callback

// w/the library its a lot easier, don't have to do http open, onload
// status checks
/* http.get('https://jsonplaceholder.typicode.com/posts',
 function(err, posts) {
     if(err) {
        console.log(err);
     } else {
        console.log(posts);
     }
     console.log(posts)
 });
 */

/*  // Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1',
function(err, post) {
    if(err) {
       console.log(err);
    } else {
       console.log(post);
    }
}); */

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post',
};

// Create Post /  function acts as the callback
/*  http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
   if(err) {
     console.log(err);
   } else {
     console.log(post);
   }
}); */

/* // Create Put
http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
    if(err) {
        console.log(err);
      } else {
        console.log(post);
      }
}) */

// Create Delete
http.delete('https://jsonplaceholder.typicode.com/posts/1',
 function(err, response) {
     if(err) {
        console.log(err);
     } else {
        console.log(response);
     }
 });

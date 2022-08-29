///import fetch from 'node-fetch'; // Hanya untuk melihat data dari terminal

// Dengan async/await, kita sudah dapat menjalankan kode asynchronous dengan gaya synchronous.

(async () => { // pada Top level await, bisa tanpa async 
    const res = await fetch('https://fake-tweets-api.herokuapp.com/posts');
    const tweets = await res.json();
    let tweetAuthor = tweets.map(tweet => tweet.author).join('\n');
    console.log(tweetAuthor);
})() // IIFE (Immediately Invoked Function Expression)


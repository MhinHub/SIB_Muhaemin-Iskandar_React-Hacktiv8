import fetch from 'node-fetch'; // Hanya untuk melihat data dari terminal
import colors from 'colors'; // Hanya untuk menampilkan warna di terminal
colors.enable();

fetch('https://fake-tweets-api.herokuapp.com/posts')
    .then(response => response.json())
    .then(tweetAuthor => console.log(tweetAuthor.map(tweet => tweet.author).join('\n').bold.yellow))
    .catch(error => console.error(error))


// New Promise
const doSomething = () => {
    return new Promise((resolve, reject) => {
        //Todo
    }
    )
}

doSomething()
    .then(res => {
        //Todo
    })
    .catch(err => {
        //Todo
    }
    )

// Contoh

const setTimeoutPromise = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    }
    )
}

setTimeoutPromise(2000).then(() => console.log('Done'.bold))

//** Destructuring Object, This Keyword, Arrow Function, Functional Javascript **//


// DESTRUCTURING OBJECT


/* Dot notation:
const user = {};
user.name = 'Muhaemin Iskandar'';
user.location = 'Makassar';

// Extraction
const name = user.name;
const location = user.location;
*/

/* Literal notation:
const user = {
    name: 'Muhaemin Iskandar',
    location: 'Makassar'
}

// Extraction
const name = user.name;
const location = user.location;

// Destructuring
const { name, location } = user;
*/

// Destructuring function 
const getUser = () => {
    return {
        name: 'Muhaemin Iskandar',
        location: 'Makassar'
    }
}

// Extraction
const { name, location } = getUser();


// Destructuring array
const cth = ['Muhaemin Iskandar, Makassar'];
// const [nameArr, locationArr] = cth.split(',');

// Aliasing Object props
const user = {
    name: 'Muhaemin Iskandar',
    location: 'Makassar'
}

const { name: n, location: l } = user;


// This Keyword
function changeColor(){
    this.style.backgroundColor = 'red'; //this === window
}

$('button').click((e, t) => {
    this.style.backgroundColor = 'red'; // this === button(s)
})


// 

function person1(){
    this.age = 0;
    setInterval(function()  {
        this.age++;
        console.log(this.age);
    }.bind(this), 1000); //bind
}

function person2(){
    this.age = 0;
    setInterval(() => { //arrarrow function
        this.age++;
        console.log(this.age);
    }
    , 1000);
}

// const p = new person2(); 
// person();



// Filter
const animals = [
    { name: 'Kucing', type: 'cat' },
    { name: 'Anjing', type: 'dog' },
    { name: 'Kelinci', type: 'bear' },
]

const kucing =[];
for (let i = 0; i < animals.length; i++) {
    if (animals[i].type === 'cat') {
        kucing.push(animals[i]);
    }
}

const cat = animals.filter(animal => animal.type === 'cat');

console.log("Filter: "+cat);


// Map


// const names = [];
// for (let i = 0; i < animals.length; i++) {
//     names.push(animals[i].name);
// }


const names = animals.map(animal => animal.name);

console.log('Map:'+ names);


// Reduce
// const total = 0;
// for (let i = 0; i < animals.length; i++) {
//     total += animals[i].name.length;
// }

const total = animals.reduce((total, animal) => total + animal.name.length, 0);

// Filter array - task
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: true }
        ]
    },
]

// const present = videoData.filter(video => video.present);

let pres = videoData.filter(({ present }) => present);

// console.log(present);

console.log(pres);


function add(a , b) {
    return a + b;
}

function subtract(a , b) {
    return a - b;
}

function multiply(a , b) {
    return a * b;
}

function divide(a , b) {
    return a / b;
}


// implicit return
// function add = (a , b) => a + b;
// function subtract = (a , b) => a - b;
// function multiply = (a , b) => a * b;
// function divide = (a , b) => a / b;

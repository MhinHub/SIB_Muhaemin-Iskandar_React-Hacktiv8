function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        if (typeof arr !== 'object') {
            reject('Input must be an array')
        }
        const newArr = arr.map(word => String(word).toUpperCase())
        resolve(newArr)
    }
    )
}

function sortWords(arr) {
    return new Promise((resolve, reject) => {
        if (typeof arr !== 'object') {
            reject('Input must be an array')
        }
        const newArr = arr.sort()
        resolve(newArr)
    }
    )
}

const arrOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArr = ['cucumber', 44, true]

makeAllCaps(arrOfWords)
    .then(sortWords)
    .then(console.log)
    .catch(console.log)

makeAllCaps(complicatedArr)
    .then(sortWords)
    .then(console.log)
    .catch(console.log)



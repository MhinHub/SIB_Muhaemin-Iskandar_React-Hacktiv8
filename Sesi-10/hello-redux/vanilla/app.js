const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        default:
            return state
    }
}

const store = Redux.createStore(counter)

const render = () => {
    document.getElementById('counter').innerHTML = store.getState().counter.toString()
}

render()
store.subscribe(render)

let increment = document.getElementById('increment')
let decrement = document.getElementById('decrement')

increment.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' })
})

decrement.addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' })
})

import Redux from 'redux'

const { createStore } = Redux

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 }
        case 'DECREMENT':
            return { counter: state.counter - 1 }
        default:
            return state
    }
}


let store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })



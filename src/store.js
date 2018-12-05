import { createStore, combineReducers } from 'redux'

const reducer1 = () => {
    return {
        name: 'Ala'
    }
}

const reducer2 = () => {
    return {
        name: 'Ola'
    }
}

const rootReducer = combineReducers({
    reducer1,
    reducerWithoutShortcut: reducer2
})


export const store = createStore(
    rootReducer
)

console.log(store)
console.log(store.getState())
console.log(rootReducer)

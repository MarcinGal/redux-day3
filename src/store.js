import { createStore } from 'redux'

const reducer = () => {
    return {
        name: 'Ala'
    }
}


export const store = createStore(
reducer
)

console.log(store)
console.log(store.getState())

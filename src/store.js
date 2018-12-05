import { createStore, combineReducers } from 'redux'
import  counter from './state/counter'


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
    reducerWithoutShortcut: reducer2,
    counter
})


export const store = createStore(
    rootReducer
)

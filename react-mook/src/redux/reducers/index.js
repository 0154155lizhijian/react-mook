import { ADD, DEL } from '../actionType'

const defaultState = 0
export function counter(state = defaultState, action) {
    switch (action.type) {
        case ADD:
            return state + 1
        case DEL:
            return state - 1
        default:
            return 10
    }
}


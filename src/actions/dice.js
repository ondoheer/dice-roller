import * as DieActions from '../actionTypes/dice';

export const addDie = () => {
    return {
        type: DieActions.ADD_DIE
    }
}

export const removeDie = index => {
    return {
        type: DieActions.REMOVE_DIE,
        index // this is equal to index: index
    }
}

export const rollDie = index => {
    console.log("roll die clicked");
    return {
        type: DieActions.ROLL_DIE,
        index
    }
}
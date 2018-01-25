import * as DieActions from '../actionTypes/dice';

export const addDie = () => {
    return {
        type: DieActions.ADD_DIE
    }
}

export const removeDie = index => {
    
    return {
        type: DieActions.REMOVE_DIE,
        index 
    }
}

export const rollDie = (index, sides) => {
    
    return {
        type: DieActions.ROLL_DIE,
        index,
        sides
    }
}

export const updateSides = (index, sides) =>{
    return {
        type: DieActions.CHANGE_DIE_SIDES,
        index,
        sides
    }
}

export const updateDiceCount = (number) =>{
    return {
        type: DieActions.UPDATE_DICE_COUNT,
        number
    }
}

export const rollAllDice = () =>{
    return {
        type: DieActions.ROLL_ALL
    }
}
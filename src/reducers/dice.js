import * as DieActions from '../actionTypes/dice';

import {createDie, rollDie} from '../helpers/dice';

const initialState = [
    {
        value: 12,
        roll: null
    }, {
        value: 20,
        roll: null
    }, {
        value: 10,
        roll: null
    }
];

export default function(state=initialState, action){
    switch(action.type){
        case DieActions.ADD_DIE:
            let die = createDie();
            return [
                ...state,
                die
            ];

        case DieActions.REMOVE_DIE:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];

        case DieActions.ROLL_DIE:
            return state.map((die, index) => {
                if(index === action.index){
                    return {
                        ...die,
                        roll: rollDie(action.index)
                    }
                }
                return die;
            });
        
        default:
            return state;
    }
}
import * as DieActions from '../actionTypes/dice';
import {range} from 'lodash';
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
                        roll: rollDie(die.value)
                    }
                }
                return die;
            });
        
        case DieActions.CHANGE_DIE_SIDES:
            return state.map((die, index) => {
                if(index === action.index){
                    return {...die,
                            value: action.sides
                    }
                }
                return die;
            });

        case DieActions.UPDATE_DICE_COUNT:
            
            if(action.number > state.length){ // add more dice
                let toAdd = action.number - state.length;
                let newDice = range(0, toAdd).map(() => createDie());               

                return [
                    ...state,
                    ...newDice
                ];
            } else if (action.number < state.length){ // remove extra dice
                return [...state.slice(0, action.number)];
            }
            break;

        case DieActions.ROLL_ALL:
            
            return state.map((die) => {
                if(!die.roll){
                    return {
                        ...die,
                        roll: rollDie(die.value)
                    }
                } 
                return die;
            })
            
            
        default:
            return state;
    }
}
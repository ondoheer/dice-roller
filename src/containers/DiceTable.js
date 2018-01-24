import React from 'react';

// components

import DiceSelectorForm from '../components/DiceSelectorForm';
import RollsResults from '../components/RollsResults';

const DiceTable = (props)=> {

    return (

        <table>
            
            <tbody>
            <tr>
                <th>Dice</th>
                <th>Results</th>
                <th>Remove Dice</th>
            </tr>
            {props.dice.map((dice, index) => 
            
                <DiceSelectorForm dice={dice} key={index} index={index} 
                        handleRemove={() => props.removeDiceAt(index)}
                        handleDiceSides={(evt) => props.changeDiceSidesAt(evt, index)}
                        handleRoll={() => props.rollDie(index)}
                        
                 />
            )}
            
            <RollsResults total={props.total} />
            </tbody>
        </table>
    )
}

export default DiceTable;
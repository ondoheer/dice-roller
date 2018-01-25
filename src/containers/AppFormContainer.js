import React from 'react';

import DiceForm from '../components/DiceForm';
const AppFormContainer = (props )=> {

    return (
        <header className="container-header">
        
            <DiceForm diceLength={props.dice.length} 
                        addNewDie={props.addNewDie} 
                        updateDiceCount={props.updateDiceCount}
                        />
            <button onClick={props.rollAll}
                    disabled={props.dice.filter((die)=> die.roll === null ).length === 0 ? true: false}>Roll them all!</button>   
            
        </header>
    );
}

export default AppFormContainer;
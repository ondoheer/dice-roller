import React from 'react';

import DiceForm from '../components/DiceForm';
const AppFormContainer = (props )=> {

    return (
        <header className="container-header">
        
            <DiceForm dice={props.dice} 
                        addNewDice={props.addNewDice} 
                        updateDiceCount={props.updateDiceCount}
                        />
            <button onClick={props.rollAll}
                    disabled={props.unrolled.length === 0 ? true: false}>Roll them all!</button>   
            
        </header>
    );
}

export default AppFormContainer;
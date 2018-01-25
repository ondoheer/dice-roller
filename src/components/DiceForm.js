import React from 'react';

const DiceForm = (props) => {

    return (
        <div className="dice-form"  >
            <label htmlFor="number-dice">Select the number of dices you want to roll</label>
            <input onChange={(evt)=>props.updateDiceCount(evt.target.value)} type="number" name="number-dice" value={props.diceLength}/>
            <span>or add them one by one</span>
            <button onClick = {() => props.addNewDie()} className="select-dice-submit" type="submit">Add Die</button>
        </div>
    );
}

export default DiceForm;
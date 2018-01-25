import React from 'react';

const DiceSelectorForm = (props) => {
    

    return (

        <tr>
            <td className="dice">
                
                    <label htmlFor={props.index}># Sides</label>
                    <select name={`dice-selector-${props.index}`} id={props.index}
                                                    className="dice-selector"
                                                    disabled={!props.die.roll ? false : true}
                                                    onChange={props.handleDiceSides}
                                                    value={props.die.value}
                                                    >
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="20">20</option>
                    </select>
                <button className="dice-roller"
                            onClick={() => props.rollDie(props.index, props.die.value)}
                            disabled={!props.die.roll ? false : true} >Roll</button>
                
            </td>
            <td className="dice-result">
                {!props.die.roll ? "": props.die.roll}
            </td>
            <td>
                <button disabled={!props.die.roll ? false : true} className="removeDice" onClick={() => props.removeDie(props.index)} >Remove Die</button>
            </td>
        </tr>
    )
}

export default DiceSelectorForm;
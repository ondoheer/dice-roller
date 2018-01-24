import React from 'react';

const DiceSelectorForm = (props) => {
    

    return (

        <tr>
            <td className="dice">
                
                    <label htmlFor={props.index}>Select dice type</label>
                    <select name={`dice-selector-${props.index}`} id={props.index}
                                                    className="dice-selector"
                                                    disabled={!props.dice.roll ? false : true}
                                                    onChange={props.handleDiceSides}
                                                    value={props.dice.value}
                                                    >
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="20">20</option>
                    </select>
                <button className="dice-roller"
                            onClick={props.handleRoll}
                            disabled={!props.dice.roll ? false : true} >Roll</button>
                
            </td>
            <td className="dice-result">
                {!props.dice.roll ? "": props.dice.roll}
            </td>
            <td>
                <button disabled={!props.dice.roll ? false : true} className="removeDice" onClick={props.handleRemove} >Remove Dice</button>
            </td>
        </tr>
    )
}

export default DiceSelectorForm;
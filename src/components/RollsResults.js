import React from 'react';

const RollsResults = (props) => {

    return (
        <tr className="result-total">
            <td>Total</td>
            <td >{props.total}</td>
        </tr>
    );
}

export default RollsResults;
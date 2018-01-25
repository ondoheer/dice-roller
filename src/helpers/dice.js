export const createDie = (sides = 6) => {
    return { value: sides, roll: null }
}

export const rollDie = (index) => {

    let sides = this.state.dice[index].value;
    let result = Math.floor(Math.random() * (sides - 1 + 1)) + 1;
    return result;
}

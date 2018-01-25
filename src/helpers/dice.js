export const createDie = (sides = 6) => {
    return { value: sides, roll: null }
}

export const rollDie = (sides) => {

    let result = Math.floor(Math.random() * (sides - 1 + 1)) + 1;
    return result;
}

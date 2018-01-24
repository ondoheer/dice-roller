import React, { Component } from 'react';
import update from 'immutability-helper';



// Components
import BrandHeader from './components/BrandHeader';
import AppFormContainer from './containers/AppFormContainer';
import DiceTable from './containers/DiceTable';

class App extends Component {

  BASIC_DICE = { // dice template used for populating the dice forms
    value:6,
    roll:null
  }

  state = {
    total: 0,
    dice: [
      {
        value: 12,
        roll: null
      },{
        value:20,
        roll:null
      },{
        value:10,
        roll:null
      }
    ]
  }

  createDie = (sides=6) => {
    return {value: sides, roll:null}
  }

  // Add new die
  addNewDice = () => {    
       
    let newState = update(this.state, {
      dice: {$push: [this.createDie()]}
    });   

    this.setState(newState);
  }

  // udating from the form field
  updateDiceCount = (evt) => {
    
    let newLength = evt.target.value;
  
    if(newLength > this.state.dice.length){
        let toAdd = newLength - this.state.dice.length;
        let newDice = [];
        for(let i = 0; i < toAdd; i++){
          newDice.push(this.createDie())
        }
        
        this.setState({
          dice: this.state.dice.concat(newDice)
        })



    } else if (newLength < this.state.dice.length){
        this.setState({dice:this.state.dice.slice(0, newLength)}); // this is immutable by default
    } 
  }

  // remove whole dice interface (table row)
  removeDiceAt = (index) =>{
    
    let nextState = update(this.state.dice, {$splice: [[index, 1]]} );

    this.setState({dice: nextState});
    
  }

  changeDiceSidesAt = (evt, index) => {

    let nextState = update(this.state.dice, {
            [index]: {value: {$set: evt.target.value}}
    });

    this.setState({dice: nextState});
  }

  rollDie = (index) => {

    let sides = this.state.dice[index].value;
    let result = Math.floor(Math.random() * (sides - 1 + 1)) + 1;
    return result;
    

    
  }

  setNewRollResult = (index) =>{

    let result = this.rollDie(index);
    let diceState = update(this.state.dice, {
      [index]: { roll: { $set: result } }
    });


    this.setState({
      dice: diceState,
      total: this.state.total + result
    });
  }

  rollAllUnrolledDice = () => {
    let unRolledDice = this.unRolledDice();
    let rolledDice = unRolledDice.map((die, index) => {
        die.roll = this.rollDie(index);
        return die;
    });

    return rolledDice;
    
  }
  
  rollAndAddAllDice = () => {
    let diceNotToRoll = this.rolledDice();
    
    let newlyRolledDice = this.rollAllUnrolledDice();
    let newTotal = this.state.total + newlyRolledDice.reduce((total, dice) => total + dice.roll, 0);
    
    
    let updatedDice = [...diceNotToRoll, ...newlyRolledDice];


    this.setState({dice:updatedDice, total: newTotal});

  }

  unRolledDice = () => this.state.dice.filter((die) => die.roll === null);
  rolledDice = () => this.state.dice.filter((die) => die.roll !== null);

  

  render() {
    return (
      <div className="App main-container">
        <BrandHeader  />
        <AppFormContainer 
                          dice={this.state.dice}
                          addNewDice={this.addNewDice}
                         updateDiceCount={this.updateDiceCount}
                          rollAll={this.rollAndAddAllDice}
                        unrolled={this.unRolledDice()}
                          />
        <DiceTable dice={this.state.dice} 
                    removeDiceAt={this.removeDiceAt}
                    changeDiceSidesAt={this.changeDiceSidesAt}
                    rollDie={this.setNewRollResult}
                    total={this.state.total}
                     />
      </div>
    );
  }
}

export default App;

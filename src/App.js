import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as DiceActionCreators from './actions/dice';


// Components
import BrandHeader from './components/BrandHeader';
import AppFormContainer from './containers/AppFormContainer';
import DiceTable from './containers/DiceTable';


class App extends Component {



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

    // unpacking of the props added by the mapStateToProps function
    const {dispatch, dice, total} = this.props;

    // bind action creators
    const addDie = bindActionCreators(DiceActionCreators.addDie, dispatch);
    const removeDie = bindActionCreators(DiceActionCreators.removeDie, dispatch);
    const rollDie = bindActionCreators(DiceActionCreators.rollDie, dispatch);
    const changeDieSide = bindActionCreators(DiceActionCreators.updateSides, dispatch);
    const updateDiceCount = bindActionCreators(DiceActionCreators.updateDiceCount, dispatch);

    const rollAll = bindActionCreators(DiceActionCreators.rollAllDice, dispatch);

    return (
      <div className="App main-container">
        <BrandHeader  />
        <AppFormContainer 
                          dice={dice}
                          addNewDie={addDie}
                         updateDiceCount={updateDiceCount}
                          rollAll={rollAll}
                        unrolled={this.unRolledDice()}
                          />
        <DiceTable dice={dice} 
                    removeDie={removeDie}
                    changeDieSide={changeDieSide}
                    rollDie={rollDie}
                    total={total}
                     />
      </div>
    );
  }
}

const result = (dice) => {
  let total =  dice.reduce((total, dice) => total + dice.roll, 0);
  console.log(total);
  return total;
}


const mapStateToProps = state => (
  {
    dice: state,
    total: result(state)
  }
)


export default connect(mapStateToProps)(App);

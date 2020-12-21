import React from 'react';
import Button from '../ControlPanel/UI/Button/Button';
<<<<<<< HEAD
=======
import colors from '../../assets/colors';
>>>>>>> working-version
import classes from './ControlPanel.module.css';

const controlPanel = (props) => { 
  return(
<<<<<<< HEAD
    <div className={classes.SortAndPanel}>
      <Button click={props.sortClicked}>Sort</Button>
=======
    <Aux>
>>>>>>> working-version
      <div className={classes.Panel}>
        <Button click={props.sortClicked}>Sort</Button>
        <hr />
        <div className={classes.AlgoBtn}>
          <Button 
            active={props.currentAlgo === 'selection'}
            click={props.selectionClicked}>Selection Sort</Button>
          <Button 
            active={props.currentAlgo === 'bubble'}
            click={props.bubbleClicked}>Bubble Sort</Button>
          <Button 
            active={props.currentAlgo === 'insertion'}
            click={props.insertionClicked}>Insertion Sort</Button>
          <Button 
            active={props.currentAlgo === 'simple'}
            click={props.simpleClicked}>Simple Sort</Button>
        </div>
        <hr />
        <div className={classes.InputDiv}>
          <label>Array:</label>
          <input className={classes.Input} />
        </div>
        <div className={classes.BottomPanel}>
          <div className={classes.BottomLeft}>
<<<<<<< HEAD
            <Button click={props.randomize}>Randomize Array</Button>
=======
            <Button click={props.randomClicked}>Randomize Array</Button>
>>>>>>> working-version
          </div>
          <div className={classes.BottomRight}>
            <label>Sort Speed: </label>
            <input 
              min='0' max='1000'
              step='50'
              type='range' 
              onChange={event => props.changeSpeed(event.target.value)}
              className={classes.slider}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default controlPanel;

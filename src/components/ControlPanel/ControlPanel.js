import React from 'react';
import Button from '../ControlPanel/UI/Button/Button';
import classes from './ControlPanel.module.css';

const controlPanel = (props) => { 
  return(
    <div className={classes.SortAndPanel}>
      <Button click={props.sortClicked}>Sort</Button>
      <div className={classes.Panel}>
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
            <Button click={props.randomize}>Randomize Array</Button>
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

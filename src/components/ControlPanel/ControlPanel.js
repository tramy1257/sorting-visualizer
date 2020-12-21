import React from 'react';
import Button from '../ControlPanel/UI/Button/Button';
import classes from './ControlPanel.module.css';

const controlPanel = (props) => { 
  return(
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
          <input className={classes.Input}/>
        </div>
        <div className={classes.BottomPanel}>
          <div className={classes.BottomLeft}>
            <Button click={props.randomClicked}>Randomize Array</Button>
          </div>
          <div className={classes.VerticalLine}></div>
          <div className={classes.BottomRight}>
            <div className={classes.SliderAndLabel}>
              <label>Sorting Speed: </label>
              <input 
                min='0' max='500'
                step='10'
                type='range' 
                onChange={event => props.changeSpeed(event.target.value)}
                className={classes.slider}/>
            </div>
            <div className={classes.SliderAndLabel}>
              <label>Random Array Size: </label>
              <input 
                min='5' max='50'
                step='5'
                type='range' 
                onChange={event => props.changeArrSize(event.target.value)}
                className={classes.slider}/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default controlPanel;

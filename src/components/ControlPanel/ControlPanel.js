import React from 'react';
import Button from '../ControlPanel/UI/Button/Button';
import classes from './ControlPanel.module.css';
import Aux from '../../hoc/Aux';

const controlPanel = (props) => { 
  return(
    <Aux>
      <div className={classes.SortAndStop}>
        <Button click={props.sortClicked}>Sort</Button>
        <Button click={props.abortClicked}>Abort</Button>
      </div>
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
        { // Future feature
        /*
        <div className={classes.InputDiv}>
          <label>Array:</label>
          <input className={classes.Input} value={props.array}/>
        </div> */}
        <div className={classes.BottomPanel}>
          <div className={classes.BottomLeft}>
            <Button click={props.randomClicked}>Randomize Array</Button>
          </div>
          <div className={classes.VerticalLine}></div>
          <div className={classes.BottomRight}>
            <div className={classes.SliderAndLabel}>
              <label>Sorting Speed: </label>
              <input 
                min='10' max='500'
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
    </Aux>
  );
};

export default controlPanel;

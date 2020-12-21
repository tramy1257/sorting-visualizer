import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../ControlPanel/UI/Button/Button';
import colors from '../../assets/colors';
import classes from './ControlPanel.module.css';

const controlPanel = (props) => { 

  return(
    <Aux>
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
            <label>Sorting Speed: </label>
            <input type='range' className={classes.slider}/>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default controlPanel;

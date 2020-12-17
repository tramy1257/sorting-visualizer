import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../ControlPanel/UI/Button/Button';
import colors from '../../assets/colors';
import classes from './ControlPane.module.css';

const controlPanel = (props) => { 

  return(
    <Aux>
      <Button>Sort</Button>
      <div className={classes.Panel}>
        <div className={classes.AlgoBtn}>
          <Button click={props.selectionClicked}>Selection Sort</Button>
          <Button click={props.bubbleClicked}>Bubble Sort</Button>
          <Button click={props.insertionClicked}>Insertion Sort</Button>
          <Button click={props.simpleClicked}>Simple Sort</Button>
        </div>
        <hr style={{border: `2px solid ${colors.grey}`, width: '60%'}}/>
        <div className={classes.InputDiv}>
          <label>Array:</label>
          <input className={classes.Input}/>
        </div>
        <div className={classes.BottomPanel}>
          <div className={classes.BottomLeft}>
            <Button>Randomize Array</Button>
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

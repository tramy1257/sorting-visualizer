import React from 'react';
import Aux from '../../../hoc/Aux';
import SelectionVisualizer from './SelectionVisualizer/SelectionVisualizer';
import { getOperationLog } from '../../../assets/sort-visual-algos';
import colors from '../../../assets/colors';
import animationOps from '../../../assets/animation-ops';
import ControlPanel from '../../ControlPanel/ControlPanel';

// color for color-coding operation
const COMPARE_COLOR = colors.tan;
const SWAP_COLOR = colors.blue;
const UNSORTED_COLOR = colors.grey;

// Program argument
const STEP_SPEED = 100; // Set animating speed of each step (in ms)

class SelectionSort extends React.Component { 
  state = {
    array: [5,7,2,6,2,7,9,8,4,3,7,5,1,9],//3,9,3,5,7,2],
    sorted: false
  };

  sortHandler = (sortType) => {
    // save the operation log for animation
    const [logs, sortedArr] = getOperationLog(this.state.array, sortType);
    // each element in logs is an array of length 3, the 3 constants below
    // indecate what information each index holds
    const LOG_TYPE = 0, INI_IDX1 = 1, INI_IDX2 = 2;

    // Animating based on operation logs
    for (let i = 0; i < logs.length; ++i) {
      // Find the 2 bars objects that gets swapped
      const bar1 = document.getElementById('bar' + logs[i][INI_IDX2]);
      const bar2 = document.getElementById('bar' + logs[i][INI_IDX1]);

      switch (logs[i][LOG_TYPE]) {
        case 'compare':
          animationOps.compareOp(i, bar1, bar2, COMPARE_COLOR, STEP_SPEED);
          break;
        case 'swap':
          animationOps.swapOp(i, bar1, bar2, SWAP_COLOR, STEP_SPEED);
          break;
        case 'compare-done':
          animationOps.compareDoneOp(i, bar1, bar2, UNSORTED_COLOR, STEP_SPEED);
          break;
        case 'swap-done':
          animationOps.swapDoneOp(i, bar1, bar2, UNSORTED_COLOR, STEP_SPEED);
          break;
        default:
          break;
      } // switch
    } // for
    
    // Change all bars to green indecating that they are in sorted order and
    // update the array state to the sorted one
    setTimeout (() => {
      this.setState({sorted: true});
      this.setState({array: sortedArr});
    }, logs.length * STEP_SPEED);
  };

  // For testing
  testHandler = () => {
  };

  componentDidUpdate() {
    console.log('[SelectionSort.js] componentDidUpdate');
  }

  render() {
    return (
      <Aux>
        <h1>Sorting Visualizer</h1>
        <SelectionVisualizer 
          sorted={this.state.sorted} 
          array={this.state.array}/>
        <ControlPanel 
          selectionClicked={this.sortHandler.bind(this, 'selection')}
          bubbleClicked={this.sortHandler.bind(this, 'bubble')}
          insertionClicked={this.sortHandler.bind(this, 'insertion')}
          simpleClicked={this.sortHandler.bind(this, 'simple')}/>
        <button onClick={this.testHandler}>Test</button>
      </Aux>
    );
  }
}


export default SelectionSort;

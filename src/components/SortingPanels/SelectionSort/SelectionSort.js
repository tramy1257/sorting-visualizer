import React from 'react';
import Aux from '../../../hoc/Aux';
import SelectionVisualizer from './SelectionVisualizer/SelectionVisualizer';
import { getOperationLog, logIndexMap } from '../../../assets/sort-visual-algos';
import { zenburnColor } from '../../../assets/colors';

// color for color-coding operation
const COMPARE_COLOR = zenburnColor.tan;
const SWAP_COLOR = zenburnColor.blue;
const UNSORTED_COLOR = zenburnColor.grey;

// Program argument
const STEP_SPEED = 100; // Set animating speed of each step (in ms)

class SelectionSort extends React.Component { 
  state = {
    array: [5,7,2,6,3,9,3,5,7,2],
    sorted: false
  };

  compareOp = (i, bar1, bar2) => {
    setTimeout ( () => {
      // Change color to compare color
      bar1.style.backgroundColor = COMPARE_COLOR;
      bar2.style.backgroundColor = COMPARE_COLOR;
    }, i * STEP_SPEED);
  }

  swapOp = (i, bar1, bar2) => {
    setTimeout ( () => {
      // Change color to swap color
      bar1.style.backgroundColor = SWAP_COLOR;
      bar2.style.backgroundColor = SWAP_COLOR;
      
      // Calculate the amount to translate
      let translateAmount = bar2.getBoundingClientRect().x - 
                              bar1.getBoundingClientRect().x;
      
      // Animate translating first bar
      bar1.style.transition = `transform ${STEP_SPEED / 1000}s`;
      bar1.style.transform = `translateX(${translateAmount}px)`;

      // Animate translating second bar
      bar2.style.transition = `transform ${STEP_SPEED / 1000}s`;
      bar2.style.transform = `translateX(${-translateAmount}px)`;
    }, i * STEP_SPEED);
  }

  compareDoneOp = (i, bar1, bar2) => {
    setTimeout ( () => {
      // Change color to unsorted color
      bar1.style.backgroundColor = UNSORTED_COLOR;
      bar2.style.backgroundColor = UNSORTED_COLOR;
    }, i * STEP_SPEED);
  }

  swapDoneOp = (i, bar1, bar2, idx1, idx2) => {
    setTimeout ( () => {
      // Change color to unsorted color
      bar1.style.backgroundColor = UNSORTED_COLOR;
      bar2.style.backgroundColor = UNSORTED_COLOR;

      // Clear transition property
      bar2.style.transition = 'transform 0s';
      bar2.style.transform = `translateX(0px)`;

      bar1.style.transition = 'transform 0s';
      bar1.style.transform = `translateX(0px)`;

      // Update bar order
      const temp = bar2.style.order;
      bar2.style.order = bar1.style.order;
      bar1.style.order = temp;
    }, i * STEP_SPEED);
  }

  clickHandler = () => {
    // save the operation log for animation
    const [logs, sortedArr] = getOperationLog(this.state.array);

    // Animating based on operation logs
    for (let i = 0; i < logs.length; ++i) {
      const index1 = logs[i][logIndexMap.INI_IDX1];
      const index2 = logs[i][logIndexMap.INI_IDX2];
      const bar1 = document.getElementById('bar' + index1);
      const bar2 = document.getElementById('bar' + index2);

      switch (logs[i][logIndexMap.LOG_TYPE]) {
        case 'compare':
          this.compareOp(i, bar1, bar2);
          break;
        case 'swap':
          this.swapOp(i, bar1, bar2);
          break;
        case 'compare-done':
          this.compareDoneOp(i, bar1, bar2);
          break;
        case 'swap-done':
          this.swapDoneOp(i, bar1, bar2, index1, index2);
          break;
        default:
          break;
      } // switch
    } // for
    
    // Change all bars to green indecating that they are in sorted order
    setTimeout (() => {
      this.setState({sorted: true});
      this.setState({array: sortedArr});
    }, logs.length * STEP_SPEED);
  };

  testHandler = () => {
  };

  componentDidUpdate() {
    console.log('[SelectionSort.js] componentDidUpdate');
  }

  render() {
    return (
      <Aux>
        <h1>Selection Sort</h1>
        <SelectionVisualizer sorted={this.state.sorted} array={this.state.array}/>
        <button onClick={this.clickHandler}>Sort</button>
        <button onClick={this.testHandler}>Test</button>
      </Aux>
    );
  }
}


export default SelectionSort;

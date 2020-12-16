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
const STEP_SPEED = 10; // Set animating speed of each step (in ms)

class SelectionSort extends React.Component { 
  state = {
    array: [3,5,7,2,4,7,9,10,6,6],
    sorted: false
  };

  compareOp = (i, bar1, bar2) => {
    setTimeout ( () => {
      // Change color to compare color
      bar1.style.backgroundColor = COMPARE_COLOR;
      bar2.style.backgroundColor = COMPARE_COLOR;
    }, i * STEP_SPEED);
  }

  swapOp = (i, bar1, bar2, oriIdx1, oriIdx2, newIdx1, newIdx2, barWidth) => {
    setTimeout ( () => {
      // Change color to swap color
      bar1.style.backgroundColor = SWAP_COLOR;
      bar2.style.backgroundColor = SWAP_COLOR;
      
      // Calculate the amount to translate
      let translateBar1 = barWidth * (newIdx2 - oriIdx1);
      let translateBar2 = barWidth * (newIdx1 - oriIdx2);
      
      // Animate translating first bar
      bar1.style.transition = `transform ${STEP_SPEED / 1000}s`;
      bar1.style.transform = `translateX(${translateBar1}px)`;

      // Animate translating second bar
      bar2.style.transition = `transform ${STEP_SPEED / 1000}s`;
      bar2.style.transform = `translateX(${translateBar2}px)`;
    }, i * STEP_SPEED);
  }

  doneOp = (i, bar1, bar2) => {
    setTimeout ( () => {
      // Change color to unsorted color
      bar1.style.backgroundColor = UNSORTED_COLOR;
      bar2.style.backgroundColor = UNSORTED_COLOR;
    }, i * STEP_SPEED);
  }

  clickHandler = () => {
    // save the operation log for animation
    const [logs, sortedArr] = getOperationLog(this.state.array);
    const barEleWidth = document.getElementById('bar2').getBoundingClientRect().x - 
          document.getElementById('bar1').getBoundingClientRect().x; // in pixel

    // Animating based on operation logs
    for (let i = 0; i < logs.length; ++i) {
      const index1 = logs[i][logIndexMap.ORIGINAL_IDX1];
      const index2 = logs[i][logIndexMap.ORIGINAL_IDX2];
      const bar1 = document.getElementById('bar' + index1);
      const bar2 = document.getElementById('bar' + index2);

      switch (logs[i][logIndexMap.LOG_TYPE]) {
        case 'compare':
          this.compareOp(i, bar1, bar2);
          break;
        case 'swap':
          const newIdx1 = logs[i][logIndexMap.IDX1];
          const newIdx2 = logs[i][logIndexMap.IDX2];
          this.swapOp(i, bar1, bar2, index1, index2, newIdx1, newIdx2, barEleWidth);
          break;
        case 'done':
          this.doneOp(i, bar1, bar2);
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
    const box1 = document.getElementById('bar0');
    const box2 = document.getElementById('bar2');

    const translateValue = box2.getBoundingClientRect().x - box1.getBoundingClientRect().x;
    
    const barEleWidth = document.getElementById('bar2').getBoundingClientRect().x - 
          document.getElementById('bar1').getBoundingClientRect().x; // in pixel

      box2.style.transition = 'transform 0.5s';
      box2.style.transform = `translateX(${barEleWidth * 4}px)`;
      
      setTimeout(()=> {
      box2.style.transition = 'transform 0.5s';
      box2.style.transform = `translateX(${barEleWidth * -1}px)`;

      }, 500);
      console.log('done') ;
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

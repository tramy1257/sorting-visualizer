import React from 'react';
import Aux from '../../../hoc/Aux';
import SelectionVisualizer from './SelectionVisualizer/SelectionVisualizer';
import { getOperationLog, logIndexMap } from '../../../assets/sort-visual-algos';
import { zenburnColor } from '../../../assets/colors';

// color for color-coding operation
const COMPARE_COLOR = zenburnColor.tan;
const SWAP_COLOR = zenburnColor.blue;
const UNSORTED_COLOR = zenburnColor.grey;

class SelectionSort extends React.Component { 
  state = {
    array: [3,5,7,2,4,7,9,10,6,6],
    sorted: false,
    clicked: false
  };

  clickHandler = () => {
    // save the operation log for animation
    const [logs, sortedArr] = getOperationLog(this.state.array);

    
    // Animating based on operation logs
    for (let i = 0; i < logs.length; ++i) {
      setTimeout(() => {
        const bar1 = document.getElementById('bar' + logs[i][logIndexMap.IDX1]);
        const bar2 = document.getElementById('bar' + logs[i][logIndexMap.IDX2]);
        switch (logs[i][logIndexMap.LOG_TYPE]) {
          case 'compare':
            bar1.style.backgroundColor = COMPARE_COLOR;
            bar2.style.backgroundColor = COMPARE_COLOR;
            break;
          case 'swap':
            bar1.style.backgroundColor = SWAP_COLOR;
            bar2.style.backgroundColor = SWAP_COLOR;
            break;
          case 'done':
            bar1.style.backgroundColor = UNSORTED_COLOR;
            bar2.style.backgroundColor = UNSORTED_COLOR;
            break;
          default:
            break;
        } // switch
      }, i * 500);
    } // for
    this.setState({sorted: true});
  };

  componentDidUpdate() {
    console.log('[SelectionSort.js] componentDidUpdate');
  }

  render() {
    return (
      <Aux>
        <h1>Selection Sort</h1>
        <SelectionVisualizer sorted={this.state.sorted} array={this.state.array}/>
        <button onClick={this.clickHandler}>Click</button>
      </Aux>
    );
  }
}

/*
      document.getElementById('bar1').style.backgroundColor = 'red';
      document.getElementById('bar1').style.transition = 'transform 2s';
      document.getElementById('bar1').style.transform = 'translateX(120px)';
*/

export default SelectionSort;

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
const SORTED_COLOR = colors.green;

// program default arguments
const INITIAL_ARR_SIZE = 15;

class SelectionSort extends React.Component { 
  constructor(props) {
    super(props);
    const initialArr = this.randomArr(INITIAL_ARR_SIZE);

    // Setting state
    this.state = {
      array: initialArr,
      sortAlgo: 'simple',
      randomArrSize: INITIAL_ARR_SIZE,
      stepSpeed: 100
    };
  }
  
  // This function return a random array of inputted size
  randomArr = (size) => {
    let newArr = [];
    for (let i = 0; i < size; ++i) {
      newArr.push(Math.floor(Math.random() * 99 + 1));
    }
    return newArr;
  };

  // setTimeout and setInterval variable
  animation = null;
  doneAnimate = null;
  
  // When sort button is clicked
  sortHandler = (sortType) => {
    // save the operation log for animation
    const [logs, sortedArr] = getOperationLog(this.state.array, sortType);
    // each element in logs is an array of length 3, the 3 constants below
    // indecate what information each index holds
    const LOG_TYPE = 0, INI_IDX1 = 1, INI_IDX2 = 2;
    
    // Initialize the bar order to their index and color to unsorted color
    for (let i = 0; i < this.state.array.length; ++i) {
      const bar = document.getElementById('bar' + i);
      bar.style.backgroundColor = UNSORTED_COLOR;
      bar.style.order = i;
    }

    // Animating based on operation logs
    let i = 0; // controling loop
    this.animation = setInterval(() => {
      if (i >= logs.length)
      {
        // Exit the timed loop when done iterating logs
        clearInterval(this.animation);
      }
      else {
        // Find the 2 bars objects that gets swapped
        const bar1 = document.getElementById('bar' + logs[i][INI_IDX1]);
        const bar2 = document.getElementById('bar' + logs[i][INI_IDX2]);
        const sortedBar = bar1;

        // Make different animation based on the log
        switch (logs[i][LOG_TYPE]) {
          case 'compare':
            animationOps.compareOp(bar1, bar2, COMPARE_COLOR);
            break;
          case 'swap':
            animationOps.swapOp(bar1, bar2, SWAP_COLOR, this.state.stepSpeed);
            break;
          case 'compare-done':
            animationOps.compareDoneOp(bar1, bar2, UNSORTED_COLOR);
            break;
          case 'swap-done':
            animationOps.swapDoneOp(bar1, bar2, UNSORTED_COLOR);
            break;
          case 'sorted-bar':
            animationOps.sortedBarOp(sortedBar, SORTED_COLOR);
            break;
          default:
            break;
        } // switch

        // incrementing i for the next iteration
        ++i;
      }
    }, this.state.stepSpeed);
    
    this.doneAnimate = setTimeout (() => {
      this.setState({array: sortedArr}); // Set array state to the sorted one

      // Change bars color to sorted and reset all order
      for (let i = 0; i < this.state.array.length; ++i) {
        const bar = document.getElementById('bar' + i);
        bar.style.backgroundColor = SORTED_COLOR;
        bar.style.order = 0;
      }
    }, logs.length * this.state.stepSpeed);
  };

  abortClickedHandler = () => {
    clearInterval(this.animation);
    clearTimeout(this.doneAnimate);
    
    // Return the bars to their initial state
    for (let i = 0; i < this.state.array.length; ++i) {
      const bar = document.getElementById('bar' + i);
      bar.style.order = 0;
      bar.style.transform = 'translateX(0)';
      bar.style.backgroundColor = UNSORTED_COLOR;
    }
  }

  sortClickedHandler = () => {
    this.abortClickedHandler(); // Abort in case sortin
    this.sortHandler(this.state.sortAlgo);
  };

  changeAlgoHandler = (algoType) => {
    this.setState({sortAlgo: algoType});
  };

  clickRandomHandler = () => {
    this.abortClickedHandler(); // Abort in case sortin

    // generate a new array and change this array state to it
    const newArr = this.randomArr(this.state.randomArrSize);
    this.setState({array: newArr});

    // Change all bars to unsorted color
    for (let i = 0; i < this.state.array.length; ++i) {
      const bar = document.getElementById('bar' + i);
      bar.style.backgroundColor = UNSORTED_COLOR;
    }
  };

  changeSpeedHandler = (newSpeed) => {
    this.setState({stepSpeed: newSpeed});
  }

  changeArrSizeHandler = (newSize) => {
    console.log(newSize);
    this.setState({randomArrSize: newSize});
  }

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
          array={this.state.array}/>
        <ControlPanel 
          array={this.state.array}
          abortClicked={this.abortClickedHandler}
          changeArrSize={this.changeArrSizeHandler}
          changeSpeed={this.changeSpeedHandler}
          randomClicked={this.clickRandomHandler}
          currentAlgo={this.state.sortAlgo}
          sortClicked={this.sortClickedHandler}
          selectionClicked={this.changeAlgoHandler.bind(this, 'selection')}
          bubbleClicked={this.changeAlgoHandler.bind(this, 'bubble')}
          insertionClicked={this.changeAlgoHandler.bind(this, 'insertion')}
          simpleClicked={this.changeAlgoHandler.bind(this, 'simple')}/>
        <button onClick={this.testHandler}>Test</button>
      </Aux>
    );
  }
}


export default SelectionSort;

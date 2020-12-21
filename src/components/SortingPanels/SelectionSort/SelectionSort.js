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

<<<<<<< HEAD
class SelectionSort extends React.Component { 
    state = {
      array: [3,4,5,6,7,4,2,4,6,2],
      sortAlgs: 'simple',
      stepSpeed: 100,
      sorted: false
    };
=======
// Program argument
const STEP_SPEED = 10; // Set animating speed of each step (in ms)

class SelectionSort extends React.Component { 
  constructor(props) {
    super(props);
    const initialArr = this.randomArr(20);
    this.state = {
      array: initialArr,
      sortAlgo: 'simple',
      sorted: false
    };
  }
>>>>>>> working-version

  randomArr = (size) => {
    let newArr = [];
    for (let i = 0; i < size; ++i) {
      newArr.push(Math.floor(Math.random() * 99 + 1));
    }
    return newArr;
  };

  sortHandler = (sortType) => {
    console.log(this.state.array);
    // save the operation log for animation
    const [logs, sortedArr] = getOperationLog(this.state.array, sortType);
    // each element in logs is an array of length 3, the 3 constants below
    // indecate what information each index holds
    const LOG_TYPE = 0, INI_IDX1 = 1, INI_IDX2 = 2;

      for (let i = 0; i < this.state.array.length; ++i) {
        const bar = document.getElementById('bar' + i);
        bar.style.backgroundColor = UNSORTED_COLOR;
        bar.style.order = i;
      }

    // Animating based on operation logs
    for (let i = 0; i < logs.length; ++i) {
      // Find the 2 bars objects that gets swapped
      const bar1 = document.getElementById('bar' + logs[i][INI_IDX2]);
      const bar2 = document.getElementById('bar' + logs[i][INI_IDX1]);

      switch (logs[i][LOG_TYPE]) {
        case 'compare':
          animationOps.compareOp(i, bar1, bar2, COMPARE_COLOR, this.state.stepSpeed);
          break;
        case 'swap':
          animationOps.swapOp(i, bar1, bar2, SWAP_COLOR, this.state.stepSpeed);
          break;
        case 'compare-done':
          animationOps.compareDoneOp(i, bar1, bar2, UNSORTED_COLOR, this.state.stepSpeed);
          break;
        case 'swap-done':
          animationOps.swapDoneOp(i, bar1, bar2, UNSORTED_COLOR, this.state.stepSpeed);
          break;
        default:
          break;
      } // switch
    } // for
    
    // Change all bars to green indecating that they are in sorted order and
    // update the array state to the sorted one
    setTimeout (() => {
<<<<<<< HEAD
      this.setState({array: sortedArr, sorted: true});
    }, logs.length * this.state.stepSpeed);
  };

  selectAlgoHandler = (algoName) => {
    this.setState({sortAlgs: algoName});
  };

  changeSpeedHandler = (newSpeed) => {
    this.setState({stepSpeed: newSpeed});
  };

  randomArrayHandler = () => {
    const arrSize = 20;
    const newArr = this.randomArr(arrSize);
    this.setState({array: newArr});
=======
      this.setState({sorted: true, array: sortedArr});
      for (let i = 0; i < this.state.array.length; ++i) {
        const bar = document.getElementById('bar' + i);
        bar.style.order = 0;
      }
    }, logs.length * STEP_SPEED);
>>>>>>> working-version
  };

  sortClickedHandler = () => {
    this.sortHandler(this.state.sortAlgo);
  };

  changeAlgoHandler = (algoType) => {
    this.setState({sortAlgo: algoType});
  };

  clickRandomHandler = () => {
    console.log('clicked');
    const newArr = this.randomArr(20);
    this.setState({array: newArr, sorted: false});
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
<<<<<<< HEAD
          randomize={this.randomArrayHandler}
          changeSpeed={this.changeSpeedHandler}
          currentAlgo={this.state.sortAlgs}
          sortClicked={this.sortHandler.bind(this, this.state.sortAlgs)}
          selectionClicked={this.selectAlgoHandler.bind(this, 'selection')}
          bubbleClicked={this.selectAlgoHandler.bind(this, 'bubble')}
          insertionClicked={this.selectAlgoHandler.bind(this, 'insertion')}
          simpleClicked={this.selectAlgoHandler.bind(this, 'simple')}/>
=======
          randomClicked={this.clickRandomHandler}
          currentAlgo={this.state.sortAlgo}
          sortClicked={this.sortClickedHandler}
          selectionClicked={this.changeAlgoHandler.bind(this, 'selection')}
          bubbleClicked={this.changeAlgoHandler.bind(this, 'bubble')}
          insertionClicked={this.changeAlgoHandler.bind(this, 'insertion')}
          simpleClicked={this.changeAlgoHandler.bind(this, 'simple')}/>
>>>>>>> working-version
        <button onClick={this.testHandler}>Test</button>
      </Aux>
    );
  }
}


export default SelectionSort;

import SelectionSort from './components/SortingPanels/SelectionSort/SelectionSort';
import colors from './assets/colors';

function App() {
  let array = [2, 5, 6, 1, 7, 9, 4, 3, 8];
  const renderArray = (arr) => arr.map( (num) => num + " ");

  return (
    <div className="App">
      <SelectionSort />
    </div>
  );
}

export default App;

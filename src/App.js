import SelectionSort from './components/SortingPanels/SelectionSort/SelectionSort';

function App() {
  let array = [2, 5, 6, 1, 7, 9, 4, 3, 8];
  const renderArray = (arr) => arr.map( (num) => num + " ");

  return (
    <div className="App">
      <SelectionSort />
      <p>Array to sort: </p>
      <p>{renderArray(array)}</p>
      <p>Sorted Array: </p>
      <p>{renderArray(array)}</p>
      

    </div>
  );
}

export default App;

export const logIndexMap = {
  LOG_TYPE: 0,
  IDX1: 1,
  IDX2: 2
};

let operationLog = [];

export const getOperationLog = (arr) => {
  operationLog = [];
  const sortedArr = simpleSort(arr);
  return [operationLog, sortedArr];
};

// --------- Simple sort ------------
export const simpleSort = (arr) => {
  let arrCopy = [...arr];
  for (let i = 0; i < arrCopy.length - 1; ++i) {
    for (let j = i + 1; j < arrCopy.length; ++j) {
      // Log a comparison operation
      operationLog.push(['compare', i, j]);
      if (arrCopy[j] < arrCopy[i]) {
        swap(arrCopy, i, j);
      } // if
      // Log 'done' when done comparing & swaping to restore color
      operationLog.push(['done', i, j]);
    } // inner for
  } // outer for
  return arrCopy;
};

// Swapping
const swap = (arr, index1, index2) => {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
  operationLog.push(['swap', index1, index2]); // Log a swap operation
}; // swap()


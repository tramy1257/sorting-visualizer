export const logIndexMap = {
  LOG_TYPE: 0,
  ORIGINAL_IDX1: 1,
  ORIGINAL_IDX2: 2,
  IDX1: 3,
  IDX2: 4,
};

let operationLog = [];

export const getOperationLog = (arr) => {
  operationLog = [];
  const sortedArr = simpleSort(arr);
  return [operationLog, sortedArr];
};

// --------- Simple sort ------------
export const simpleSort = (arr) => {
  let arrCopy = arr.map( (element, index) => ({val: element, idx: index}) );
  for (let i = 0; i < arrCopy.length - 1; ++i) {
    for (let j = i + 1; j < arrCopy.length; ++j) {
      // Log a comparison operation
      operationLog.push(['compare', arrCopy[i].idx, arrCopy[j].idx]);
      if (arrCopy[j].val < arrCopy[i].val) {
        operationLog.push(['swap', arrCopy[i].idx, arrCopy[j].idx, i, j]); // Log a swap operation
        swap(arrCopy, i, j);
      } // if
      // Log 'done' when done comparing & swaping to restore color
      operationLog.push(['done', arrCopy[i].idx, arrCopy[j].idx]);
    } // inner for
  } // outer for
  return arrCopy;
};

// Swapping
const swap = (arr, index1, index2) => {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}; // swap()


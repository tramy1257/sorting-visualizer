export const logIndexMap = {
  LOG_TYPE: 0,
  INI_IDX1: 1,
  INI_IDX2: 2,
};

let operationLog = [];

export const getOperationLog = (arr) => {
  operationLog = [];
  const sortedArr = simpleSort(arr);
  return [operationLog, sortedArr];
};

// --------- Simple sort ------------
export const simpleSort = (arr) => {
  let arrCopy = [...arr]; // Prevent mutation
  // arrIniIndex stores the index of each element in the initial unsorted list
  let arrIniIndex = arrCopy.map((ele, index) => index);

  // Sorting:
  for (let i = 0; i < arrCopy.length - 1; ++i) {
    for (let j = i + 1; j < arrCopy.length; ++j) {
      operationLog.push(['compare', arrIniIndex[i], arrIniIndex[j]]);

      if (arrCopy[j] < arrCopy[i]) {
        operationLog.push(['swap', arrIniIndex[i], arrIniIndex[j]]);

        swap(arrCopy, i, j);
        swap(arrIniIndex, i, j);

        operationLog.push(['swap-done', arrIniIndex[i], arrIniIndex[j]]);
      } // if
      else {
        operationLog.push(['compare-done', arrIniIndex[i], arrIniIndex[j]]);
      }
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


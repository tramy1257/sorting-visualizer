export const getOperationLog = (arr, sortType) => {
  let operationLog = [];
  let sortedArr = [];
  
  switch (sortType) {
    case 'insertion':
      sortedArr = insertionSort(arr, operationLog);
      break;
    case 'bubble':
      sortedArr = bubbleSort(arr, operationLog);
      break;
    case 'selection':
      sortedArr = selectionSort(arr, operationLog);
      break;
    default:
      sortedArr = simpleSort(arr, operationLog);
      break;
  }
  return [operationLog, sortedArr];
};

// --------- Insertion Sort -----------
const insertionSort = (arr, logs) => {
  let arrCopy = [...arr]; // prevents modification of the original array
  // arrIniIndex stores the index of each element in the initial unsorted list
  let arrIniIndex = arrCopy.map((ele, index) => index);

	for (let i = 0; i < arrCopy.length - 1; i++) {
		for (let j = i + 1; j >= 1; j--) {
      logs.push(['compare', arrIniIndex[j], arrIniIndex[j - 1]]);
      if (arrCopy[j] < arrCopy[j - 1]) {
        logs.push(['swap', arrIniIndex[j], arrIniIndex[j - 1]]);
			  swap(arrCopy, j - 1, j);
        swap(arrIniIndex, j - 1, j);
        logs.push(['swap-done', arrIniIndex[j], arrIniIndex[j - 1]]);
      }
      else {
        logs.push(['compare-done', arrIniIndex[j], arrIniIndex[j - 1]]);
        break;
      }
		}// inner for
	} // outer for
	
	return arrCopy;
}

// --------- Bubble Sort -----------
const bubbleSort = (arr, logs) => {
  let arrCopy = [...arr]; // prevents modification of the original array
  // arrIniIndex stores the index of each element in the initial unsorted list
  let arrIniIndex = arrCopy.map((ele, index) => index);

	let sorted = false; // Keeps track of whether any swap is performed

	while (!sorted) {
		sorted = true; // is true until a swap is performed
		for (let i = 0; i < arrCopy.length - 1; i++) {
      logs.push(['compare', arrIniIndex[i], arrIniIndex[i + 1]]);
			if (arrCopy[i] > arrCopy[i + 1]) {
				sorted = false; // Swap is performed so the array is not sorted

        logs.push(['swap', arrIniIndex[i], arrIniIndex[i + 1]]);

        swap(arrCopy, i, i + 1);
        swap(arrIniIndex, i, i + 1);

        logs.push(['swap-done', arrIniIndex[i], arrIniIndex[i + 1]]);
			}// end if
      else {
        logs.push(['compare-done', arrIniIndex[i], arrIniIndex[i + 1]]);
      }
		}// end for
	}
	return arrCopy;
}

// --------- Selection Sort ----------
const selectionSort = (arr, logs) => {
  let arrCopy = [...arr]; // Prevent mutation
  // arrIniIndex stores the index of each element in the initial unsorted list
  let arrIniIndex = arrCopy.map((ele, index) => index);

  // Sorting:
  for (let i = 0; i < arrCopy.length - 1; ++i) {
    let minIdx= i;
    for (let j = i + 1; j < arrCopy.length; ++j) {
      logs.push(['compare', arrIniIndex[i], arrIniIndex[j]]);
      logs.push(['compare-done', arrIniIndex[i], arrIniIndex[j]]);
      if (arrCopy[j] < arrCopy[minIdx]) {
        minIdx = j;
      } // if
    } // inner for

    logs.push(['swap', arrIniIndex[i], arrIniIndex[minIdx]]);
    // Swapping array elements and their initial indexes
    swap(arrCopy, i, minIdx);
    swap(arrIniIndex, i, minIdx);

    logs.push(['swap-done', arrIniIndex[i], arrIniIndex[minIdx]]);
    logs.push(['sorted-bar', arrIniIndex[i]]);
  } // outer for
  return arrCopy;
};


// --------- Simple sort ------------
const simpleSort = (arr, logs) => {
  let arrCopy = [...arr]; // Prevent mutation
  // arrIniIndex stores the index of each element in the initial unsorted list
  let arrIniIndex = arrCopy.map((ele, index) => index);

  // Sorting:
  for (let i = 0; i < arrCopy.length - 1; ++i) {
    for (let j = i + 1; j < arrCopy.length; ++j) {
      logs.push(['compare', arrIniIndex[i], arrIniIndex[j]]);
      if (arrCopy[j] < arrCopy[i]) {
        logs.push(['swap', arrIniIndex[i], arrIniIndex[j]]);
        
        // Swapping array elements and their initial indexes
        swap(arrCopy, i, j);
        swap(arrIniIndex, i, j);

        logs.push(['swap-done', arrIniIndex[i], arrIniIndex[j]]);
      } // if
      else {
        logs.push(['compare-done', arrIniIndex[i], arrIniIndex[j]]);
      }
    } // inner for
    logs.push(['sorted-bar', arrIniIndex[i]]);
  } // outer for
  return arrCopy;
};

// -------- Merge Sort --------


// Swapping
const swap = (arr, index1, index2) => {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}; // swap()


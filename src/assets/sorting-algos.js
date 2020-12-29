// -------------------------
//    Sorting Functions
// -------------------------

// --------- Bubble Sort ----------
function bubbleSort(arr) {
  let array = [...arr]; // prevents modification of the original array

	let sorted = false; // Keeps track of whether any swap is performed

	while (!sorted) {
		sorted = true; // is true until a swap is performed
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				sorted = false; // Swap is performed so the array is not sorted
        swap(array, i, i + 1);
			}// end if
		}// end for
	}
	return array;
}

// -------- Insertion Sort --------
function insertionSort(arr) {
  let array = [...arr]; // prevents modification of the original array

	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j >= 0 && array[j] < array[j - 1]; j--) {
			swap(array, j - 1, j);
		}// inner for
	} // outer for
	
	return array;
}

// -------- Selection Sort --------
function selectionSort(arr) {
  let array = [...arr]; // prevents modification of the original array

	for (let i = 0; i < array.length - 1; ++i) {
		let smallest = i;
		for (let j = i + 1; j < array.length; ++j) {
			if (array[j] < array[smallest]) {
				smallest = j;
			} // if
		} // inner forA
		
		swap(array, i, smallest);
	}// outer for
	
	return array;
}

// -------- Quick Sort --------
function quickSort(arr) {
  let array = [...arr]; // prevents modification of the original array

	const quickSortRecurse = (arr, left, right) => {
		if (right > left) {
			const pivotPos = partition(arr, left, right);
			quickSortRecurse(arr, left, pivotPos - 1);
			quickSortRecurse(arr, pivotPos + 1, right);
		}
	};	// end quickSortRecurse
	
	quickSortRecurse(array, 0, array.length - 1);
	return array;
}


// -------- Heap Sort --------

// -------- Merge Sort --------
function mergeSort(array) {
  // Write your code here.
	const mergeSortRecurse = (array, left, right) => {
		// Divide the array into 2 smaller array with indices: l1 to r1, l2 to r2
		const l2 = left + Math.floor((right - left + 1) / 2);
		const r2 = right;
		const l1 = left;
		const r1 = l2 - 1;
		
		// Base case: when array only have 1 element
		if (left >= right) {
			return true;
		}
		
		// Recurse on left and right array
		mergeSortRecurse(array, l1, r1);
		mergeSortRecurse(array, l2, r2);
		
		// Merge the 2 array back
		merge(array, l1, r1, l2, r2);
	}; // end mergeSortRecurse()
	
	mergeSortRecurse(array, 0, array.length - 1);
	
	return array;
}

function merge(array, l1, r1, l2, r2) {
	let sorted = [];
	const start = l1;	// To keep track of the first index
	
	// Fill sorted with elements from both array until one runs out of element
	while (l1 <= r1 && l2 <= r2) {
		if (array[l1] < array[l2]) {
			sorted.push(array[l1]);
			++l1;
		}
		else {
			sorted.push(array[l2]);
			++l2;
		}
	} // end while

	// Fill the sorted array with the remaining of any array
	if (l1 <= r1) {
		sorted.push(...array.slice(l1, r1 + 1));
	}	
	if (l2 <= r2) {
		sorted.push(...array.slice(l2, r2 + 1));
	}
	
	// Copy the sorted result back into the array
	for (let i = 0; i < sorted.length; ++i) {
		array[start + i] = sorted[i];
	}
}

// -------- Count Sort --------


//------------------------
//    Helper Function
//------------------------

function swap(arr, index1, index2) {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function partition(arr, left, right) {
	let pivotIndex = left;
	for (let i = left + 1; i <= right; ++i) {
		if (arr[i] < arr[pivotIndex]) {
			const removed = arr.splice(i, 1);
			arr.splice(left, 0, removed[0]);
			++pivotIndex;
		} // end if
	} // end for
	return pivotIndex;
} // end partition()

//-----------------
//    Exporting
//----------------
export { bubbleSort, insertionSort, selectionSort, quickSort };

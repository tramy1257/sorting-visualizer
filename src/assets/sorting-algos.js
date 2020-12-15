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

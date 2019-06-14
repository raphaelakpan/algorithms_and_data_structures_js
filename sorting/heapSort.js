// Uses heap data structure
// We create a max heap, swap the root element with the last element to sort the root element
// We repeat for other elements apart from the root until array is sorted

// Helper function
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Helper function
//  40
// 4  8
function heapify(array, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) largest = left;
  if (right < n && array[right] > array[largest]) largest = right;
  if (largest !== i) {
    swap(array, largest, i);
    // recursively heapify the affected subtree
    heapify(array, n, largest);
  }
}

function heapSort(array, n = array.length) {
  // build max heap
  for (let i = n / 2 - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    swap(array, 0, i);
    heapify(array, i, 0);
  }
}

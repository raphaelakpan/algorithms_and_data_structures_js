class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const value = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (value <= parent) break;
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  removeMax() {
    let max = this.values[0];
    let last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let index = 0,
      leftChild,
      rightChild,
      leftChildIndex,
      rightChildIndex,
      swap;
    let element = this.values[index];

    while (true) {
      swap = null;
      leftChildIndex = 2 * index + 1;
      rightChildIndex = 2 * index + 2;
      if (leftChildIndex < this.values.length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) swap = leftChildIndex;
      }
      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap !== null && rightChild > leftChild) ||
          (swap === null && rightChild > element)
        ) {
          swap = rightChildIndex;
        }
      }
      if (!swap) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(55);
heap.insert(11);
console.log(heap);
heap.removeMax();
heap.removeMax();
heap.removeMax();
heap.removeMax();
heap.removeMax();
heap.removeMax();
console.log(heap);
// [41, 39, 33, 18. 27, 12]

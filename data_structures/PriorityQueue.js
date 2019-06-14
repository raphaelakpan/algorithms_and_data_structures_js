// Implement Priority Queue using MinBinaryHeap

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const value = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (value.priority >= parent.priority) break;
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    let min = this.values[0];
    let last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown();
    }
    return min;
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
        if (leftChild.priority < element.priority) swap = leftChildIndex;
      }
      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap !== null && rightChild.priority < leftChild.priority) ||
          (swap === null && rightChild.priority < element.priority)
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

let pq = new PriorityQueue();
pq.enqueue('Fever', 3);
pq.enqueue('cold', 1);
pq.enqueue('leg injury', 2);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);
console.log(pq.dequeue());
